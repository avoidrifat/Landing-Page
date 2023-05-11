import Navbar from "@/Components/Navbar/Navbar";
import { GlobalStyle } from "@/styles/GlobalStyle";
import React from "react";
import styles from "../../styles/Home.module.css";
import Footer from "@/Components/Footer/Footer";
import { OurWorksContainer } from "./our-worksStyles";
import UserReview from "@/Components/OurWorks/User";
import ServiceSection from "@/Components/Service/Service";
import ServicePage from "@/Components/Service/ServicePage";
import ProjectsPage from "./ProjectsAccordion";
import { HeaderHr, ServiceHeader } from "@/Components/Service/ServiceStyles";

const index = () => {
  return (
    <main className={styles.main}>
      <GlobalStyle />
      <Navbar />
      <OurWorksContainer>
      <UserReview />
      <UserReview />
      <UserReview />
      </OurWorksContainer>
      <ServiceHeader>
      <h1 style={{marginTop:"72px"}}>Our Works</h1>
      </ServiceHeader>

      <HeaderHr />
      <ProjectsPage />
      <Footer />
    </main>
  );
};

export default index;
