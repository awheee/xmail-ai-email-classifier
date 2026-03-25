import React from "react";
import LandingNavbar from "../components/landing/LandingNavbar";
import HeroSection from "../components/landing/HeroSection";
import PrivacySection from "../components/landing/PrivacySection";
import HowItWorks from "../components/landing/HowItWorks";
import CategoriesPreview from "../components/landing/CategoriesPreview";
import LandingFooter from "../components/landing/LandingFooter";
import "../styles/landing.css";

function LandingPage() {
  return (
    <div>
      <LandingNavbar />
      <HeroSection />
      <PrivacySection />
      <HowItWorks />
      <CategoriesPreview />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;