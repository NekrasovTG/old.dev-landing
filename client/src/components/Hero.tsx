import { Link } from "wouter";
import { ArrowRight, Gamepad2, Ghost, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/retro_vaporwave_grid_hero_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-4 border-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Retro Grid" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none"></div>
      </div>

      <div className="container relative z-20 px-4 text-center">
        <div className="inline-block mb-6 animate-bounce">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 font-pixel text-xs md:text-sm uppercase tracking-widest box-shadow-hard">
            Est. 2025
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent drop-shadow-[4px_4px_0_rgba(255,0,255,0.5)]">
          OLD<br/>.DEV
        </h1>
        
        <p className="text-xl md:text-2xl font-mono text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We make games that <span className="text-primary font-bold line-through decoration-4 decoration-accent">suck</span> kick ass.
          <br />
          <span className="text-accent">No loot boxes. No BS. Just vibes.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#games" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-display text-xl uppercase tracking-wider transition-all hover:-translate-y-1 hover:translate-x-1 box-shadow-hard hover:shadow-[8px_8px_0px_0px_theme(colors.accent)]">
            <Gamepad2 className="w-6 h-6" />
            Play Now
          </a>
          
          <a href="#about" className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-mono text-lg uppercase hover:bg-white hover:text-background transition-colors">
            <Ghost className="w-5 h-5" />
            Who are we?
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block animate-pulse text-accent">
        <Zap className="w-12 h-12" />
      </div>
      <div className="absolute top-20 right-10 hidden md:block text-secondary opacity-50 rotate-12">
        <span className="font-pixel text-6xl">*</span>
      </div>
    </section>
  );
}
