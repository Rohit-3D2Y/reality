import React from "react";
import Navbar from "../Navbar";
import AppDownloadBanner from "../Landing/_comps/AppDownloadBanner";
import Footer from "../Landing/_comps/Footer";
import DiscoverHero from "./_comps/DiscoverHero";
import TopAgentsSection from "./_comps/TopAgent";
import FeaturedPropertiesSection from "./_comps/FeaturedProperty";
import PropertyListing from "./_comps/AllProperty";
import CityProperty from "./_comps/CityProperty";

const Discover = () => {
  return (
    <div>
      <DiscoverHero />
      <FeaturedPropertiesSection />
      <PropertyListing />
      <CityProperty />
      <TopAgentsSection />
      <AppDownloadBanner />
      <Footer />
    </div>
  );
};

export default Discover;
