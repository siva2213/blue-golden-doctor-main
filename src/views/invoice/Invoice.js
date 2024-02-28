import React, { useState } from "react";
import "./Invoice.css";
import invoiceprofile from "../../assets/invoiceprofile.png";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import qrcode from "../../assets/qrcode.svg";
import { MdOutlineStarBorder } from "react-icons/md";
import AboutDoctor from "../aboutdoctor/AboutDoctor";
import Reviews from "../reviews/Reviews";
import PaymentFooter from "../paymentfooter/PaymentFooter";

const Invoice = () => {
  const [consultationFee, setConsultationFee] = useState("Rs.1000");
  const [serviceFee, setServiceFee] = useState("Rs.100");
  const [technologyFee, setTechnologyFee] = useState("Rs.100");
  const [testFee, setTestFee] = useState("-");
  const [surgeryFee, setSurgeryFee] = useState("-");
  const [medicineFee, setMedicineFee] = useState("-");
  const [couponApplied, setCouponApplied] = useState("Rs.-100");
  const [selectedCoupon, setSelectedCoupon] = useState({});

  const handleCouponApply = () => {
    if (!couponApplied) {
      setConsultationFee(consultationFee - 100);
      setCouponApplied(true);
    }
  };
  const totalAmount =
    consultationFee +
    serviceFee +
    technologyFee +
    testFee +
    surgeryFee +
    medicineFee;

  const handleCouponSelect = (couponCode) => {
    setSelectedCoupon((prevSelected) => {
      if (prevSelected[couponCode]) {
        const updatedSelected = { ...prevSelected };
        delete updatedSelected[couponCode];
        return updatedSelected;
      } else {
        const updatedSelected = { [couponCode]: true };
        return updatedSelected;
      }
    });
  };

  return (
    <>
      <div className="invoice-main">
        <div className="invoice-container">
          <h4 className="invoice-title">Billing Details</h4>
          <div className="invoice-details">
            <div className="invoice-item">
              <span className="invoice-fee">Consultation Fee:</span>
              <input
                type="text"
                value={consultationFee}
                onChange={(e) => setConsultationFee(Number(e.target.value))}
                placeholder="Rs."
                className="invoice-amount"
              />
            </div>
            <div className="invoice-item">
              <span className="invoice-fee">Service Fee:</span>
              <input
                type="text"
                value={serviceFee}
                className="invoice-amount"
                onChange={(e) => setServiceFee(Number(e.target.value))}
              />
            </div>
            <div className="invoice-item">
              <span className="invoice-fee">Technology Fee:</span>
              <input
                type="text"
                value={technologyFee}
                className="invoice-amount"
                onChange={(e) => setTechnologyFee(Number(e.target.value))}
              />
            </div>
            <div className="invoice-item">
              <span className="invoice-fee">Test Fee:</span>
              <input
                type="text"
                value={testFee}
                className="invoice-amount"
                onChange={(e) => setTestFee(Number(e.target.value))}
              />
            </div>
            <div className="invoice-item">
              <span className="invoice-fee">Surgery Fee:</span>
              <input
                type="text"
                value={surgeryFee}
                className="invoice-amount"
                onChange={(e) => setSurgeryFee(Number(e.target.value))}
              />
            </div>
            <div className="invoice-item">
              <span className="invoice-fee">Medicine Fee:</span>
              <input
                type="text"
                value={medicineFee}
                className="invoice-amount"
                onChange={(e) => setMedicineFee(Number(e.target.value))}
              />
            </div>
            <div className="invoice-item">
              <span className="invoice-fee">
                Coupon <span className="couponcode">(CONSULT100)</span>
              </span>
              <input
                type="text"
                value={couponApplied}
                className="invoice-coupon"
                onChange={(e) => setCouponApplied(Number(e.target.value))}
              />
            </div>
            <div className="total-amount">
              <span className="invoice-total-title">Total Amount:</span>
              <span className="invoice-total-amount">Rs.1100</span>
            </div>
          </div>
        </div>
        <div className="invoice-doctor">
          <div className="doctor-pic-detail">
            <img
              src={invoiceprofile}
              alt="Doctor Profile"
              className="doctore-profileimage"
            />
            <div className="invoice-doctor-details">
              <span className="invoice-doctor-name">Dr. Johnathan Gray</span>
              <span className="invoice-doctor-edu">BDS, MDS</span>
              <span className="invoice-doctor-spec">Dental Specialist </span>
            </div>
          </div>
          <div className="doctor-rating-count">
            <MdOutlineStarBorder className="doctor-reviewstar" />
            <span className="doctor-reviewcount">4.5</span>
          </div>
        </div>
        <div className="clinic-details">
          <div className="clinic-time">
            <span className="cdate-time">14 Nov, 10:00 am</span>
            <span className="cdate-treatment">Dental Braces</span>
          </div>
          <hr style={{ border: "1px solid grey" }} />
          <div className="clinic-visit">
            <div className="clinic-address">
              <span className="clinic-name">Dental Clinic</span>
              <span className="clinic-fulladd">
                12/2, Mathura Road, Sector 37, Faridabad - Delhi
              </span>
            </div>
            <div className="clinic-socials">
              <FaWhatsapp className="clinic-whatsapp" />
              <MdOutlinePhone className="clinic-phone" />
              <FaArrowCircleRight className="clinic-page" />
            </div>
          </div>
        </div>
        <div className="coupons-main">
          <h2 className="coupons-hd">Coupons</h2>
          <div className="coupons-list">
            <div className="coupon-row">
              <div className="coupon-cnt">
                <img src={qrcode} className="coupon-code" />
                <h3 className="coupon-codetext">CONSULT100</h3>
              </div>
              <div className="validity-text">
                <span className="coupon-title">
                  Get Rs.100 OFF on technology fee
                </span>
                <span className="coupon-btn-cntr">
                  <button
                    className={`coupon-btn ${
                      selectedCoupon && selectedCoupon["CONSULT100"]
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCouponSelect("CONSULT100")}
                  >
                    {selectedCoupon && selectedCoupon["CONSULT100"]
                      ? "Selected"
                      : "Select"}
                  </button>
                </span>
              </div>
            </div>
            <div className="coupon-row">
              <div className="coupon-cnt">
                <img src={qrcode} className="coupon-code" alt="qr code" />
                <h3 className="coupon-codetext">CONSULT100</h3>
              </div>
              <div className="validity-text">
                <span className="coupon-title">
                  Get Rs.100 OFF on technology fee
                </span>
                <span className="coupon-btn-cntr">
                  <button
                    className={`coupon-btn ${
                      selectedCoupon && selectedCoupon["CONSULT150"]
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCouponSelect("CONSULT150")}
                  >
                    {selectedCoupon && selectedCoupon["CONSULT150"]
                      ? "Selected"
                      : "Select"}
                  </button>
                </span>
              </div>
            </div>
            <div className="coupon-row">
              <div className="coupon-cnt">
                <img src={qrcode} className="coupon-code" alt="qrcode" />
                <h3 className="coupon-codetext">CONSULT100</h3>
              </div>
              <div className="validity-text">
                <span className="coupon-title">
                  Get Rs.100 OFF on technology fee
                </span>
                <span className="coupon-btn-cntr">
                  <button
                    className={`coupon-btn ${
                      selectedCoupon && selectedCoupon["CONSULT200"]
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCouponSelect("CONSULT200")}
                  >
                    {selectedCoupon && selectedCoupon["CONSULT200"]
                      ? "Selected"
                      : "Select"}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <AboutDoctor />
      </div>
      <Reviews />
      <PaymentFooter />
    </>
  );
};

export default Invoice;
