import React from "react";
import OtpVerification from "./otpverification/OtpVerification";
import SubmitEmail from "./submitemail/SubmitEmail";
import ChooseLocation from "./chooselocation/ChooseLocation";
import Offers from "./offer/Offer";
import SuccessScreen from "./successpopup/SuccessScreen";
import OtherPayment from "./otherpayment/OtherPayment";
import ConfirmBooking from "./confirmbooking/ConfirmBooking";
const ViewModals = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      <SuccessScreen />
      <OtherPayment />
      <Offers />
      <ChooseLocation />
      <SubmitEmail />
      <ConfirmBooking />
      <OtpVerification />
    </div>
  );
};

export default ViewModals;
