import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function DateTimeLocation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif text-center mb-16"
        >
          Wedding Details
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Date</h3>
            <p className="text-gray-600">August 15, 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Time</h3>
            <p className="text-gray-600">2:00 PM - 10:00 PM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Grand Ballroom</p>
            <p className="text-gray-600">123 Wedding Avenue</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}