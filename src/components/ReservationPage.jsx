import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import CalendarHeader from "./calendarComponents/CalendarHeader";
import CalendarBody from "./calendarComponents/CalendarBody";
import EventModal from "./calendarComponents/EventModal";

const API_URL = "http://localhost:3000/events/";

const ReservationPage = () => {
  const [date, setDate] = useState(new Date());
  const [modalFlg, setModalFlg] = useState(false);
  const [events, setEvents] = useState([]);
  const [targetEvent, setTargetEvent] = useState({
    id: null,
    title: "",
    startDateTime: "",
    endDateTime: "",
  });

  const onModalOpen = () => setModalFlg(true);
  const onModalClose = () => setModalFlg(false);

  // 初回レンダー用フラグ
  let isFirst = false;

  useEffect(() => {
    fetchEvent();
    isFirst = true;
  }, []);

  useEffect(() => {
    if (!isFirst && targetEvent.id !== null) {
      setModalFlg(true);
    }
  }, [targetEvent]);

  const fetchEvent = () => {
    fetch(API_URL)
      .then((responseData) => {
        return responseData.json();
      })
      .then((result) => {
        setEvents(result);
      });
  };

  const addEvent = (title, startDateTime, endDateTime) => {
    const addData = { title, startDateTime, endDateTime };
    fetch(API_URL, {
      body: JSON.stringify(addData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(fetchEvent);
  };

  const deleteEvent = (id) => {
    const targetUrl = API_URL + id;
    fetch(targetUrl, {
      method: "DELETE",
    }).then(fetchEvent);
  };

  const editEvent = (id, title, startDateTime, endDateTime) => {
    const targetUrl = API_URL + id;
    const editData = { id, title, startDateTime, endDateTime };
    fetch(targetUrl, {
      body: JSON.stringify(editData),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(fetchEvent);
  };

  return (
    <>
      <CalendarHeader date={date} setDate={setDate} onModalOpen={onModalOpen} />
      <CalendarBody
        date={date}
        events={events}
        setTargetEvent={setTargetEvent}
      />
      <EventModal
        modalFlg={modalFlg}
        onModalClose={onModalClose}
        addEvent={addEvent}
        deleteEvent={deleteEvent}
        targetEvent={targetEvent}
        setTargetEvent={setTargetEvent}
        editEvent={editEvent}
      />
    </>
  );
};

export default ReservationPage;
