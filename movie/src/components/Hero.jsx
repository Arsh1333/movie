import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Hero = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://3.imimg.com/data3/JF/UR/MY-4268295/cinema-hall-interiors.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[800px]">
            <h1 className="mb-5 text-5xl font-bold font-ubuntu text-white">
              For All of Your{" "}
              <span className="font-qwitcher bg-yellow-500 p-[5px]">
                {" "}
                MOVIE
              </span>{" "}
              REVIEWS
            </h1>
            <p className="mb-5 text-white">
              With detailed themes, ratings, and insights, movieReview ensures
              you spend less time searching and more time watching. Dive in and
              make every movie night count!.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Public Reviews
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Explore range of movie reviews made by our users.{" "}
                  <span className="text-green-400">Login or Register</span>{" "}
                  first for viewing personallized reviews
                </p>

                <div className="modal-action">
                  <form method="dialog">
                    <Link to="/public" className="btn btn-warning">
                      Explore
                    </Link>
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-red m-[2px]">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
