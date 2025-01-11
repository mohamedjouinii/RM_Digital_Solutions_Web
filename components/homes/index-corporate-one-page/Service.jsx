import { services3 } from "@/data/service";
import React from "react";

export default function Service() {
  return (
    <div
      className="rainbow-service-area rainbow-section-gap scrollSpySection"
      id="service"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Our Services</h2>
              <p className="description b1">
                We’re confident that our services are just what your business
                needs to grow and thrive.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 service-wrapper">
          {services3.map((service, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-6 col-12 ${
                index === 6 ? "mx-auto d-flex justify-content-center" : ""
              }`}
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={service.delay}
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{service.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
