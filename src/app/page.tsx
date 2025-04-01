import Banner1 from "@/components/banner1";
// import Header from "@/components/header";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/herosection";
import Partners from "@/components/partners";
import QualityPolicy from "@/components/qualitypolicy";

export default function Home() {
  return (
    <div id="wrapper" className="bg-slate-100">
      
      <Hero />
      <Banner1 />
      <QualityPolicy />
      <Gallery />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
