'use client'

import { motion } from 'framer-motion'

const CustomPage: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed consultation to understand your vision, preferences, and the story you want your dress to tell.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60'
    },
    {
      number: '02',
      title: 'Design Development',
      description: 'Our designers create custom sketches and mood boards, bringing your dream dress to life through detailed design concepts.',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60'
    },
    {
      number: '03',
      title: 'Precise Measurements',
      description: 'We take exact measurements to ensure the perfect fit, tailored specifically to your body shape and proportions.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60'
    },
    {
      number: '04',
      title: 'Master Craftsmanship',
      description: 'Our master artisans handcraft your dress using the finest materials and techniques, paying attention to every detail.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60'
    },
    {
      number: '05',
      title: 'Final Fitting',
      description: 'We conduct a final fitting to make any necessary adjustments, ensuring your dress fits like a dream.',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60'
    }
  ]

  const materials = [
    'Luxury Silks',
    'Fine Lace',
    'Premium Tulle',
    'Chantilly Lace',
    'Satin',
    'Organza',
    'Velvet',
    'Brocade'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-amur-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif text-amur-black mb-6"
          >
            Custom Couture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto"
          >
            Experience the ultimate luxury of a dress made exclusively for you. 
            Our couture process ensures every detail reflects your unique style and personality.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`lg:order-${index % 2 === 0 ? '2' : '1'} space-y-6`}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center">
                    <span className="text-amur-black font-serif text-xl font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amur-black">{step.title}</h3>
                  </div>
                </div>
                <p className="text-amur-gray text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-amur-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-amur-black mb-4">Premium Materials</h2>
            <p className="text-amur-gray text-lg">
              We work with only the finest materials to ensure your dress is as luxurious as it is beautiful.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="text-amur-black font-medium">{material}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-amur-black mb-6">
              Ready to Begin Your Couture Journey?
            </h2>
            <p className="text-amur-gray text-lg mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and let us create the dress of your dreams. 
              Our team is dedicated to making your vision a reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CustomPage