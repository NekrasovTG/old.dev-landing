import { Flag, MapPin, Target } from "lucide-react";

const milestones = [
  {
    phase: "PHASE 1",
    title: "THE AWAKENING",
    date: "Q1 2025",
    desc: "Studio launch. Coffee consumption hits critical levels. First prototype of 'Cyber Crawl' leaks to the dark web.",
    status: "completed"
  },
  {
    phase: "PHASE 2",
    title: "ALPHA CHAOS",
    date: "Q2 2025",
    desc: "Closed beta testing. We find bugs that shouldn't exist in this dimension. Community Discord opens.",
    status: "current"
  },
  {
    phase: "PHASE 3",
    title: "GLOBAL DOMINATION",
    date: "Q4 2025",
    desc: "Official release on all major platforms. We buy a toaster for the office. World peace achieved (maybe).",
    status: "upcoming"
  },
  {
    phase: "PHASE 4",
    title: "THE SINGULARITY",
    date: "2026+",
    desc: "New IP announcement. VR integration? Brain implants? Who knows. The future is wild.",
    status: "upcoming"
  }
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-background border-t-2 border-white/10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white mb-4">THE PLAN</h2>
          <p className="font-mono text-accent">
            // OUR PATH TO GLORY (OR DOOM)
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-background border-4 border-primary rounded-none transform -translate-x-1/2 md:translate-x-[-50%] z-10 flex items-center justify-center">
                  <div className={`w-3 h-3 ${item.status === 'completed' ? 'bg-primary' : item.status === 'current' ? 'bg-accent animate-pulse' : 'bg-transparent'}`}></div>
                </div>

                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className={`bg-card border-2 ${item.status === 'current' ? 'border-accent' : 'border-white/10'} p-6 hover:translate-x-2 transition-transform`}>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`font-pixel text-xs px-2 py-1 ${item.status === 'current' ? 'bg-accent text-black' : 'bg-white/10 text-white'}`}>
                        {item.phase}
                      </span>
                      <span className="font-mono text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${item.status === 'current' ? 'text-accent' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
