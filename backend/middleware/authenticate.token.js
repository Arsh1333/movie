import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header("Authorization")?.split(" ")[1];
  console.log("Extracted Token:", token); // Log the token to ensure it's being passed correctly

  if (!token) {
    console.log("No token provided"); // Log when token is missing
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    // Verify the token with the secret key
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Verified User:", verifiedUser); // Log the verified user data

    req.user = verifiedUser; // Attach the user to the request object for later use
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("JWT Verification Error:", err.message); // Log verification errors
    res.status(403).json({ message: "Invalid Token" });
  }
};

export { authenticateToken };
