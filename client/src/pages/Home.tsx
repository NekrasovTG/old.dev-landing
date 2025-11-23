import { useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "../components/Hero";
import GameGrid from "../components/GameGrid";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-display text-white tracking-widest">
            OLD<span className="text-primary">.</span>DEV
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#games" className="text-sm hover:text-primary transition-colors uppercase">Games</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors uppercase">Studio</a>
            <a href="#" className="px-4 py-2 bg-white text-black font-bold text-sm hover:bg-accent transition-colors uppercase">
              Devlog
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-white/10 p-4 flex flex-col gap-4">
            <a href="#games" className="text-xl font-display text-white" onClick={() => setIsMenuOpen(false)}>Games</a>
            <a href="#about" className="text-xl font-display text-white" onClick={() => setIsMenuOpen(false)}>Studio</a>
            <a href="#" className="text-xl font-display text-accent" onClick={() => setIsMenuOpen(false)}>Devlog</a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <GameGrid />
        <Roadmap />
        <Team />
        
      </main>
    </div>
  );
}
