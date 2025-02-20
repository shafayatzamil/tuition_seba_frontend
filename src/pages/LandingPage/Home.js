import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeaderSection from "./HeaderSection";
import Founder from "./Founder";
import Payment from "./Payment";
import AvailableTuitions from "./AvailableTuitions";
import HappyClient from "./HappyClient";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderSection />
      <AvailableTuitions />
      <Founder />
      <HappyClient />
      <Payment />
      <Footer />
    </div>
  );
};

export default Home;
