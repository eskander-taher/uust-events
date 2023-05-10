import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFromServer from "../../helpers/getDataFromServer";
import sendDataToServer from "../../helpers/sendDataToServer";
import updateDataFromServer from "../../helpers/updateDataFromServer";

function Event({ user }) {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [participations, setParticipations] = useState([]);
  const [paidParticipants, setPaidParticipants] = useState([]);
  const [unpaidParticipants, setUnpaidParticipants] = useState([]);

  useEffect(() => {
    // Function to fetch event data from the server based on the id
    const fetchEvent = async () => {
      try {
        const data = await getDataFromServer(`events/1/${id}`);

        setEvent(data);
      } catch (error) {
        console.error("Error fetching Event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  useEffect(() => {
    // Function to fetch participations data from the server based on the id
    const fetchEvent = async () => {
      try {
        const data = await getDataFromServer(`participations/${id}`);
        setPaidParticipants(data.filter((participation) => participation.paid));
        setUnpaidParticipants(
          data.filter((participation) => !participation.paid)
        );
        setParticipations(data);
      } catch (error) {
        console.error("Error fetching Event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  async function participate() {
    try {
      const event_id = id;
      const user_id = user.user.id;
      await sendDataToServer({ event_id, user_id }, "participations");
    } catch (error) {
      console.log(error);
    }
  }

  async function handlePayment(id) {
    const data = await updateDataFromServer("participations/" + id);
    console.log(data)
    if (data.paid) {
      setPaidParticipants([...paidParticipants, data]);
      setUnpaidParticipants(
        unpaidParticipants.filter(
          (participation) => participation._id !== data._id
        )
      );
    } else {
      setUnpaidParticipants([...unpaidParticipants, data]);
      setPaidParticipants(
        paidParticipants.filter(
          (participation) => participation._id !== data._id
        )
      );
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-2/3 h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-4">Event Name: {event.name}</h2>
        <h3 className="text-2xl font-bold mb-4">
          Organizer Name: {event.organizer_id.name}
        </h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">Fees:</span>
          <span className="font-bold text-green-500">{event.fees}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">Date of Event:</span>
          <span className="font-bold">{event.date.split("T")[0]}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">Seats:</span>
          <span className="font-bold">{event.seats}</span>
        </div>
        {user && user.user.id !== event.organizer_id._id && (
          <button
            onClick={participate}
            className="bg-sky-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
          >
            Participate
          </button>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Participants</h2>
        {participations &&
          paidParticipants.map((participation) => (
            <div key={participation._id}>
              <h1>{participation.user_id.name}</h1>
              {user && user.user.id === event.organizer_id._id && (
                <button
                  className="text-black hover:bg-gray-700 hover:text-white px-1 rounded-md text-sm font-bold bg-sky-400"
                  onClick={() => handlePayment(participation._id)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
      </div>
      <div>
        {user && user.user.id === event.organizer_id._id && (
          <>
            <h2 className="text-2xl font-bold mb-4">Participants to pay</h2>
            {participations &&
              unpaidParticipants.map((participation) => (
                <div key={participation._id}>
                  <span className="m-4" key={participation._id}>
                    {participation.user_id.name}
                  </span>
                  <button
                    className="text-black hover:bg-gray-700 hover:text-white px-1 rounded-md text-sm font-bold bg-sky-400"
                    onClick={() => handlePayment(participation._id)}
                  >
                    Add
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Event;
