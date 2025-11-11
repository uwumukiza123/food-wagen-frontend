import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="w-[76.875%] mx-auto">
        <Navbar />
      </div>
      <div className="bg-[#FF9A0E]">
        <Hero />
      </div>
    </div>
  );
}
