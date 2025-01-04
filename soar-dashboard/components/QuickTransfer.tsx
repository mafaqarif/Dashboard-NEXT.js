"use client";

import Slider from "react-slick";
import ContactCard from "./ContactCard";
import styles from "../styles/quickTransfer.module.css";

import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import { FaPaperPlane } from "react-icons/fa";

const QuickTransfer: React.FC = () => {
  // const settings = {
  //   dots: true, // Show navigation dots
  //   infinite: true, // Infinite loop
  //   speed: 500, // Animation speed in ms
  //   slidesToShow: 3, // Number of slides visible at a time
  //   slidesToScroll: 1, // Number of slides to scroll per click
  //   responsive: [
  //     {
  //       breakpoint: 1024, // Breakpoint for tablets and desktops
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600, // Breakpoint for mobile
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    // focusOnSelect: false, // Optional: selects the slide when clicked
  };
  const contacts = [
    {
      name: "John Doe",
      title: "CEO",
      imageUrl: "/transfer-1.png",
      selected: true,
    },
    {
      name: "Jane Smith",
      title: "Director",
      imageUrl: "/transfer-2.png",
      selected: false,
    },
    {
      name: "John Doe",
      title: "Designer",
      imageUrl: "/transfer-3.png",
      selected: false,
    },
    {
      name: "John Doe",
      title: "CEO",
      imageUrl: "/transfer-3.png",
      selected: false,
    },
    // Add more contact details here
  ];

  return (
    <div className="quick-transfer white-rounded row3-height">
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </Slider>
      </div>

      <div className={styles.send}>
        <p>Write Amount</p>
        <div>
          <input type="text" placeholder="Amount" />
          <button>
            Send <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
