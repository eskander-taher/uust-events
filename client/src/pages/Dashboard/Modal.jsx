import React from "react";

const Modal = ({
  handleFormSubmit,
  handleInputChange,
  newEvent,
  setShowModal,
  setDisplay,
}) => {
  return (
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
            Event Name:
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
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={newEvent.location}
            onChange={handleInputChange}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fees" className="block text-gray-700 font-bold mb-2">
            Fees
          </label>
          <input
            type="text"
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
            Number of seats
          </label>
          <input
            type="text"
            name="seats"
            id="seats"
            value={newEvent.seats}
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
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={newEvent.date}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
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

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
          <button
            className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => {
              setShowModal(false);
              setDisplay("flex");
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
