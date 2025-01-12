import React from "react";
import Typed from "react-typed"; // Ensure this import is present
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from "../accordion/AccordionOne";

const Mission = () => {
  return (
    <div className="rn-company-mission-area rn-section-gap">
      <div className="container">
        <div className="row row--30">
          {/* Left Section - Title and Description */}
          <div className="col-lg-6">
            <div className="mission-title">
              <h2 className="title">
                {"Why Choose"}
                <br />
                <Typed
                  className="theme-gradient"
                  strings={[
                    "RM Digital Solutions",
                    "Innovation.",
                    "Success.",
                  ]}
                  typeSpeed={80}
                  backSpeed={5}
                  backDelay={1000}
                  loop
                />
              </h2>
              <p>
                {
                  "At RM Digital Solutions, we specialize in delivering tailored IT solutions that drive measurable results. Our mission is to empower businesses by leveraging innovative technology and strategies designed to optimize operations and maximize growth potential."
                }
              </p>
              <p>
                {
                  "We pride ourselves on our commitment to excellence, our customer-centric approach, and our ability to provide end-to-end support. Whether you're a startup or an established business, our solutions are designed to help you succeed in a rapidly evolving digital landscape."
                }
              </p>
              <div className="read-more-btn mt--50">
                <Link className="btn-default btn-icon" to="/about">
                  {"Learn More"} <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Accordion */}
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <AccordionOne customStyle="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
