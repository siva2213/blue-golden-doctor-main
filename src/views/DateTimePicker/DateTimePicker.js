import React, { useState } from "react";
import "./DateTimePicker.css";
import { IoMdClose } from "react-icons/io";
import Scrollbar from "../../components/Scrollbar/Scrollbar";

const DateSelectorBtn = ({ date, isSelected, onClick }) => (
  <div
    className={`date-selector ${isSelected ? "selected" : "datenotselected"}`}
    onClick={() => onClick(date)}
  >
    <div className="month">
      {date.toLocaleString("default", { month: "short" })}
    </div>
    <div className="day">{date.getDate()}</div>
    <div className="weekday">
      {date.toLocaleString("default", { weekday: "short" })}
    </div>
  </div>
);

const TimeSelectorBtn = ({ time, period, isSelected, onClick }) => (
  <div
    className={`time-selector ${
      isSelected ? "timeselected" : "timenotselected"
    }`}
    onClick={() => onClick(time)}
  >
    <div className="time">{time}</div>
    <div className="period">{period}</div>
  </div>
);
const DateTimePicker = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  // Generate dates for the current month
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const numDays = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: numDays }, (_, index) => {
    const date = new Date(year, month, index + 1);
    return date;
  }).filter((date) => date >= currentDate);

  // Generate time options
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    times.push({
      time: `${hour < 10 ? "0" + hour : hour}:00`,
      period: hour < 12 ? "AM" : "PM",
    });
    times.push({
      time: `${hour < 10 ? "0" + hour : hour}:30`,
      period: hour < 12 ? "AM" : "PM",
    });
  }

  return (
    <section className="date-time-selector">
      <section className="date-selector-container">
        <div className="calendar-hdr">
          <span className="calendar-title">Choose Date</span>
          <IoMdClose className="close-calendar" onClick={onClose} />
        </div>
        <div className="dates">
          {dates.map((date, index) => (
            <DateSelectorBtn
              key={index}
              date={date}
              isSelected={
                selectedDate && selectedDate.getTime() === date.getTime()
              }
              onClick={handleDateSelection}
            />
          ))}
        </div>
      </section>
      <Scrollbar
        scrollbarBackground="white"
        scrollWidth="86vw"
        scrollbarPosition="none"
        scrollTopposition="0px"
        scrollcontentPadding="0px"
      >
        <section className="time-selector-container">
          <span className="calendar-title">Choose Time</span>
          <div className="times">
            {times.map((time, index) => (
              <TimeSelectorBtn
                key={index}
                {...time}
                isSelected={selectedTime === time.time}
                onClick={handleTimeSelection}
              />
            ))}
          </div>
        </section>
      </Scrollbar>
    </section>
  );
};

export default DateTimePicker;
