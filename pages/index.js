import Head from "next/head";
import Navbar from "@/Components/Navbar/Navbar";
import HeroSection from "@/Components/Hero/HeroSection";
import { GlobalStyle } from "@/styles/GlobalStyle";
import styles from "../styles/Home.module.css";
import ServiceSection from "@/Components/Service/Service";
import OurWorks from "@/Components/OurWorks/OurWorks";
import Footer from "@/Components/Footer/Footer";
import ImageBox from "@/Components/ImageBox/ImageBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>BLULAB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} id="my-scrollbar">
        <GlobalStyle />
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <OurWorks />
        <ImageBox />
        <Footer />
      </main>
    </>
  );
}
