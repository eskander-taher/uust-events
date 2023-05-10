import React from "react";

const Event = ({ id, name, description, fees, seats, date, deleteEvent, user, organizer_id }) => {
  return (
    <li className="border rounded-lg p-4 my-2 bg-blue-200 3/12">
      <p className="text-lg font-medium mb-2 text-gray-700">{name}</p>
      <p className="text-gray-700 mb-2 w-96 ">{description}</p>
      <div className="flex justify-between ">
        <p className="text-gray-700">
          Fees: <span className="font-bold">{fees}</span>
        </p>
        <p className="text-gray-700">
          Seats: <span className="font-bold">{seats}</span> 
        </p>
        <p className="text-gray-700">
          Date: <span className="font-bold">{date}</span>
        </p>
      </div>
      <div className="flex gap-4">
        
        {user && user.user.id == organizer_id && (
          <button
            className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={() => deleteEvent(id)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default Event;
