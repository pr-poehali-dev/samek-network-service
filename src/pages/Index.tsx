import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <About />
    </div>
  );
};

export default Index;
