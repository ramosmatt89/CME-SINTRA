'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-medium/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-dark/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-medium/10 text-brand-medium text-sm font-bold tracking-widest uppercase mb-8 border border-brand-medium/20">
              Bem-vindo à nossa casa
            </span>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-8 max-w-3xl">
              Uma igreja para todos. <br className="hidden md:block" /> 
              Um lugar para <span className="text-brand-medium">recomeçar.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              Um ambiente de fé, esperança e amor, onde cada pessoa é recebida como família e encorajada a viver um novo começo com Deus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <Link 
                href="#visita" 
                className="bg-brand-medium hover:bg-brand-medium/80 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-medium/20 min-w-[240px]"
              >
                Visitar a Igreja <ChevronRight size={20} />
              </Link>
              <Link 
                href="https://igrejacme.com/igreja/sintra/donate?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8u-FZExViZdflWGdTKZU1_ENqhGg5OoT8zN_oTPA8Ghxzowg8FtcK_1lag0_aem_xWQyZJutmdfrc5dYvAeP-A" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm min-w-[240px]"
              >
                Fazer Doação <Heart size={20} className="text-brand-medium" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-brand-medium rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
