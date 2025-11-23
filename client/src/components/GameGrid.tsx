import { Play, Star, Trophy } from "lucide-react";
import game1 from "@assets/generated_images/pixel_art_dungeon_crawler_game_screenshot.png";
import game2 from "@assets/generated_images/low_poly_racing_game_screenshot.png";
import game3 from "@assets/generated_images/cozy_pixel_art_space_game_screenshot.png";

const games = [
  {
    id: 1,
    title: "CYBER CRAWL",
    image: game1,
    genre: "Roguelike",
    desc: "Hack the mainframe, slay the bugs.",
    color: "border-primary",
    btnColor: "bg-primary"
  },
  {
    id: 2,
    title: "DRIFT CITY",
    image: game2,
    genre: "Racing",
    desc: "Low poly, high speed, no brakes.",
    color: "border-accent",
    btnColor: "bg-accent"
  },
  {
    id: 3,
    title: "STAR NAP",
    image: game3,
    genre: "Cozy Sim",
    desc: "Explore the galaxy in your pajamas.",
    color: "border-secondary",
    btnColor: "bg-secondary"
  }
];

export default function GameGrid() {
  return (
    <section id="games" className="py-24 bg-background relative">
      <div className="container px-4 mx-auto">
        <div className="flex items-end justify-between mb-16 border-b-2 border-white/10 pb-4">
          <div>
            <h2 className="text-4xl md:text-6xl text-white mb-2">LATEST DROPS</h2>
            <p className="font-mono text-accent">// FRESH FROM THE COMPILER</p>
          </div>
          <div className="hidden md:block font-pixel text-xs text-muted-foreground">
            INSERT COIN TO START
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div 
              key={game.id} 
              className={`group relative bg-card border-2 ${game.color} transition-all hover:-translate-y-2`}
            >
              <div className="relative aspect-video overflow-hidden border-b-2 border-white/10">
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 z-20 bg-black text-white font-pixel text-[10px] px-2 py-1 border border-white">
                  {game.genre}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-white mb-2 group-hover:text-shadow-neon transition-all">
                  {game.title}
                </h3>
                <p className="font-mono text-sm text-gray-400 mb-6">
                  {game.desc}
                </p>
                
                <button className={`w-full py-3 ${game.btnColor} text-black font-bold font-mono uppercase flex items-center justify-center gap-2 group-hover:box-shadow-hard transition-all`}>
                  <Play className="w-4 h-4 fill-current" />
                  Play Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
