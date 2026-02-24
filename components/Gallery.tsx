'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';

const images = [
  'https://i.ibb.co/kV6F4gnH/IMG-5225.jpg',
  'https://i.ibb.co/0pjhB9CF/IMG-5219.jpg',
  'https://i.ibb.co/4RW6mVJx/IMG-5222.jpg',
  'https://i.ibb.co/P3LjPyY/IMG-5221.jpg',
  'https://i.ibb.co/BHXJkfPV/IMG-5218.jpg',
  'https://i.ibb.co/60JDsvGt/IMG-5220.jpg',
  'https://i.ibb.co/NGfMBjh/IMG-5223.jpg',
  'https://i.ibb.co/4gjxV88p/IMG-5226.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-medium font-bold tracking-widest uppercase text-sm mb-4 block">Momentos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Nossa Galeria</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(src)}
              className="relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group"
            >
              <Image 
                src={src} 
                alt={`Galeria ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-graphite/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Selected" 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
