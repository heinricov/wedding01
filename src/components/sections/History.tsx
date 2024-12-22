import { motion } from 'framer-motion';

export function History() {
  const timeline = [
    {
      date: "June 2020",
      title: "First Meet",
      description: "We first met at a coffee shop in downtown. A chance encounter that changed our lives forever."
    },
    {
      date: "December 2020",
      title: "First Date",
      description: "Our first official date was a magical evening at the city's finest restaurant."
    },
    {
      date: "September 2021",
      title: "Moving In Together",
      description: "We decided to take the next step in our relationship and create our first home together."
    },
    {
      date: "December 2023",
      title: "The Proposal",
      description: "Under the stars on a beautiful winter evening, we got engaged and started planning our future."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif text-center mb-16"
        >
          Our Love Story
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-2">{event.date}</h3>
                  <h4 className="text-lg font-medium mb-2">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full relative">
                  <div className="absolute w-px h-full bg-primary/20 left-1/2 transform -translate-x-1/2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}