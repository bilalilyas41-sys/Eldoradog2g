import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameGrid from "./components/GameGrid";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <Hero />
        <GameGrid />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

