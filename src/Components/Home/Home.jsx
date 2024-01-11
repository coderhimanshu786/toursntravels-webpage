import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/160767 (Original).mp4";
import { IoLocation } from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages...
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination :</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Destiantion here..." />
              <IoLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Date :</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price :</label>
              <h3 className="total">INR 50,000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5,00,000" min="5000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <GrInstagram className="icon" />
            <LiaLinkedin className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <FaListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
