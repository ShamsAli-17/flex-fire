'use client';
import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/ourstory";
import WhyChooseUs from "@/components/about/whychooseus";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home () {
    return(
    <>
    <Navbar/>
    <AboutHero/>
    <OurStory/>
    <WhyChooseUs/>
    <Footer/>
    
    </>
    )
}