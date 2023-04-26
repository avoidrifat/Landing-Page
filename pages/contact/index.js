import Navbar from "@/Components/Navbar/Navbar";
import { GlobalStyle } from "@/styles/GlobalStyle";
import React from "react";
import styles from "../../styles/Home.module.css";
import Footer from "@/Components/Footer/Footer";
import { ContactContainer, ContactUs, ContactPhone } from "./ContactStyles";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiLike } from "react-icons/bi";

const index = () => {
  return (
    <main className={styles.main}>
      <GlobalStyle />
      <Navbar />
      <ContactContainer>
        <h1>CONTACT US</h1>
        <p>
          Contact us to turn your mobile app ideas into reality. Our expert team
          of designers and developers will work with you every step of the way
          to create custom mobile apps tailored to your business needs. Lets
          build something great together. Get in touch with us today!
        </p>
        <ContactUs>
          <ContactPhone style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
            <FaPhoneAlt id="icon" size={30} />
            <h4>Phone</h4>
            <t>Whatsapp: 01234-532123</t>
          </ContactPhone>
          <ContactPhone style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
            <IoIosMail id="icon" size={30} />
            <h4>Email</h4>
            <t>blulabdev@gmail.com</t>
            <t>blulabdevbus@gmail.com</t>
          </ContactPhone>
          <ContactPhone style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }} >
            <BiLike id="icon" size={30} />
            <h4>Social</h4><br/>
            <t>Facebook: Blu Lab</t>
            <t>Instagram: Blu Lab</t>
            <t>Pinterest: Blu Lab</t>
            <t>LinkedIn: Blu Lab</t>
          </ContactPhone>
        </ContactUs>
      </ContactContainer>

      <Footer />
    </main>
  );
};

export default index;
