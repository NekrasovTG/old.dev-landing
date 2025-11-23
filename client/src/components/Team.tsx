import { Skull, Code, Palette, Music } from "lucide-react";

const team = [
  {
    name: "ALEX",
    role: "Code Wizard",
    icon: <Code className="w-12 h-12" />,
    bio: "Drinks coffee, writes bugs, fixes bugs."
  },
  {
    name: "SAM",
    role: "Pixel Artist",
    icon: <Palette className="w-12 h-12" />,
    bio: "Sees the world in 16-bit color."
  },
  {
    name: "JIN",
    role: "Sound Design",
    icon: <Music className="w-12 h-12" />,
    bio: "Making beep-boop noises since 1999."
  },
  {
    name: "MAX",
    role: "Chaos Manager",
    icon: <Skull className="w-12 h-12" />,
    bio: "Herding cats and smashing deadlines."
  }
];

export default function Team() {
  return (
    <section id="about" className="py-24 bg-white text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-background mb-4">THE MISFITS</h2>
          <p className="font-mono text-lg bg-black text-white inline-block px-4 py-1 transform -rotate-2">
            WARNING: EXTREMELY TALENTED
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="bg-gray-100 aspect-square border-4 border-black flex items-center justify-center mb-4 transition-transform group-hover:rotate-3">
                <div className="text-black group-hover:text-primary transition-colors transform scale-100 group-hover:scale-125 duration-300">
                  {member.icon}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl text-black font-black">{member.name}</h3>
                <div className="font-pixel text-xs text-primary mb-2">{member.role}</div>
                <p className="font-mono text-sm text-gray-600 leading-tight">
                  "{member.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
