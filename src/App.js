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
  const [showFooterProfile, setShowFooterProfile] = useState();
  const [showPaymentFooter, setShowPaymentFooter] = useState();

  // useEffect(() => {
  //   setShowFooterProfile(sessionStorage.getItem("setShowFooterProfile"));
  //   setShowPaymentFooter(sessionStorage.getItem("setShowPaymentFooter"));
  //   console.log(showFooterProfile, showPaymentFooter);
  // },[])
  return (
    <BrowserRouter>
      <div className="App">
        <TopAdvertisement />
        <Header />
        <Routes>
          <Route path="/#/blue-golden-doctor-main" element={<Services />} />
          <Route path="/#/invoice" element={<Invoice />} />
          <Route path="/#/PaymentScreen" element={<PaymentScreen />} />
          <Route path="/PaymentSuccess" element={<SuccessScreen />} />
          <Route path="/OtherPayment" element={<OtherPayment />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/ChooseLocation" element={<ChooseLocation />} />
          <Route path="/ConfirmBooking" element={<ConfirmBooking />} />
          <Route path="/SubmitEmail" element={<SubmitEmail />} />
          <Route path="/OtpVerification" element={<OtpVerification />} />

          <Route path="/" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* {showFooterProfile && <FooterProfile />}
        {showPaymentFooter && <PaymentFooter />} */}
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
