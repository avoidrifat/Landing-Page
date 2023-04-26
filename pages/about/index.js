import Navbar from "@/Components/Navbar/Navbar";
import { GlobalStyle } from "@/styles/GlobalStyle";
import React from "react";
import styles from "../../styles/Home.module.css";
import Footer from "@/Components/Footer/Footer";
import {
  AboutLeft,
  AboutRight,
  AboutWrapper,
  BackDiv,
  ImageUp,
} from "./Aboutstyles";
import Rectangle50up from "../../public/Image/Rectangle 50 up.jpg";

const index = () => {
  return (
    <main className={styles.main}>
      <GlobalStyle />
      <Navbar />
      <AboutWrapper>
        <AboutLeft>
          <h3>
            Helping Businesses Succeed Through The Power of <br /> Enhanced
            Development.
          </h3>
          <p>
            Build Your Dream Project Today With Our Expert Developers.
            <br /> We Are Here to Make Your Vision Come to Reality. We Are Ready
            To Build Your Project. Contact Us Today !
          </p>
          <button>Contact</button>
        </AboutLeft>
        <AboutRight>
          <ImageUp src={Rectangle50up} />
        </AboutRight>
      </AboutWrapper>
      <Footer />
    </main>
  );
};

export default index;
