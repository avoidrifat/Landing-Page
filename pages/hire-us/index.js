import Navbar from "@/Components/Navbar/Navbar";
import { GlobalStyle } from "@/styles/GlobalStyle";
import React from "react";
import styles from "../../styles/Home.module.css";
import Footer from "@/Components/Footer/Footer";

const index = () => {
  return (
    <main className={styles.main}>
      <GlobalStyle />
      <Navbar />

      <Footer />
    </main>
  );
};

export default index;
