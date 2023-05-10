import { useState } from "react";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [dispay, setdisplay] = useState("flex");
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    fees: "",
    participants: "",
    numDates: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEvents((prevState) => [...prevState, newEvent]);
    setNewEvent({
      name: "",
      description: "",
      fees: "",
      participants: "",
      numDates: "",
    });
    setShowModal(false);
  };

  return (
    <div className={"flex items-center justify-center h-screen mt-6 w-full "}>
      <div className={"flex justify-center flex-col " + dispay}>
        <button
          onClick={() => {
            setdisplay("hidden");
            setShowModal(true);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add Event
        </button>
        {events.length === 0 && (
          <p className="text-gray-500 mb-4">
            No events added yet. Click "Add Event" to get started.
          </p>
        )}
        {events.length > 0 && (
          <ul class="mt-4 flex gap-2 w-full h-full flex-wrap">
            {events.map((event, index) => (
              <li
                key={index}
                class="border rounded-lg p-4 my-2 bg-blue-200 3/12"
              >
                <p class="text-lg font-medium mb-2 text-gray-700">
                  {event.name}
                </p>
                <p class="text-gray-700 mb-2 w-96 ">{event.description}</p>
                <div class="flex justify-between ">
                  <p class="text-gray-700">Fees: <span className="font-bold">{event.fees}</span></p>
                  <p class="text-gray-700">
                    Participants: <span className="font-bold">{event.participants}</span>
                  </p>
                  <p class="text-gray-700">Number of Dates: <span className="font-bold">{event.numDates}</span></p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showModal && (
        <div className="bg-black p-2 w-4/5 rounded-2xl">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white px-8 pt-6 pb-8 mb-4 rounded-2xl shadow-slate-600"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Task Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={newEvent.name}
                onChange={handleInputChange}
                className="w-full border border-gray-400 p-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Description:
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={newEvent.description}
                onChange={handleInputChange}
                className="w-full border border-gray-400 p-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="fees"
                className="block text-gray-700 font-bold mb-2"
              >
                Fees 
              </label>
              <input
                type="number"
                name="fees"
                id="fees"
                value={newEvent.fees}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="participants"
                className="block text-gray-700 font-bold mb-2"
              >
              Participants
              </label>
              <input
                type="number"
                name="participants"
                id="participants"
                value={newEvent.participants}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="numDates"
                className="block text-gray-700 font-bold mb-2"
              >
                Number of Dates
              </label>
              <input
                type="number"
                name="numDates"
                id="numDates"
                value={newEvent.numDates}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setdisplay("flex")}
              >
                Add
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => {
                  setShowModal(false);
                  setdisplay("flex");
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
