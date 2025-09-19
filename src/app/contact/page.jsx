import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import  HeroWithForm from "@/components/contact-us/hero";
import MapSection from "@/components/contact-us/map";
export default function Home () {
    return(
        <>
        <Navbar/>
        <HeroWithForm />
        <MapSection/>
        <Footer/>
        </>
    )
}