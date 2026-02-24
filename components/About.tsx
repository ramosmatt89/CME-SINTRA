'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://i.ibb.co/9ks1Ck5F/IMG-5229.jpg" 
                alt="Igreja CME Sintra" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-brand-dark/40" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-medium rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Essência</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Mais do que um lugar, <br />
              <span className="text-brand-medium">somos uma família.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Na CME SINTRA, acreditamos que a igreja é mais do que um lugar — é uma família.
              </p>
              <p>
                Somos uma comunidade apaixonada por Jesus, dedicada a acolher pessoas, restaurar vidas e levar esperança a todos. Aqui encontrarás um ambiente seguro, moderno e cheio da presença de Deus, onde podes crescer na fé, construir relacionamentos saudáveis e descobrir o teu propósito.
              </p>
              <div className="border-l-4 border-brand-medium pl-6 py-2">
                <p className="font-display font-semibold text-white text-xl italic mb-2">
                  &quot;Independentemente da tua história, este é um lugar para recomeçar.&quot;
                </p>
                <p className="text-brand-medium font-bold text-sm uppercase tracking-wider">
                  — Pr. Estevão Donato
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
