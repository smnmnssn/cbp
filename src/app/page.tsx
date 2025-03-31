import Banner1 from "@/components/banner1";
import Header from "@/components/header";
import Hero from "@/components/herosection";
import QualityPolicy from "@/components/qualitypolicy";
export default function Home() {
  return (
    <div id="wrapper" className="bg-slate-100">
      <Header />
      <Hero />
      <Banner1 />
      <QualityPolicy />
    </div>
  );
}
