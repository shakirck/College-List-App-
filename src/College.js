import React from "react";
import { v4 as uuidv4 } from "uuid";
import image from "./images/college_02.jpg";
import starImage from "./images/star-16.png";
export default function College({ college, collegeRef }) {
  return (
    <div className="College card" ref={collegeRef}>
      <div className="college-image-wrapper">
        <img src={image} alt="college"></img>
        <div className="overlay"></div>
        <div className="rating-wrapper">
          <div className="rating">
            <div className="rating-number">{college.rating}</div>
            <div className="rating-max"> /5</div>
          </div>
          <div className="rating-text">{college.rating_remarks}</div>
        </div>
        <div className="college-tags-wrapper">
          <div className="college-tags-left">
            {college.tags.map((tag) => {
              return (
                <div className="college-tags-item" key={tag}>
                  {tag}{" "}
                </div>
              );
            })}
          </div>
          <div className="college-tags-right">#{college.ranking} </div>
        </div>
      </div>
      <div className="college-details-wrapper">
        <div className="college-details-left">
          <div className="college-details-left-top">
            <div className="college-title">{college.college_name} </div>
            <div className="college-star-rating">
              <img src={starImage} alt="rating star" />
              <img src={starImage} alt="rating star" />
              <img src={starImage} alt="rating star" />
              <img src={starImage} alt="rating star" />
            </div>
          </div>
          <div className="college-nearest-details">
            {college.nearest_place[0]} |
            <span className="down-opacity" style={{ fontSize: ".8rem" }}>
              {" "}
              {college.nearest_place[1]}
            </span>
          </div>
          <div className="college-nearest-famous">
            <div className="match-details bold">94% Match</div>
            <div className="famouse-near-details">
              <span className="bold">2.5Kms </span>form GTBNagar ,
              <span className="bold">7Kms</span> from Rajiv Chowk
            </div>
          </div>
          <div className="offer-wrapper">
            Flat Rs <span className="num-color">2,000</span> off + upto Rs
            <span className="num-color"> 500</span> wallet! to avail...
            <a className="num-color" href="/">
              LOGIN
            </a>
          </div>
        </div>
        <div className="college-details-right">
          <div className="discount">
            <p> ₹ {college.original_fees}</p>
            <div className="discount-tag">
              {" "}
              <div className="dot"></div>
              {college.discount}
            </div>
          </div>
          <div className="fees-wrapper">
            <div className="fees"> ₹ {college.discounted_fees} </div>
            <div className="fees-per-semester">{college.fees_cycle}</div>
          </div>
          <div className="amenities-wrapper">
            {college.amenties.map((item) => {
              return (
                <div className="amentity" key={uuidv4()}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
