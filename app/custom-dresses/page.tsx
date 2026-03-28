'use client'

import { motion } from 'framer-motion'

const CustomDressesPage: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We begin with a detailed consultation to understand your vision, preferences, and the occasion for your dress.',
      icon: '🎯'
    },
    {
      step: 2,
      title: 'Design & Sketching',
      description: 'Our designers create custom sketches based on your input, incorporating your style preferences and body type.',
      icon: '✏️'
    },
    {
      step: 3,
      title: 'Fabric Selection',
      description: 'Choose from our premium collection of luxurious fabrics, from delicate silks to elegant laces.',
      icon: '🧵'
    },
    {
      step: 4,
      title: 'Fittings & Adjustments',
      description: 'Multiple fittings ensure the perfect fit, with adjustments made at each stage for flawless results.',
      icon: '✂️'
    },
    {
      step: 5,
      title: 'Final Creation',
      description: 'Your dream dress is brought to life with meticulous attention to detail and expert craftsmanship.',
      icon: '✨'
    }
  ]

  const services = [
    {
      title: 'Bridal Gowns',
      description: 'Create your perfect wedding dress with our expert bridal designers.',
      features: ['Custom silhouette', 'Premium fabrics', 'Personalized details', 'Multiple fittings']
    },
    {
      title: 'Evening Gowns',
      description: 'Make a statement at any event with a custom-designed evening gown.',
      features: ['Red carpet ready', 'Luxurious materials', 'Unique designs', 'Perfect fit']
    },
    {
      title: 'Cocktail Dresses',
      description: 'Elegant and sophisticated cocktail dresses tailored to your style.',
      features: ['Timeless designs', 'Quality construction', 'Personalized touches', 'Event perfect']
    },
    {
      title: 'Special Occasion',
      description: 'From galas to parties, we create custom dresses for any special event.',
      features: ['Event specific', 'Custom styling', 'Premium materials', 'Perfect timing']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-amur-black mb-6">
              Custom Dress Design
            </h1>
            <p className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto">
              Experience the ultimate in personalized fashion. Our custom dress design service 
              transforms your vision into reality, creating one-of-a-kind pieces that reflect 
              your unique style and personality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Our Design Process</h2>
            <p className="text-amur-gray">A journey of creativity and craftsmanship</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-serif text-amur-black mb-2">{step.title}</h3>
                <p className="text-amur-gray text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Our Services</h2>
            <p className="text-amur-gray">Tailored to your every need and desire</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-serif text-amur-black mb-4">{service.title}</h3>
                <p className="text-amur-gray mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amur-black rounded-full"></span>
                      <span className="text-sm text-amur-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Fabrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Premium Materials</h2>
            <p className="text-amur-gray">Only the finest fabrics and materials</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-lg font-serif text-amur-black mb-2">Luxury Silks</h3>
              <p className="text-amur-gray text-sm">Imported silks with exquisite drape and sheen</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕸️</span>
              </div>
              <h3 className="text-lg font-serif text-amur-black mb-2">Fine Laces</h3>
              <p className="text-amur-gray text-sm">Delicate laces from renowned European manufacturers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-serif text-amur-black mb-2">Embellishments</h3>
              <p className="text-amur-gray text-sm">Hand-sewn crystals, beads, and intricate details</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Client Experiences</h2>
            <p className="text-amur-gray">What our clients say about their custom creations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The dress was absolutely perfect! It fit like a dream and received countless compliments.",
                author: "Maria T., Wedding Dress"
              },
              {
                quote: "Working with Amur Couture was a dream. They brought my vision to life beyond my expectations.",
                author: "Elena S., Evening Gown"
              },
              {
                quote: "The attention to detail and quality of craftsmanship is unmatched. Truly worth every penny.",
                author: "Sophia L., Cocktail Dress"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg"
              >
                <p className="text-amur-gray mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-amur-black font-medium">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif text-amur-black mb-6">Ready to Create Your Dream Dress?</h2>
            <p className="text-amur-gray mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and let us help you create a dress that's as unique as you are.
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

export default CustomDressesPage