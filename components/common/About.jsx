import React from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  "Custom web development and ERP solutions to optimize business workflows and productivity.",
  "Cutting-edge app development to drive operational efficiency and user engagement.",
  "Strategic and advanced SEO to enhance online visibility and attract the right audience.",
  "Comprehensive branding and design services to establish a strong and cohesive brand identity.",
  "Tailored digital marketing strategies to amplify your brand's reach and impact.",
  "Business consultancy and tools to accelerate growth and achieve market success.",
];

export default function About() {
  return (
    <div id="about" className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div
              className="thumbnail"
              data-sal="slide-right"
              data-sal-duration={700}
            >
              <Image
                className="w-100"
                alt="About Images"
                src="/assets/images/about/about-1.png"
                width={543}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div
              className="content"
              data-sal="slide-left"
              data-sal-duration={700}
            >
              <div className="section-title">
                <h4 className="subtitle">
                  <span className="theme-gradient"> About RM Digital Solutions </span>
                </h4>
                <h2 className="title mt--10">
                  Your Partner for Innovation and Growth.
                </h2>
                <p>
                  At RM Digital Solutions, we are committed to helping businesses thrive in an ever-evolving digital world. 
                  Our expertise spans across web development, ERP solutions, advanced SEO, branding, and design. 
                  We also offer comprehensive digital marketing strategies and startup consultancy, empowering 
                  businesses to achieve their goals and build a sustainable future.
                </p>
                <ul className="list-icon">
                  {items.map((item, index) => (
                    <li key={index}>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="read-more-btn mt--40">
                  <Link 
                      className="btn-default"
                     
                      href="#contact"
                     
                    >
                    More About Us <i className="icon feather-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
