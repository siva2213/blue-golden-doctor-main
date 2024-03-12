import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ expiryTimestamp, onTimerExpire }) => {
  const calculateTimeLeft = () => {
    const difference = expiryTimestamp - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = {
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      };
    } else {
      if (typeof onTimerExpire === "function") {
        onTimerExpire(); // Call the callback function when timer expires
      }
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [expiryTimestamp]);

  return (
    <CountdownCircleTimer
      isPlaying
      duration={30} // 5 minutes in seconds
      colors={["#ffff"]}
      trailColor="#908e96"
      size={50}
      strokeWidth={4}
      onComplete={onTimerExpire}
    >
      {({ remainingTime }) => (
        <div className="timer-otp">
          <div className="timeotp">{`${Math.floor(remainingTime / 60)}:${(
            remainingTime % 60
          )
            .toString()
            .padStart(2, "0")}`}</div>
        </div>
      )}
    </CountdownCircleTimer>
  );
};

export default Timer;
