import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventList from "./EventList";
import Modal from "./Modal";
import sendDataToServer from "../../helpers/sendDataToServer";
import getDataFromServer from "../../helpers/getDataFromServer";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const data = await getDataFromServer("events/" + user.user.id);
        setEvents(data);
      };
      getData();
    }
  }, []);

  const [newEvent, setNewEvent] = useState({
    name: "",
    location: "",
    fees: "",
    seats: "",
    date: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const organizer_id = JSON.parse(localStorage.getItem("userData")).user.id;
    const dataToServer = { organizer_id, ...newEvent };

    const responededData = await sendDataToServer(dataToServer, "events");

    setEvents((prevState) => [...prevState, responededData]);

    setNewEvent({
      name: "",
      location: "",
      fees: "",
      seats: "",
      date: "",
      description: "",
    });

    setShowModal(false);
    setDisplay("flex");
  };

  return (
    <div className="flex items-center justify-center h-screen mt-6 w-full">
      <div className={"flex justify-center flex-col " + display}>
        {user ? (
          <button
            onClick={() => {
              setDisplay("hidden");
              setShowModal(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add Event
          </button>
        ) : (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          </>
        )}
        <EventList events={events} setEvents={setEvents} user={user} />
      </div>
      {showModal && (
        <Modal
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          newEvent={newEvent}
          setShowModal={setShowModal}
          setDisplay={setDisplay}
        />
      )}
    </div>
  );
};

export default Dashboard;
