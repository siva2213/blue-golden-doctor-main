import React, { useState } from "react";
import "./OtherPayment.css";
import { IoMdClose } from "react-icons/io";
import otherpayment from "../../assets/otherpayment.png";

const OtherPayment = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="otherpay-main">
      <button className="open-dialog-button" onClick={handleClickOpen}>
        otherpay
      </button>
      {open && (
        <div className="otherpay-dialog">
          <img src={otherpayment} alt="otherpayment" className="otherpay-img"/>
          <IoMdClose className="otherpay-close" onClick={handleClose} />
        </div>
      )}
    </div>
  );
};

export default OtherPayment;
