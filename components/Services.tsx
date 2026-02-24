'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const cultos = [
  { dia: 'Domingo', hora: '10h', icon: <Clock className="text-brand-medium" /> },
  { dia: 'Sexta-feira', hora: '20h', icon: <Clock className="text-brand-medium" /> },
];

export default function Services() {
  return (
    <section id="cultos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Horários e Localização</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Nossos Cultos</h2>
            <p className="text-white/60 text-lg">Vem como estás. Há um lugar preparado para ti.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultos.map((culto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 bg-brand-medium/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {culto.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{culto.dia}</h3>
              <p className="text-3xl font-display font-black text-brand-medium">{culto.hora}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-[2rem] md:col-span-2 lg:col-span-1 flex flex-col items-center text-center bg-brand-medium/5 border-brand-medium/20"
          >
            <div className="w-16 h-16 bg-brand-medium/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="text-brand-medium" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Onde Estamos</h3>
            <address className="not-italic text-white/70 leading-relaxed">
              Av Irene Lisboa 19 <br />
              Armazém A, 2º piso <br />
              Sintra, Lisboa
            </address>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
