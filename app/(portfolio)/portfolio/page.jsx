import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import React from "react";

export const metadata = {
  title:
    "Portfolio || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Portfolio1 />
      <Footer3 />
    </>
  );
}
