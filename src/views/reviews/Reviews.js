import React, { useState, useEffect, useRef } from "react";
import "../specialists/Specialists.css";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import Pagination from "../../components/Pagination";
import dentisttwo from "../../assets/dentisttwo.svg";
import reviewimg from "../../assets/reviewimg.svg";

const Reviews = () => {
  const [reviewPage, setReviewPage] = useState(1);
  const totalreviewPages = 3;
  const reviewListRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = reviewListRef.current.scrollLeft;
  //     const scrollWidth = reviewListRef.current.scrollWidth;
  //     const clientWidth = reviewListRef.current.clientWidth;
  //     const threshold = scrollWidth - clientWidth - 10;

  //     if (scrollPosition >= threshold) {
  //       document.querySelector(".reviews-cust-three").style.display = "flex";
  //       setReviewPage(3);
  //     } else if (scrollPosition >= threshold / 2) {
  //       document.querySelector(".reviews-cust-two").style.display = "flex";
  //       setReviewPage(2);
  //     } else {
  //       document.querySelector(".reviews-cust-one").style.display = "flex";
  //       setReviewPage(1);
  //     }
  //   };

  //   reviewListRef.current.addEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className="reviews">
      <div className="rev-ttl">
        <p className="rev-ttl1">1800+ Reviews</p>
        <p className="rev-ttl2">
          <Pagination
            currentPage={reviewPage}
            totalPages={totalreviewPages}
            dotActiveColor="#E957C9"
            dotInactiveColor="#fff"
          />
        </p>
      </div>
      <div className="reviews-list">
        <Slider
          dots={false}
          arrows={false}
          infinite={false}
          beforeChange={(current, next) => {
            if (next > current) {
              setReviewPage(reviewPage + 1);
            } else if (next < current) {
              setReviewPage(reviewPage - 1);
            }
          }}
        >
          <div className="reviews-cust-one">
            <div className="rev-customersone">
              <img className="cus-imgone" src={reviewimg} />

              <div className="cust-detail">
                <p className="cust-name">Melvin Dennis</p>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#E957C9"
                  value={5}
                  color="#E957C9"
                />
                <p className="cust-cnt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                  maecenas eget condimentum velit.
                </p>
              </div>
            </div>

            <div className="rev-customerstwo">
              <img className="cus-imgtwo" src={dentisttwo} />
              <div className="cust-detail">
                <p className="cust-name">Veronica Rees</p>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#E957C9"
                  value={5}
                  color="#E957C9"
                />
                <p className="cust-cnt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                  maecenas eget condimentum velit.
                </p>
              </div>
            </div>
          </div>
          <div className="reviews-cust-two">
            <div className="rev-customersone">
              <img
                className="cus-imgone"
                src={reviewimg}
                alt="customer-image"
              />

              <div className="cust-detail">
                <p className="cust-name">Melvin Dennis</p>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#E957C9"
                  value={5}
                  color="#E957C9"
                />
                <p className="cust-cnt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                  maecenas eget condimentum velit.
                </p>
              </div>
            </div>

            <div className="rev-customerstwo">
              <img
                className="cus-imgtwo"
                src={dentisttwo}
                alt="customer-image"
              />
              <div className="cust-detail">
                <p className="cust-name">Veronica Rees</p>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#E957C9"
                  value={5}
                  color="#E957C9"
                />
                <p className="cust-cnt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                  maecenas eget condimentum velit.
                </p>
              </div>
            </div>
          </div>
          <div className="reviews-cust-three">
            <div className="rev-customersone">
              <img
                className="cus-imgone"
                src={reviewimg}
                alt="customer-image"
              />

              <div className="cust-detail">
                <p className="cust-name">Melvin Dennis</p>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#E957C9"
                  value={5}
                  color="#E957C9"
                />
                <p className="cust-cnt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                  maecenas eget condimentum velit.
                </p>
              </div>
            </div>

            <div className="rev-customerstwo">
              <img
                className="cus-imgtwo"
                src={dentisttwo}
                alt="customer-image"
              />
              <div className="cust-detail">
                <p className="cust-name">Veronica Rees</p>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#E957C9"
                  value={5}
                  color="#E957C9"
                />
                <p className="cust-cnt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                  maecenas eget condimentum velit.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
