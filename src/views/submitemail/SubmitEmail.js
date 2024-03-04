import React, { useState } from "react";
import "./SubmitEmail.css";
import submitemail from "../../assets/submitemail.png";
import playstore from "../../assets/Playstorelogo.svg";
import apple from "../../assets/Applelogo.svg";
import email from "../../assets/emailverify.svg";
const SubmitEmail = () => {
  const [open, setOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };
  const handleSubmit = () => {
    const isValidEmail = validateEmail(emailInput);
    if (!isValidEmail) {
      setEmailError("Wrong email ID");
      return;
    }

    console.log("Email submitted:", emailInput);
    handleClose();
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  return (
    <div className="email-main">
      <button className="email-button" onClick={handleClickOpen}>
        submitemail
      </button>
      {open && (
        <div className="email-dialog">
          <div className="email-dialog-main">
            <div className="email-top">
              <div className="email-cnt-img">
                <div className="email-top-div">
                  <div className="email-top-title">
                    <span className="email-top-ttl">For better experience</span>
                    <span className="email-top-ttl">download app now!</span>
                  </div>
                  <p className="email-para-main">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla.
                  </p>
                  <div className="email-dnld-main">
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
                <img src={submitemail} alt="email" className="email-img" />
              </div>
              <div className="email-sub-page">
                <span className="email-mndtry">*Not Mandatory</span>
                <span className="email-title">You Are Already a Member</span>
                <span className="email-subtitle">
                  Please provide us with your email id since you have not
                  registered with your email with us.
                </span>
                <div className="email-input-error">
                  <input
                    placeholder="Email ID"
                    className="submit-email"
                    value={emailInput}
                    onChange={handleEmailChange}
                  />
                  {emailError && (
                    <div className="email-error">{emailError}</div>
                  )}
                </div>
                <div className="email-btns">
                  <button className="email-skip" onClick={handleClose}>
                    SKIP
                  </button>
                  <button className="email-done" onClick={handleSubmit}>
                    SUBMIT
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

export default SubmitEmail;
