import React, { useState } from "react";
import "./SuccessScreen.css";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import Confetti from "react-confetti";

const SuccessScreen = () => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleShowConfetti = () => {
    setShowConfetti(true);

    // Hide confetti after a certain duration
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Adjust duration as needed
  };

  const handleClickOpen = () => {
    setOpen(true);
    handleShowConfetti();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="success-dialog">
      <button className="open-dialog-button" onClick={handleClickOpen}>
        success
      </button>

      {open && (
        <div className="dialog-overlay">
          <FaCheck className="success-done" />
          <span className="success-title">BOOKING SUCCESS</span>
          <div className="success-popup-one">
            <span className="success-datetime">14 Nov, 10:00 am</span>
            <div className="success-docdetail">
              <span className="success-doctitle">Doctor</span>
              <span className="success-docname">Dr. Brian Stanley</span>
            </div>

            <div className="success-treatment">
              <span className="success-treattype">Dental Braces</span>
              <span className="success-treatloc">Clinic Consultation</span>
            </div>
          </div>
          <div className="success-popup-two">
            <div className="success-paymenttwo-top">
              <span className="success-treattype">Dental Clinic</span>
              <span className="success-treatloc">
                12/2, Mathura Road, Sector 37, Faridabad - Delhi
              </span>
            </div>
            <FaArrowCircleRight className="success-next" />
          </div>
          <IoMdClose onClick={handleClose} className="success-closebtn" />
          {showConfetti && (
            <Confetti
              className="confetti"
            
            //   drawShape={(ctx) => {
            //     const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);
            //     gradient.addColorStop(0, "#CD7F32"); // Darker shade of gold
            //     gradient.addColorStop(0.5, "#FFD700"); // Bright gold
            //     gradient.addColorStop(1, "#CD7F32");
            //     ctx.beginPath();
            //     ctx.lineWidth = 3;
            //     ctx.strokeStyle = gradient;
            //     for (let i = -Math.PI; i <= Math.PI; i += 0.1) {
            //       const x = i * 3; // Adjusted multiplier for smaller size
            //       const y = Math.sin(i) * 3; // Adjusted multiplier for smaller size
            //       ctx.lineTo(x, y);
            //     }
            //     ctx.stroke();
            //     ctx.closePath();
            //   }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SuccessScreen;
