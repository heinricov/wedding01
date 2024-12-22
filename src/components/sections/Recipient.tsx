import { motion } from 'framer-motion';
import { getRecipientName } from '@/lib/getUrlParams';

export function Recipient() {
  const recipientName = getRecipientName();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white text-center mb-8"
    >
      <p className="text-lg md:text-xl font-serif">Dear,</p>
      <h2 className="text-2xl md:text-3xl font-serif mt-2">{recipientName}</h2>
    </motion.div>
  );
}