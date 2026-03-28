'use client'

import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Amelia Rossi',
      title: 'Creative Director & Founder',
      bio: 'With over 15 years of experience in haute couture, Amelia brings her passion for timeless elegance to every creation. Her vision combines traditional craftsmanship with modern sophistication.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=60'
    },
    {
      name: 'Marco Bianchi',
      title: 'Head Designer',
      bio: 'Marco specializes in bridal and evening wear, with a talent for creating pieces that enhance natural beauty. His attention to detail ensures every dress is a work of art.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60'
    },
    {
      name: 'Sophia Laurent',
      title: 'Master Tailor',
      bio: 'A third-generation seamstress, Sophia oversees all construction and fitting processes. Her expertise in traditional techniques ensures impeccable quality in every stitch.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60'
    }
  ]

  const milestones = [
    { year: '2015', event: 'Amur Couture founded in Tirana' },
    { year: '2017', event: 'First bridal collection launched' },
    { year: '2019', event: 'Expanded to evening wear and custom designs' },
    { year: '2021', event: 'Opened flagship showroom' },
    { year: '2023', event: 'International recognition and awards' },
    { year: '2024', event: 'Sustainable luxury initiative launched' }
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto">
              Since 2015, Amur Couture has been dedicated to creating exceptional fashion experiences. 
              We believe that every woman deserves to feel beautiful, confident, and extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif text-amur-black mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-amur-gray">
                <p>
                  At Amur Couture, we believe that fashion is more than just clothing—it's an expression of identity, 
                  a celebration of individuality, and a way to mark life's most precious moments.
                </p>
                <p>
                  Our philosophy centers on timeless elegance, impeccable craftsmanship, and personalized service. 
                  We create pieces that transcend trends, focusing instead on enduring beauty and perfect fit.
                </p>
                <p>
                  Every dress we create tells a story—your story. Whether it's a wedding gown that makes you feel 
                  like a queen, an evening dress that turns heads, or a custom piece that reflects your unique style, 
                  we're honored to be part of your journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-amur-champagne rounded-lg p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-amur-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-amur-black mb-4">Crafted with Love</h3>
                <p className="text-amur-gray">
                  Every stitch, every detail, every choice of fabric is made with care and passion. 
                  We pour our hearts into creating pieces that will be treasured for years to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Our Journey</h2>
            <p className="text-amur-gray">Milestones that shaped our legacy</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amur-champagne"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center space-x-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-16 h-16 bg-amur-black text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <h3 className="text-lg font-serif text-amur-black mb-2">{milestone.event}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Meet Our Team</h2>
            <p className="text-amur-gray">Passionate artisans dedicated to your perfection</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-serif text-amur-black mb-2">{member.name}</h3>
                <p className="text-amur-gray font-medium mb-4">{member.title}</p>
                <p className="text-amur-gray text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Our Craftsmanship</h2>
            <p className="text-amur-gray">Where tradition meets innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Handcrafted',
                description: 'Every piece is meticulously handcrafted by our skilled artisans',
                icon: '✋'
              },
              {
                title: 'Premium Materials',
                description: 'We source only the finest fabrics from around the world',
                icon: '🧵'
              },
              {
                title: 'Perfect Fit',
                description: 'Multiple fittings ensure your dress fits like a dream',
                icon: '📏'
              },
              {
                title: 'Timeless Design',
                description: 'Classic designs that transcend passing trends',
                icon: '⌚'
              }
            ].map((craft, index) => (
              <motion.div
                key={craft.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {craft.icon}
                </div>
                <h3 className="text-lg font-serif text-amur-black mb-2">{craft.title}</h3>
                <p className="text-amur-gray text-sm">{craft.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif text-amur-black mb-6">Sustainability Commitment</h2>
              <div className="space-y-4 text-amur-gray">
                <p>
                  We believe luxury and responsibility can coexist. That's why we're committed to sustainable practices 
                  throughout our process, from sourcing eco-friendly materials to minimizing waste.
                </p>
                <p>
                  Our goal is to create beautiful pieces that not only make you feel amazing today but also contribute 
                  to a better tomorrow for the fashion industry and our planet.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Eco-friendly fabrics', 'Ethical production', 'Zero waste patterns', 'Local craftsmanship'].map((value, index) => (
                    <span key={index} className="bg-amur-champagne text-amur-black px-3 py-1 rounded-full text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-amur-champagne rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-amur-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-amur-black mb-4">Ethical Excellence</h3>
              <p className="text-amur-gray">
                We partner with suppliers who share our values of fair labor practices and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif text-amur-black mb-6">Join Our Story</h2>
            <p className="text-amur-gray mb-8 max-w-2xl mx-auto">
              We'd be honored to be part of your special moments. Whether you're planning a wedding, 
              attending a special event, or simply want to feel extraordinary, we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Visit Our Showroom
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage