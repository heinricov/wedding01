import { motion } from 'framer-motion';
import { Gift as GiftIcon, CreditCard, Package } from 'lucide-react';
import { GiftOption } from './gift/GiftOption';
import { BankDetails } from './gift/BankDetails';
import { PhysicalAddress } from './gift/PhysicalAddress';

export function Gift() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <GiftIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Wedding Gift</h2>
            <p className="text-gray-600">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
              you may choose from the options below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <GiftOption
              title="Digital Gift"
              description="Send your blessings through bank transfer"
              icon={<CreditCard className="w-8 h-8 mx-auto text-primary" />}
              details={<BankDetails />}
            />

            <GiftOption
              title="Physical Gift"
              description="Send your gift to our address"
              icon={<Package className="w-8 h-8 mx-auto text-primary" />}
              details={<PhysicalAddress />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}