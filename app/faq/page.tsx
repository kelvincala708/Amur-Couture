'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const categories = ['All', 'Bridal', 'Evening', 'Custom', 'Rental', 'General']

  const faqs: FAQItem[] = [
    {
      question: 'How far in advance should I book my dress?',
      answer: 'We recommend booking your dress at least 3-6 months in advance for custom orders, and 1-2 months for ready-to-wear pieces. For weddings, we suggest starting the process 6-9 months before your special day to allow time for fittings and any necessary alterations.',
      category: 'General'
    },
    {
      question: 'Do you offer alterations and fittings?',
      answer: 'Yes, we provide professional alteration services and multiple fittings to ensure your dress fits perfectly. Our master tailor will work with you to achieve the ideal fit, with standard alterations included in most custom orders.',
      category: 'General'
    },
    {
      question: 'What sizes do you offer?',
      answer: 'We offer custom sizing for all our dresses, ensuring a perfect fit regardless of your size. For ready-to-wear pieces, we typically carry sizes XS through XL, with custom sizing available upon request.',
      category: 'General'
    },
    {
      question: 'Can I customize an existing design?',
      answer: 'Absolutely! We love working with clients to customize existing designs. Whether you want to modify the neckline, change the fabric, or add personal details, our designers will help bring your vision to life.',
      category: 'Custom'
    },
    {
      question: 'How long does custom dress creation take?',
      answer: 'Custom dress creation typically takes 8-12 weeks from initial consultation to final delivery. This includes design development, fabric sourcing, multiple fittings, and final construction. Rush orders may be available for an additional fee.',
      category: 'Custom'
    },
    {
      question: 'What fabrics do you work with?',
      answer: 'We work with a wide range of premium fabrics including luxury silks, fine laces, chiffons, satins, and more. We source our materials from renowned suppliers to ensure the highest quality and beautiful drape.',
      category: 'Custom'
    },
    {
      question: 'Do you offer wedding dress consultations?',
      answer: 'Yes, we offer personalized wedding dress consultations where we discuss your vision, show you samples, and help you find or create the perfect dress for your special day. Consultations are by appointment only.',
      category: 'Bridal'
    },
    {
      question: 'Can I bring guests to my appointment?',
      answer: 'Absolutely! We encourage you to bring 1-2 trusted friends or family members to your appointment to help with decision-making. We want you to feel comfortable and supported throughout the process.',
      category: 'Bridal'
    },
    {
      question: 'What is your return policy?',
      answer: 'Custom-made dresses are final sale as they are created specifically for you. Ready-to-wear items may be exchanged for store credit within 7 days of purchase, provided they are unworn and in original condition.',
      category: 'General'
    },
    {
      question: 'How do I care for my dress?',
      answer: 'We provide detailed care instructions for each dress. Most of our pieces require professional dry cleaning. We recommend storing your dress in a cool, dry place away from direct sunlight to preserve the fabric and colors.',
      category: 'General'
    },
    {
      question: 'Do you offer rental services?',
      answer: 'Yes, we offer premium rental services for select evening and special occasion dresses. Rental periods typically range from 3 to 7 days, including cleaning and pressing. Availability varies by season and demand.',
      category: 'Rental'
    },
    {
      question: 'What is included in the rental price?',
      answer: 'Our rental price includes the dress, professional cleaning, and basic alterations if needed. Additional services such as specialized alterations, accessories, or extended rental periods may incur additional fees.',
      category: 'Rental'
    },
    {
      question: 'Can I try on dresses before renting?',
      answer: 'Yes, we offer try-on appointments for rental dresses by appointment. This allows you to ensure the perfect fit and style before your event. We recommend booking your try-on session at least one week before your rental date.',
      category: 'Rental'
    },
    {
      question: 'What happens if the dress gets damaged?',
      answer: 'We require a security deposit for all rentals. In case of minor stains or damage, we will handle cleaning and repairs. For significant damage, the security deposit may be used to cover repair costs. We take great care in maintaining our rental inventory.',
      category: 'Rental'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we offer international shipping for both purchases and rentals. Shipping costs and delivery times vary by destination. For international rentals, we require additional security deposits and may have limited availability for certain styles.',
      category: 'General'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, bank transfers, and cash payments. For custom orders, we require a 50% deposit at the time of order with the balance due upon completion. Rental fees are due at the time of booking.',
      category: 'General'
    }
  ]

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and policies. 
              If you don\'t find what you\'re looking for, our team is always here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 border-b border-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amur-black text-white'
                    : 'bg-amur-ivory text-amur-black hover:bg-amur-champagne'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amur-champagne"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-serif text-amur-black">
                        {faq.question}
                      </h3>
                      <span className="text-amur-gray text-2xl">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </div>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-amur-gray leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-amur-gray text-lg">No questions found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif text-amur-black mb-6">Still Have Questions?</h2>
            <p className="text-amur-gray mb-8 max-w-2xl mx-auto">
              We\'re here to help! Contact our team for personalized assistance with your dress needs. 
              Whether you need styling advice, sizing help, or have questions about our process, we\'re just a message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Additional Support</h2>
            <p className="text-amur-gray">We\'re committed to making your experience seamless and enjoyable</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Styling Consultations',
                description: 'Personalized styling sessions with our expert team to find your perfect look',
                icon: '👗'
              },
              {
                title: 'Virtual Appointments',
                description: 'Convenient online consultations for clients who cannot visit in person',
                icon: '💻'
              },
              {
                title: 'Aftercare Services',
                description: 'Professional cleaning, repairs, and storage solutions for your dresses',
                icon: '✨'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-lg font-serif text-amur-black mb-2">{service.title}</h3>
                <p className="text-amur-gray text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage