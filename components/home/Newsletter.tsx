'use client'

import { motion } from 'framer-motion'

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-amur-champagne">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amur-black mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-amur-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on our collections, 
            special offers, and exclusive events.
          </p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex-1 min-w-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-3 border border-amur-gray rounded-full focus:outline-none focus:ring-2 focus:ring-amur-black focus:border-transparent"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </motion.button>
          </motion.form>
          
          <p className="text-sm text-amur-gray mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter