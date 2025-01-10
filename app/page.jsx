import Copywrite from "@/components/footers/Copywrite";
import Header5 from "@/components/headers/Header5";
import Topbar from "@/components/headers/Topbar";
import Brands from "@/components/homes/index-corporate-one-page/Brands";
import Contact from "@/components/homes/index-corporate-one-page/Contact";
import Hero from "@/components/homes/index-corporate-one-page/Hero";
import Portfolio from "@/components/homes/index-corporate-one-page/Portfolio";
import Service from "@/components/homes/index-corporate-one-page/Service";
import Team from "@/components/homes/index-corporate-one-page/Team";
import React from "react";

export const metadata = {
  title:
    "Home Corporate One Page || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
     
      <Header5 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Hero />
      <Service />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Portfolio />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Brands />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Team />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Contact />
      <Copywrite />
    </>
  );
}



/*import Copywrite from "@/components/footers/Copywrite";

import HeaderPreview from "@/components/headers/HeaderPreview";
import Topbar from "@/components/headers/Topbar";
import Accordion from "@/components/preview/Accordion";
import Cta from "@/components/preview/Cta";
import CustomerFeedback from "@/components/preview/CustomerFeedback";
import Demos from "@/components/preview/Demos";
import Elements from "@/components/preview/Elements";

import Hero from "@/components/preview/Hero";

import InnerPages2 from "@/components/preview/InnerPages2";

import Services from "@/components/preview/Services";

import Services2 from "@/components/preview/Services2";
import SpeedScroreSection from "@/components/preview/SpeedScroreSection";

export const metadata = {
  title:
    "Preview || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function Home() {
  return (
    <>
      <div className="splash-wrapper scrollSpyLinks">
        <Topbar />
        <HeaderPreview />

        <div>
          <div className="rainbow-gradient-circle" />
          <div className="rainbow-gradient-circle theme-pink" />
        </div>
        <div className="sp-banner-bg"></div>
        <Hero />
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        <Services />
        <Demos />

        <Services2 />

        <SpeedScroreSection />

        <InnerPages2 />

        <CustomerFeedback />
        <Accordion />
        <Cta />
        <Copywrite />
        {/* <Footer1 /> }
        <div className="banner-feature-badge d-none d-lg-block">
          <a
            className="badge-inner"
            href="https://themeforest.net/user/rainbow-themes/portfolio"
          >
            <img
              className="invert-on-light"
              src="/assets/images/icons/featured-badge.png"
              alt="Featured"
            />
          </a>
        </div>
      </div>
    </>
  );
}*/
