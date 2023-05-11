import Navbar from "@/Components/Navbar/Navbar";
import { GlobalStyle } from "@/styles/GlobalStyle";
import React from "react";
import styles from "../../styles/Home.module.css";
import Footer from "@/Components/Footer/Footer";
import { HireUsContainer, HireUsImages, ImageOne, ImageThree, ImageTwo } from "./HireUsStyles";
import HireUs1 from "../../public/Image/HireUs.jpg";
import HireUs2 from "../../public/Image/HireUs2.jpg";
import HireUs3 from "../../public/Image/HireUs3.jpg";
import Link from "next/link";
const index = () => {
  return (
    <main className={styles.main}>
      <GlobalStyle />
      <Navbar />
      <HireUsContainer>
        <h1>Build Your Next <span><Link className="LinkBtn" href="/our-works">Project</Link></span> With Us <span>.</span></h1>
        <p>
          Every Great App Gets Built By A Great Developer. Contact Us Today To
          Build Your Dream App That You Have Always Wanted To Build. Dont Wait
          Any Longer.
        </p>
        <HireUsImages>
          <ImageOne src={HireUs1} />
          <ImageTwo src={HireUs2} />
          <ImageThree src={HireUs3} />
        </HireUsImages>
      </HireUsContainer>
      <Footer />
    </main>
  );
};

export default index;
