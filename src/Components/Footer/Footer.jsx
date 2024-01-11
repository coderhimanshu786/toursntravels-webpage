import React, {useEffect} from "react";
import "../Footer/footer.css";
import video2 from "../../Assets/beach_-_42894 (Original).mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  //create a react hook to add a scroll animation...
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Adress" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div data-aos="fade-up" className="footerIntro flex">
            <div data-aos="fade-right" className="logoDiv">
              <a href="logo" className="logo flex">
                <MdTravelExplore className="icon" /> Tours & Travels...
              </a>
            </div>

            <div data-aos="fade-up-left" className="footerParagraph">
              Between vacations, many daydream about what adventures the next
              trip holds. You can spend your days switching back and forth from
              looking at your favorite travel photos to trying to go about your
              day to day life. But a few friendly reminders that the next
              adventure is closer than you think can help you put your
              wanderlust to rest.
            </div>

            <div data-aos="fade-up" className="footerSocial flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
              <AiOutlineYoutube className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Our services */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Our services TWO */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWord
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Our services Three */}
            <div data-aos="fade-up" data-aos-duration="6000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ANYCOMPANY 2023</small>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
