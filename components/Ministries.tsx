'use client';

import React from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { Users, Zap, Home, Palette, Star, Heart } from 'lucide-react';

const ministerios = [
  { 
    nome: 'Teens', 
    desc: 'Crescimento, identidade e amizades na fé.', 
    icon: <Zap size={32} />,
    color: 'from-blue-500/20 to-brand-medium/20'
  },
  { 
    nome: 'Jovens', 
    desc: 'Uma geração apaixonada por Jesus e pela Palavra.', 
    icon: <Users size={32} />,
    color: 'from-purple-500/20 to-brand-medium/20'
  },
  { 
    nome: 'Células', 
    desc: 'Comunhão durante a semana em ambiente familiar.', 
    icon: <Home size={32} />,
    color: 'from-orange-500/20 to-brand-medium/20'
  },
  { 
    nome: 'Teatro', 
    desc: 'Arte com propósito que comunica o evangelho.', 
    icon: <Palette size={32} />,
    color: 'from-pink-500/20 to-brand-medium/20'
  },
  { 
    nome: 'Celebração', 
    desc: 'O coração da casa em adoração e palavra.', 
    icon: <Star size={32} />,
    color: 'from-yellow-500/20 to-brand-medium/20'
  },
  { 
    nome: 'Maravilhas', 
    desc: 'Crianças a aprender sobre Deus com alegria.', 
    icon: <Heart size={32} />,
    color: 'from-red-500/20 to-brand-medium/20'
  },
];

export default function Ministries() {
  const [emblaRef] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  return (
    <section id="ministerios" className="py-24 bg-brand-gray/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Nossas Frentes</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Ministérios</h2>
          </motion.div>
          <p className="text-white/50 max-w-md md:text-right">
            Descobre onde podes servir e crescer. Temos um lugar para cada fase da tua vida.
          </p>
        </div>

        {/* Desktop Grid (lg and up) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {ministerios.map((min, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] h-full flex flex-col green-glow relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${min.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-brand-medium group-hover:scale-110 transition-transform duration-500">
                  {min.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{min.nome}</h3>
                <p className="text-white/60 leading-relaxed">{min.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Carousel (below lg) */}
        <div className="lg:hidden embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {ministerios.map((min, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_40%] min-w-0"
              >
                <div className="glass p-10 rounded-[2.5rem] h-full flex flex-col green-glow relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${min.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-brand-medium group-hover:scale-110 transition-transform duration-500">
                      {min.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">{min.nome}</h3>
                    <p className="text-white/60 leading-relaxed">{min.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Visual cue for carousel */}
          <div className="flex justify-center mt-8 gap-2">
            {ministerios.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
