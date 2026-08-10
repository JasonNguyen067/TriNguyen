import Hero from "@/components/sections/Hero";
import Moments from "@/components/sections/Moments";
import Experience from "@/components/sections/Experience";
import Competitions from "@/components/sections/Competitions";

export default function Home() {
  return (
    <>
      <Hero />
      <Moments />
      <div className="grid border-t border-border lg:grid-cols-2">
        <Experience />
        <div className="border-t border-border lg:border-l lg:border-t-0">
          <Competitions />
        </div>
      </div>
    </>
  );
}
