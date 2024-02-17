import React from "react";
import "./PaymentScreen.css";
import cash from "../../assets/cash.svg";
import upi from "../../assets/upi.svg";
import bank from "../../assets/Bank.svg";
import wallet from "../../assets/Wallet.svg";
import cardname from "../../assets/cardname.svg";
import cardlogo from "../../assets/cardlogo.svg";

const PaymentSuccess = () => {
  return (
    <div className="payment-screen">
      <div className="payment-card-fulldetail">
        <div className="payment-card">
          <div className="card-logonumber">
            <div className="payment-cardnamelogo">
              <img
                src={cardname}
                className="payment-cardname"
                alt="card name"
              />
              <img
                src={cardlogo}
                className="payment-cardlogo"
                alt="card wifi logo"
              />
            </div>
            <div className="card-number">
              <input className="card-numberone" value="3648" />
              <input className="card-numbertwo" value="6344" />
              <input className="card-numberthree" value="6542" />
              <input className="card-numberfour" value="8885" />
            </div>
          </div>
          <div className="card-owner-details">
            <div className="owner-cardname">
              <span className="owner-nametitle">Name</span>
              <input className="owner-name" value="Evelyn" />
            </div>
            <div className="owner-cardexpire">
              <span className="owner-cardexptitle">Expire</span>
              <input className="card-expiredate" value="03/25" />
            </div>
            <div className="owner-cardcvv">
              <span className="owner-cvvtitle">CVV</span>
              <input className="owner-cvvnum" value="544" />
            </div>
          </div>
        </div>
      </div>
      <div className="payment-screen-one">
        <span className="payments-title">Payment</span>
        <div className="payment-type">
          <div className="payment-img-texts">
            <img className="payment-type-imgone" src={cash} alt="cash" />
            <div className="payment-type-texts">
              <span className="payment-type-ttl1">Cash</span>
              <span className="payment-type-ttl2">Pay with cash</span>
            </div>
          </div>
          <button className="payment-select-btn">Selected</button>
        </div>

        <div className="payment-type">
          <div className="payment-img-texts">
            <img className="payment-type-imgtwo" src={upi} alt="upi" />
            <div className="payment-type-texts">
              <span className="payment-type-ttl1">UPI</span>
              <span className="payment-type-ttl2">Phonepe, Gpay, etc.</span>
            </div>
          </div>

          <button className="payment-select-btn">Selected</button>
        </div>
        <div className="payment-type">
          <div className="payment-img-texts">
            <img
              className="payment-type-imgthree"
              src={bank}
              alt="net banking"
            />
            <div className="payment-type-texts">
              <span className="payment-type-ttl1">Net Banking</span>
              <span className="payment-type-ttl2">All Indian Banks.</span>
            </div>
          </div>

          <button className="payment-select-btn">Selected</button>
        </div>
        <div className="payment-type">
          <div className="payment-img-texts">
            <img className="payment-type-imgfour" src={wallet} alt="wallet" />
            <div className="payment-type-texts">
              <span className="payment-type-ttl1">Wallet</span>
              <span className="payment-type-ttl2">Paytm, Freecharge</span>
            </div>
          </div>

          <button className="payment-select-btn">Selected</button>
        </div>
      </div>
      <div className="payment-addcard-details">
        <div className="payment-screen-two">
          <h3 className="payment-two-title">Add Other Card</h3>
          <input placeholder="Card Number" className="payment-two-cardnum" />
          <div className="payment-two-datecvv">
            <input placeholder="Expire Date" className="payment-two-expdate" />
            <input placeholder="CVV" className="payment-two-cvv" />
          </div>
          <input
            placeholder="Card holder name"
            className="payment-two-cardname"
          />
          <button className="payment-two-addcard">ADD CARD</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
