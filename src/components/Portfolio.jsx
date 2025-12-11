import React from "react";
import { motion } from "framer-motion";
import elo from "../assets/elo.jpg";
import jojo from "../assets/IMG_1234.JPG";
import bb from "../assets/bb.webp";
import anc from "../assets/ANC.webp";
const COLORS = {
  coral: "#f08e80",
  darkBg: "#0a0a0a",
};

const projects = [
  {
    id: 1,
    title: "Peak Elo in CS2",
    description: "Cs2 Тоглоомон дээр 4000 буюу Азийн 230т орж байсан. Одоогоор 5000-6000 цаг тоглсон.",
    image: elo,
    tag: "Top 230 Asia"
  },
  {
    id: 2,
    title: "Basketball Enjoyer",
    description: "14 настайгаасаа хойш сагсанбөмбөг тоглсон. Улсаас хүрэл медал 2 удаа авж байсан.",
    image: bb,
    tag: "2x Bronze"
  },
  {
    id: 3,
    title: "Peak rank in Dota2",
    description: "Dota2 Тоглоомон дээр Ancient rank-нд хүрж байсан ба 3000 цаг тоглсон байгаа.",
    image: anc,
    tag: "Ancient Rank"
  },
];

export default function PortfolioSite() {
  return (
    // 1. Dark Theme Base
    <div className="min-h-screen font-sans text-gray-300 bg-[#0a0a0a] selection:bg-[#f08e80] selection:text-black">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <About />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(240,142,128,0.4)]"
            style={{ background: COLORS.coral }}
          >
            J
          </div>
          <div className="text-xl font-serif text-white tracking-wide">Jojo</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#projects" className="hover:text-[#f08e80] transition-colors">Hobby</a>
          <a href="#about" className="hover:text-[#f08e80] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#f08e80] transition-colors">Contact</a>
          <a
            href="#"
            className="ml-2 px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all text-white text-xs"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#f08e80] tracking-widest text-xs uppercase font-bold">Portfolio</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-white mt-4">
          Enkhtuvshin <span className="text-[#f08e80]">Dorjbat.</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Монгол Коосэн Технологийн коллежийн оюутан. <br/>
          <span className="text-white/80">Dota2, Cs2 enjoyer.</span>
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-bold text-black hover:opacity-90 transition-opacity"
            style={{ background: COLORS.coral }}
          >
            My Hobbies
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
          >
            Холбоос
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
          <img
            src={jojo}
            alt="Hero image"
            className="w-full h-96 object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-serif font-bold text-white mb-8">Миний талаар</h2>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        
        {/* Text Content */}
        <div className="md:col-span-2 text-gray-400 leading-loose">
          <p className="mb-4">
            2006 оны 1 сарын 17нд төрсөн, Монгол Коосэн Технологийн коллежийн оюутан,
            чөлөөт цагаараа сагсан бөмбөг компютэр тоглоом тоглох дуртай 19настай залуу байна.
          </p>
          <p>
            Computer science-аар сурч <span className="text-[#f08e80]">React, Tailwind CSS, Vite</span> зэрэг
            технологиудыг ашиглан сурч байна. Цаашид илүү мэргэшиж, туршлага хуримтлуулж
            өөрийгөө хөгжүүлэн, бусдад туслахыг зорьж байна.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['React', 'Tailwind', 'Vite', 'Java', 'Python'].map(tag => (
              <span key={tag} className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Glass Card Sidebar */}
        <aside className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
          <h3 className="text-white font-semibold mb-4 border-b border-white/10 pb-2">Quick Info</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <strong className="block text-[#f08e80] text-xs uppercase mb-1">Location</strong>
              Ulaanbaatar, Mongolia
            </li>
            <li>
              <strong className="block text-[#f08e80] text-xs uppercase mb-1">Education</strong>
              College student (Kosen)
            </li>
            <li>
              <strong className="block text-[#f08e80] text-xs uppercase mb-1">Age</strong>
              19 Years old
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-serif font-bold text-white mb-8">Hobbies</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#f08e80]/50 hover:shadow-[0_0_20px_rgba(240,142,128,0.15)] transition-all duration-300 group"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter saturate-50 group-hover:saturate-100" 
              />
              <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-[#f08e80] border border-white/10">
                {p.tag || "Hobby"}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-white group-hover:text-[#f08e80] transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-serif font-bold text-white mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Side Links */}
        <div className="space-y-4">
          <p className="text-gray-400 mb-6">
            Available for chatting, gaming, collaborations, or anything fun.
          </p>
          <div className="grid gap-4">
             <SocialLink href="https://www.instagram.com/_jojozo/" icon="📸" label="Instagram" />
             <SocialLink href="https://www.facebook.com/enkhtuvshin.dorjbat" icon="📘" label="Facebook" />
             <SocialLink href="https://discord.gg/YtJwrxBY" icon="💬" label="Discord Server" />
             <SocialLink href="mailto:jojodorjbat@gmail.com" icon="📧" label="Gmail" />
          </div>
        </div>

        {/* Right Side Glass Card */}
        <aside className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col justify-center">
          <h3 className="font-semibold text-white text-xl">Let’s connect</h3>
          <p className="mt-2 text-sm text-gray-400">Feel free to reach out!</p>

          <div className="mt-6 space-y-4 text-sm text-gray-300">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Instagram</span>
              <span className="text-white">@_jojozo</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Discord</span>
              <span className="text-white">_jojozo</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Email</span>
              <span className="text-white">jojodorjbat@gmail.com</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#f08e80]/40 transition-all text-gray-300 hover:text-white"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12 bg-black/30">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <div>© {new Date().getFullYear()} Jojo.</div>
        <div className="italic mt-2 md:mt-0 opacity-60">"Roses are red, Violets are blue, Your aim is shaky, But I still believe in you."</div>
      </div>
    </footer>
  );
}