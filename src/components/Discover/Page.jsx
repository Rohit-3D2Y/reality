import React from "react";
import Navbar from "../Navbar";
import AppDownloadBanner from "../Landing/_comps/AppDownloadBanner";
import Footer from "../Landing/_comps/Footer";
import DiscoverHero from "./_comps/DiscoverHero";
import TopAgentsSection from "./_comps/TopAgent";

const Page = () => {
  return (
    <div>
      <DiscoverHero />
      <TopAgentsSection />
      <AppDownloadBanner />
      <Footer />
    </div>
  );
};

export default Page;
