import React, { useState } from "react";
import "./Offer.css";
import { IoMdClose } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { MdFileDownloadDone } from "react-icons/md";
import offers from "../../assets/offers.png";

const Offer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="offers-main">
      <button className="open-offers-button" onClick={handleClickOpen}>
        offers
      </button>
      {open && (
        <div className="offers-dialog">
          <div className="offers-main-page">
            <div className="offers-sub-page">
              <div className="offers-top">
                <span className="offers-ttl-main">
                  <IoIosStar />
                  <span className="offers-ttl">
                    Up to 50% off on dental treatments{" "}
                  </span>{" "}
                  <IoIosStar />
                </span>
                <IoMdClose className="offers-close" onClick={handleClose} />
              </div>

              <div className="offers-cnt-img">
                <div>
                  <div className="offers-title">
                    <span className="offer-ttl">LIMITED PERIOD </span>
                    <span className="offer-ttl">OFFER</span>
                  </div>
                  <div className="offers-para-main">
                    <span className="offers-para">
                      Get the confidence to shine
                    </span>
                    <span className="offers-para">
                      {" "}
                      with our special dental{" "}
                    </span>
                    <span className="offers-para">treatment offers!</span>
                  </div>
                  <div className="offers-service-main">
                    <div className="offer-para-main">
                      <MdFileDownloadDone className="check-icon" />
                      <span className="offer-service">Dental Crown</span>
                    </div>
                    <div className="offer-para-main">
                      <MdFileDownloadDone className="check-icon" />
                      <span className="offer-service">Caries</span>
                    </div>
                    <div className="offer-para-main">
                      <MdFileDownloadDone className="check-icon" />
                      <span className="offer-service">Decayed Tooth</span>
                    </div>
                    <div className="offer-para-main">
                      <MdFileDownloadDone className="check-icon" />
                      <span className="offer-service">Dental Braces</span>
                    </div>
                    <div className="offer-para-main">
                      <MdFileDownloadDone className="check-icon" />
                      <span className="offer-service">Teeth Whitening</span>
                    </div>
                  </div>
                </div>
                <img src={offers} className="offers-img" alt="offers" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
