import { useState, useEffect } from "react";
import EventList from "../Dashboard/EventList";

import getDataFromServer from "../../helpers/getDataFromServer";

function Events({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromServer("events");
      setEvents(data);
    };
    getData();
  }, []);

  return (
    <div>
      <EventList events={events} setEvents={setEvents} user={user} />
    </div>
  );
}

export default Events;
