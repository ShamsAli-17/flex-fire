import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Services from "@/components/home/services";
import Trainers from "@/components/home/trainer";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Trainers/>
    <Pricing/>
    <Footer/>
    </>
  
  );
}
