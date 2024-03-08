import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import Content from "./views/content/Content";
import Booking from "./views/bookingform/Booking";
import TopAdvertisement from "./components/TopAdvertisement";
import Services from "./views/services/Services";
import Specialists from "./views/specialists/Specialists";
import Availability from "./views/availability/Availability";
import Invoice from "./views/invoice/Invoice";
import AboutDoctor from "./views/aboutdoctor/AboutDoctor";
import PaymentScreen from "./views/paymentscreen/PaymentScreen";
import SuccessScreen from "./views/successpopup/SuccessScreen";
import OtherPayment from "./views/otherpayment/OtherPayment";
import FooterProfile from "./views/footerprofile/FooterProfile";
import PaymentFooter from "./views/paymentfooter/PaymentFooter";
import Offer from "./views/offer/Offer";
import ChooseLocation from "./views/chooselocation/ChooseLocation";
import ConfirmBooking from "./views/confirmbooking/ConfirmBooking";
import OtpVerification from "./views/otpverification/OtpVerification";
import SubmitEmail from "./views/submitemail/SubmitEmail";
// import NotFound from './views/NotFound.js'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/blue-golden-doctor-main" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/paymentScreen" element={<PaymentScreen />} />
          <Route path="/paymentSuccess" element={<SuccessScreen />} />
          <Route path="/otherPayment" element={<OtherPayment />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/chooseLocation" element={<ChooseLocation />} />
          <Route path="/confirmBooking" element={<ConfirmBooking />} />
          <Route path="/submitEmail" element={<SubmitEmail />} />
          <Route path="/otpVerification" element={<OtpVerification />} />
          <Route path="/" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
export default App;
