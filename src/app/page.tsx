import Banner1 from "@/components/banner1";
// import Header from "@/components/header";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/herosection";
import Partners from "@/components/partners";
import QualityPolicy from "@/components/qualitypolicy";

export default function Home() {
  return (
    <div id="wrapper" className="bg-slate-100">
      {/* <Header /> */}
      <Hero />
      <Banner1 />
      <QualityPolicy />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}
