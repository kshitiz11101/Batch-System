import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Footer from "@/components/footer";
import Faqs from "@/components/faqs";

export default function Home() {
  return (
    <main className="relative flex flex-col lg:p-6 items-center justify-between max-w-full / space-y-24">
    <Navbar/>
    <Main/>
    <Features/>
    <Benefits/>
    <Faqs/>
    <Footer/>

    </main>
  );
}
