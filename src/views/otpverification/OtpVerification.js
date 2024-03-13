import React, { useState, useRef } from "react";
import "./OtpVerification.css";
import playstore from "../../assets/Playstorelogo.svg";
import apple from "../../assets/Applelogo.svg";
import otpimage from "../../assets/otpimage.png";
import Timer from "../../components/Timer";
import { PiWarningCircleBold } from "react-icons/pi";

const OtpVerification = () => {
  const [open, setOpen] = useState(false);
  const [otpInputs, setOtpInputs] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [expiryTimestamp, setExpiryTimestamp] = useState(
    new Date().getTime() + 5 * 60 * 1000
  );
  const inputRefs = useRef([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOtpInputs(["", "", "", ""]);
  };
  // const handleChange = (index, value) => {
  //   const newOtpInputs = [...otpInputs];
  //   newOtpInputs[index] = value;
  //   setOtpInputs(newOtpInputs);
  // };

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Limit input to single digit
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);
    // Move focus to next input if available
    if (value && index < otpInputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const otp = otpInputs.join("");
    if (otp.length !== 4 || !/^\d+$/.test(otp)) {
      setOtpError(
        <div className="otp-error">
          <PiWarningCircleBold className="otp-error-icon" />
          Please enter a valid 4-digit OTP
        </div>
      );
    } else {
      setOtpError("");
      handleClose();
    }
  };
  const handleTimerExpire = () => {
    console.log("Timer expired!");
    // Perform any actions you need when the timer expires
  };
  return (
    <div className="otp-main">
      <button className="otp-button" onClick={handleClickOpen}>
        submitotp
      </button>
      {open && (
        <div className="otp-dialog">
          <div className="otp-dialog-main">
            <div className="otp-top">
              <div className="otp-cnt-img">
                <div className="otp-top-div">
                  <div className="otp-top-title">
                    <span className="otp-top-ttl">For better experience</span>
                    <span className="otp-top-ttl">download app now!</span>
                  </div>
                  <p className="otp-para-main">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla.
                  </p>
                  <div className="otp-dnld-main">
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
                <img src={otpimage} alt="otp" className="otp-img" />
              </div>
              <div className="otp-sub-page">
                <div className="timer-txt-timer">
                  <div className="timer-content">
                    <span className="otp-title">OTP Verification</span>
                    <span className="otp-subtitle">
                      Enter 4 digit code sent to your registered otp and phone
                      number.
                    </span>
                  </div>
                  <div>
                    <Timer
                      expiryTimestamp={expiryTimestamp}
                      onTimerExpire={handleTimerExpire}
                    />
                  </div>
                </div>

                <div className="otp-input-error">
                  <div className="otp-inputs">
                    {otpInputs.map((value, index) => (
                      <input
                        key={index}
                        className="submit-otp"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        type="number"
                      />
                    ))}
                  </div>
                  {otpError && otpError}
                  {/* <div className="otp-error-main">
                    <span className="otp-error">Wrong otp</span>
                  </div> */}
                </div>
                <div className="otp-btns">
                  <span className="otp-resend">Resend code</span>
                  <button className="otp-done" onClick={handleVerify}>
                    VERIFY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtpVerification;
