'use client'

import { motion } from 'framer-motion'

const CustomDresses: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with a personal consultation to understand your vision, preferences, and requirements for your special day.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers create custom sketches and mood boards, bringing your dream dress to life through detailed design concepts.'
    },
    {
      number: '03',
      title: 'Measurements',
      description: 'Precise measurements are taken to ensure the perfect fit, tailored specifically to your body shape and proportions.'
    },
    {
      number: '04',
      title: 'Production',
      description: 'Master artisans handcraft your dress using the finest materials and techniques, paying attention to every detail.'
    },
    {
      number: '05',
      title: 'Final Fitting',
      description: 'We conduct a final fitting to make any necessary adjustments, ensuring your dress fits like a dream.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Custom Dresses</h2>
            <p className="section-subtitle">
              Experience the ultimate luxury of a dress made exclusively for you. Our couture process ensures every detail reflects your unique style and personality.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--amur-champagne)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--amur-black)] font-serif text-lg font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-[var(--amur-black)] mb-2">{step.title}</h3>
                    <p className="text-[var(--amur-gray)] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
            >
              Start Your Couture Journey
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60"
                alt="Custom dress design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[var(--amur-champagne)] rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[var(--amur-gray)] rounded-full opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CustomDresses