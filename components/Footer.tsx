'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-medium rounded-full flex items-center justify-center font-display font-bold text-2xl">
              C
            </div>
            <div>
              <h3 className="font-display font-bold text-xl tracking-tighter">CME SINTRA</h3>
              <p className="text-white/40 text-sm">Catedral da Esperança Sintra</p>
            </div>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="text-white/40 hover:text-brand-medium transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-white/40 hover:text-brand-medium transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-white/40 hover:text-brand-medium transition-colors">
              <Youtube size={24} />
            </Link>
          </div>

          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} CME SINTRA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
