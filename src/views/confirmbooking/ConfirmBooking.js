import React, { useState } from "react";
import "./ConfirmBooking.css";
import playstore from "../../assets/Playstorelogo.svg";
import apple from "../../assets/Applelogo.svg";
import Confirm from "../../assets/confirmbooking.png";

const ConfirmBooking = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="confirm-main">
      <button className="open-offers-button" onClick={handleClickOpen}>
        confirmbooking
      </button>
      {open && (
        <div className="confirm-dialog">
          <div className="confirm-dialog-main">
            <div className="confirm-top">
              <div className="confirm-cnt-img">
                <div className="confirm-top-div">
                  <div className="confirm-top-title">
                    <span className="confirm-top-ttl">
                      We are at 50 cities{" "}
                    </span>
                    <span className="confirm-top-ttl">
                      with over 60 clinics.{" "}
                    </span>
                  </div>
                  <p className="confirm-para-main">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla.
                  </p>
                  <div className="confirm-dnld-main">
                    <img
                      src={playstore}
                      className="app-logos"
                      alt="download on playstore"
                    />
                    <img
                      src={apple}
                      className="app-logos"
                      alt="download on applestore"
                    />
                  </div>
                </div>
                <img
                  src={Confirm}
                  alt="choose city"
                  className="confirm-city-img"
                />
              </div>
              <div className="confirm-sub-page">
                <span className="confirm-title">Confirm Booking</span>
                <input
                  placeholder="Phone No. or Email ID"
                  className="confirm-phone-email"
                />
                <div className="confirm-address-main">
                  <div className="confirm-address-doc">
                    <span className="confirm-doc-time">14 Nov, 10:00 am</span>
                    <span className="confirm-doc-name">Dr. Brian Stanley</span>
                    <span className="confirm-treat">Dental Braces</span>
                  </div>
                  <div className="confirm-full-address">
                    <span className="confirm-clinic">Dental Clinic</span>
                    <span className="confirm-address">
                      12/2, Mathura Road, Sector 37, Faridabad - Delhi
                    </span>
                  </div>
                </div>
                <button className="confirm-done" onClick={handleClose}>
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmBooking;
