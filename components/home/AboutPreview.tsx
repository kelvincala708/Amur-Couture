'use client'

import { motion } from 'framer-motion'

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-amur-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60"
                alt="Amur Couture showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Amur Couture</h2>
            <p className="section-subtitle">
              Located in the heart of Tirana, Albania, Amur Couture has been creating unforgettable bridal experiences since 2015.
            </p>
            
            <div className="space-y-6 text-amur-gray leading-relaxed">
              <p>
                Our passion for fashion and dedication to craftsmanship has made us one of Albania's most trusted bridal destinations. We believe every woman deserves to feel extraordinary on her special day.
              </p>
              
              <p>
                With our extensive collection of bridal and evening dresses available for both rent and purchase, we offer flexible solutions to suit every bride's needs and budget.
              </p>
              
              <p>
                Our experienced team is dedicated to providing personalized service and expert guidance throughout your dress selection journey.
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
            >
              Visit Our Showroom
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview