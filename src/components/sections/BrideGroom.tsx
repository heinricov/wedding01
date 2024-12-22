import { motion } from 'framer-motion';

export function BrideGroom() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif text-center mb-16"
        >
          The Happy Couple
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
              alt="Bride"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-serif mb-2">Sarah Williams</h3>
            <p className="text-gray-600 mb-4">The Bride</p>
            <p className="text-gray-500">Daughter of Mr. & Mrs. Williams</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
              alt="Groom"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-serif mb-2">John Smith</h3>
            <p className="text-gray-600 mb-4">The Groom</p>
            <p className="text-gray-500">Son of Mr. & Mrs. Smith</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}