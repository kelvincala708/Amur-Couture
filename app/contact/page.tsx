'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react'

const ContactPage: React.FC = () => {
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto"
          >
            We&apos;d love to hear from you. Whether you have questions about our collections,
            want to book an appointment, or are interested in our custom services, our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-amur-black mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black focus:border-transparent"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black focus:border-transparent"
                  required
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black focus:border-transparent resize-none"
                  required
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-amur-black mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amur-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amur-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">Address</h3>
                    <p className="text-amur-gray leading-relaxed">
                      Amur Couture Showroom<br />
                      Rruga e Kavajes, Garden Building<br />
                      Tirana, Albania
                    </p>
                    <a
                      href="https://maps.app.goo.gl/9sBKzBm2kkFYpD2KA?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amur-black underline text-sm mt-1 inline-block hover:text-amur-gray transition-colors"
                    >
                      View on Map →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amur-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amur-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">Phone</h3>
                    <a
                      href="tel:+355699769882"
                      className="text-amur-gray hover:text-amur-black transition-colors"
                    >
                      +355 69 976 9882
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amur-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amur-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">Email</h3>
                    <a
                      href="mailto:amurcouture@gmail.com"
                      className="text-amur-gray hover:text-amur-black transition-colors"
                    >
                      amurcouture@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amur-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-amur-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">Instagram</h3>
                    <a
                      href="https://www.instagram.com/amur.couture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amur-gray hover:text-amur-black transition-colors"
                    >
                      @amur.couture
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amur-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amur-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-amur-gray">
                      <p><strong>Monday – Saturday:</strong> 10:00 – 19:00</p>
                      <p><strong>Sunday:</strong> Closed</p>
                      <p className="text-sm mt-2 text-amur-gray/80">
                        Appointments recommended for the best experience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Book Appointment */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full mt-8"
                >
                  Book Appointment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-serif text-amur-black mb-4">Find Us</h2>
            <p className="text-amur-gray">Conveniently located in the heart of Tirana</p>
          </motion.div>
          
          <div className="aspect-video bg-amur-gray/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-amur-gray mx-auto mb-4" />
              <p className="text-amur-gray">Rruga e Kavajes, Garden Building, Tirana, Albania</p>
              <a
                href="https://maps.app.goo.gl/9sBKzBm2kkFYpD2KA?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 btn-primary text-sm px-6 py-2"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
