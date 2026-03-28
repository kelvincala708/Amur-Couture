'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useTranslation } from '@/i18n/index'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-[var(--amur-black)] text-[var(--amur-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Logo 
                width={160}
                height={35}
                className="mb-4"
                alt="Amur Couture"
              />
              <p className="text-[var(--amur-champagne)] text-sm leading-relaxed">
                {t.footer.brandDescription}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-4"
            >
              <a href="https://www.instagram.com/amur.couture" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/AmurCouture" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://maps.app.goo.gl/9sBKzBm2kkFYpD2KA?g_st=ic" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors" target="_blank" rel="noopener noreferrer">
                <MapPin size={24} />
              </a>
            </motion.div>
          </div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif mb-6">{t.footer.collections.bridalDresses}</h4>
            <ul className="space-y-3">
              <li><a href="/bridal" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.collections.bridalDresses}</a></li>
              <li><a href="/rent" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.collections.rentDress}</a></li>
              <li><a href="/sale" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.collections.sale}</a></li>
              <li><a href="/custom" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.collections.customDresses}</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-serif mb-6">{t.footer.services.aboutUs}</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.services.aboutUs}</a></li>
              <li><a href="/contact" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.services.contact}</a></li>
              <li><a href="/faq" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.services.faq}</a></li>
              <li><a href="#" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.services.bookAppointment}</a></li>
              <li><a href="#" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] transition-colors">{t.footer.services.customConsultation}</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-serif mb-6">{t.footer.contact.address}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[var(--amur-champagne)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--amur-champagne)] text-sm">{t.footer.contact.address}</p>
                  <p className="text-sm">{t.footer.contact.addressLabel}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-[var(--amur-champagne)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--amur-champagne)] text-sm">{t.footer.contact.phone}</p>
                  <p className="text-sm">{t.footer.contact.phoneLabel}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-[var(--amur-champagne)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--amur-champagne)] text-sm">{t.footer.contact.email}</p>
                  <p className="text-sm">{t.footer.contact.emailLabel}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-[var(--amur-champagne)] text-sm mb-2">{t.footer.contact.openingHours}</p>
              <p className="text-sm">{t.footer.contact.openingHoursText}</p>
              <p className="text-sm">{t.footer.contact.sundayClosed}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-[rgba(var(--amur-gray),0.30)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-[var(--amur-champagne)] text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] text-sm transition-colors">{t.footer.privacyPolicy}</a>
            <a href="#" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] text-sm transition-colors">{t.footer.termsOfService}</a>
            <a href="#" className="text-[var(--amur-champagne)] hover:text-[var(--amur-white)] text-sm transition-colors">{t.footer.shippingReturns}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}


export default Footer