import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <div className="rainbow-testimonial-area rainbow-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title-2 text-start"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h2 className="title w-600 mb--20">My Clients Review.</h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {testimonials.map((elm, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={elm.salDelay}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-one style-two border-gradient">
                <div className="inner">
                  <div className="thumbnail">
                    <Image
                      alt="Corporate Template"
                      src={elm.imgSrc}
                      width={645}
                      height={645}
                    />
                  </div>
                  <div className="content">
                    <p className="description">{elm.description}</p>
                    <h2 className="title">{elm.title}</h2>
                    <h6 className="subtitle theme-gradient">{elm.subtitle}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
