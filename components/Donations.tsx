'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone } from 'lucide-react';

export default function Donations() {
  return (
    <section id="doacoes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Generosidade</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Contribui com a Missão</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              A tua generosidade ajuda-nos a levar esperança mais longe. Juntos, estamos a construir algo que transforma vidas.
            </p>

            <div className="flex justify-center mb-12">
              <div className="glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-white/10 transition-all min-w-[200px]">
                <div className="w-12 h-12 bg-brand-medium/10 rounded-xl flex items-center justify-center text-brand-medium">
                  <Smartphone size={24} />
                </div>
                <span className="font-bold">MBWay</span>
              </div>
            </div>

            <a 
              href="https://igrejacme.com/igreja/sintra/donate?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8u-FZExViZdflWGdTKZU1_ENqhGg5OoT8zN_oTPA8Ghxzowg8FtcK_1lag0_aem_xWQyZJutmdfrc5dYvAeP-A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-medium hover:bg-brand-medium/80 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-brand-medium/20 active:scale-95"
            >
              Fazer Doação
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
