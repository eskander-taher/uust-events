import { Link } from "react-router-dom";
import Event from "./Event";
import deleteDataFromServer from "../../helpers/deleteDataFromServer";

const EventList = ({ events, setEvents, user }) => {
  async function deleteEvent(id) {
    try {
      await deleteDataFromServer("events/" + id);
      setEvents(events.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {events.length === 0 && (
        <p className="text-gray-500 mb-4">
          No events added yet. Click "Add Event" to get started.
        </p>
      )}
      {events.length > 0 && (
        <ul className="mt-4 flex gap-2 w-full h-full flex-wrap">
          {events.map((event) => (
            <Link key={event._id} to={`/events/${event._id}`}>
              <Event
                id={event._id}
                name={event.name}
                description={event.description}
                fees={event.fees}
                seats={event.seats}
                date={event.date.split("T")[0]}
                organizer_id={event.organizer_id}
                deleteEvent={deleteEvent}
                user={user}
              />
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default EventList;
