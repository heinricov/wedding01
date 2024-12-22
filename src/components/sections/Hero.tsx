import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3')] bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto px-4 h-screen flex items-center justify-center text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Sarah & John</h1>
          <p className="text-xl md:text-2xl">Are getting married</p>
          <p className="text-lg md:text-xl mt-4">August 15, 2024</p>
        </motion.div>
      </div>
    </section>
  );
}