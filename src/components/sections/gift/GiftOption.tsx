import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface GiftOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: React.ReactNode;
}

export function GiftOption({ title, description, icon, details }: GiftOptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="text-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold mt-3">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">View Details</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {details}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}