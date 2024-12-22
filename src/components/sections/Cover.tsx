import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Recipient } from './Recipient';

interface CoverProps {
  onOpen: () => void;
}

export function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Sarah & John</h1>
          <p className="text-xl md:text-2xl mb-8">We're getting married!</p>
          
          <Recipient />
          
          <Button 
            onClick={onOpen}
            className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4"
          >
            <Heart className="mr-2 h-4 w-4" />
            Open Invitation
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}