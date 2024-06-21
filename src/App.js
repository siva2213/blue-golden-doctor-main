import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import TopAdvertisement from "./components/TopAdvertisement";
import Services from "./views/services/Services";
import Invoice from "./views/invoice/Invoice";
import PaymentScreen from "./views/paymentscreen/PaymentScreen";
import ViewModals from "./views/ViewModals";
import WelcomeModal from "./components/WelcomeModal";
// import NotFound from './views/NotFound.js'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");

    if (!isFirstVisit) {
      localStorage.setItem("isFirstVisit", "true");
      setTimeout(() => {
        setIsModalOpen(true);
      }, 2000);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <WelcomeModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <TopAdvertisement />
        <Header />
        <Routes>
          <Route path="/blue-golden-doctor-main" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/PaymentScreen" element={<PaymentScreen />} />
          <Route path="/ViewModals" element={<ViewModals />} />

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
