'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Contacts() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contactos" className="py-24 bg-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Fala Connosco</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Contactos</h2>
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              Tens alguma questão ou gostarias de falar connosco? Envia-nos uma mensagem. Será um prazer receber-te.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-medium/10 rounded-xl flex items-center justify-center text-brand-medium shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefone</h4>
                  <p className="text-white/60">+351 912 345 678</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-medium/10 rounded-xl flex items-center justify-center text-brand-medium shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-white/60">geral@cmesintra.pt</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-medium/10 rounded-xl flex items-center justify-center text-brand-medium shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Localização</h4>
                  <p className="text-white/60">Av Irene Lisboa 19, Armazém A, 2º piso, Sintra</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-medium transition-colors"
                  placeholder="Teu nome"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Telemóvel</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-medium transition-colors"
                    placeholder="9xx xxx xxx"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-medium transition-colors"
                    placeholder="teu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Mensagem</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-medium transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button 
                disabled={status === 'loading'}
                className="w-full bg-brand-medium hover:bg-brand-medium/80 disabled:opacity-50 text-white py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-medium/20"
              >
                {status === 'loading' ? 'A enviar...' : (
                  <>Enviar Mensagem <Send size={20} /></>
                )}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20"
                >
                  <CheckCircle2 size={20} />
                  <p className="font-medium">Mensagem enviada com sucesso. Entraremos em contacto brevemente.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                >
                  <AlertCircle size={20} />
                  <p className="font-medium">Ocorreu um erro. Tenta novamente.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 h-[450px] rounded-[3rem] overflow-hidden glass border-brand-medium/20 relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.8242444555!2d-9.345678!3d38.765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed29623456789%3A0x123456789abcdef!2sAv.%20Irene%20Lisboa%2019%2C%202710-000%20Sintra!5e0!3m2!1spt-PT!2spt!4v1624567890123!5m2!1spt-PT!2spt" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(150deg) brightness(0.9) contrast(1.2)' }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
