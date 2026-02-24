'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Info, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: <Sparkles size={24} />, text: 'Ambiente acolhedor' },
  { icon: <Info size={24} />, text: 'Louvor inspirador' },
  { icon: <ChevronRight size={24} />, text: 'Mensagem prática e relevante' },
  { icon: <ShieldCheck size={24} />, text: 'Espaço seguro para crianças' },
];

export default function FirstVisit() {
  return (
    <section id="visita" className="py-24 bg-brand-medium/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-medium/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-[3rem] border-brand-medium/20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Bem-vindo</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">A tua primeira visita</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Queremos que te sintas em casa desde o primeiro momento. Ao chegares, a nossa equipa estará pronta para te receber, ajudar no que precisares e apresentar-te a igreja.
              </p>
              <p className="text-brand-medium font-semibold text-lg mb-10">
                Não precisas de te inscrever. Basta aparecer.
              </p>
              <Link 
                href="#contactos" 
                className="bg-brand-medium hover:bg-brand-medium/80 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all inline-flex items-center gap-2 shadow-xl shadow-brand-medium/20"
              >
                Planear a minha visita <ChevronRight size={20} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/5 flex flex-col gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className="text-brand-medium">
                    {f.icon}
                  </div>
                  <p className="font-display font-bold text-lg leading-tight">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
