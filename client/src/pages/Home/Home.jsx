import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
  let navigate = useNavigate();
  
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20">
      <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to UUST Events, the one-stop platform for events happening on
          USATU university.
        </h1>
        Ms. Nai Barghouti
        <p className="text-lg text-gray-600 leading-relaxed">
          We offer a wide range of events, from hackathons and trips to parties
          and social gatherings, all designed to help you make the most of your
          university experience. Our website allows you to easily register for
          events using your email, password, and student ID, making it simple
          and hassle-free to get involved. If you’re an organizer, you’ll also
          have the ability to add and remove participants, ensuring that your
          event runs smoothly and safely. So why wait? Sign up today and start
          exploring all the amazing events happening on your campus!
        </p>
        <div className="flex flex-row gap-6 mt-10">
          {user ? (
            <>
              <button
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold bg-sky-400"
                onClick={() => navigate("/events")}
              >
                Participate
              </button>
              <button
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold bg-sky-400"
                onClick={() => navigate("/dashboard")}
              >
                Add Event
              </button>
            </>
          ) : (
            <>
              <button
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold bg-sky-400"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
              <button
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold bg-sky-400"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 my-5 mx-6">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"
          alt="Image of student"
        />
      </div>
    </div>
  );
}

export default Home;
