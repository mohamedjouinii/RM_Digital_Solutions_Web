"use client";

import { NextArrow, PrevArrow } from "@/components/common/SliderArrows";
import Slider from "react-slick";

const sliderData = [
  {
    id: 1,
    title: "Your Business Needs a Digital Revolution.",
    description:
      "It’s time to move beyond outdated strategies. At RM Digital Solutions, we create innovative strategies, craft unique brands, and deliver quality print solutions. Let’s help your business connect and achieve results.\nYour business deserves to stand out.",
    bgImageClass: "bg_image--7",
  },
  {
    id: 2,
    title: "Accelerate Your Business Growth.",
    description:
      "Growing a business is tough, but you don’t have to do it alone. Our tailored strategies are designed to help you find new opportunities, reach more customers, and build the success you’ve always envisioned.",
    bgImageClass: "bg_image--12",
  },
  {
    id: 3,
    title: "Shape the Future of Your Business.",
    description:
      "The future is digital, and your business should be, too. Let’s work together to streamline your operations, create meaningful customer experiences, and ensure you’re ready for whatever comes next.",
    bgImageClass: "bg_image--8",
  },
];

export default function Hero() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    // --- AUTOMATION SETTINGS ---
    autoplay: true,
    autoplaySpeed: 15000, // how long each slide will be displayed (ms)
    speed: 800,        // transition duration (ms)
    pauseOnHover: false // set to true if you want the slider to pause on hover
  };

  return (
    <Slider
      {...options}
      className="rainbow-testimonial-area slider-style-4 slider-activation slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {sliderData.map((slider) => (
        <div
          key={slider.id}
          className={`single-rainbow-slider height-950 slider-bg-image bg-overlay ${slider.bgImageClass} d-flex align-items-center`}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7">
                <div className="inner text-left">
                  {/* Title */}
                  <h1
                    className="title"
                    style={{
                      fontSize: "8rem", // Adjust this value to change the size
                      fontWeight: "bold",
                      lineHeight: "1.2",
                    }}
                  >
                    {slider.title}
                  </h1>

                  {/* Description */}
                  <p className="description">{slider.description}</p>

                  <div className="button-group mt--30">
                    <a
                      className="btn-default"
                     
                      href="#service"
                     
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
