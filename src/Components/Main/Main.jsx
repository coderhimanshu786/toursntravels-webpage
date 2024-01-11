import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImClipboard } from "react-icons/im";
import img from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Sydney",
    location: "Australia",
    grade: "CULTURAL RELAX",
    cost: "INR 10,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Paris",
    location: "France",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Phuket",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Nigeria",
    location: "Africa",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Zurich",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Brusel",
    location: "Brasile",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Delhi",
    location: "India",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bora Bora",
    location: "Sri Lanka",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Bora Bora",
    location: "Bangladesh",
    grade: "CULTURAL RELAX",
    cost: "INR 20,000",
    description:
      "This trip did not disappoint and is for me the trip of a lifetime. It was wonderful! Your organisation was excellent and the variety of venues and hotels was great.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div data-aos-duration="2000" className="setContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, cost, description }) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={id}
              className="singleDestination"
            >
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade} <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{cost}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <ImClipboard className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Main;

