import { Flame, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 rounded-full p-2">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider">
                  FLEX<span className="text-red-500">FIRE</span>
                </span>
                <span className="text-xs text-gray-400 font-medium -mt-1">
                  GYM & FITNESS
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ignite your potential and transform your body with our elite training programs and world-class fitness facility.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors duration-200"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-red-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Programs', 'Trainers', 'Membership', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-red-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-red-400">Our Programs</h3>
            <ul className="space-y-2 text-gray-400">
              {['Personal Training', 'Group Classes', 'Strength Training', 'Cardio Workouts', 'Nutrition Coaching', 'Recovery Services'].map((service) => (
                <li key={service}>
                  <a href="#programs" className="hover:text-red-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-red-400">Visit Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">FlexFire Gym</p>
                  <p>Kurla West, Mumbai</p>
                  <p>Maharashtra 400070</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="tel:+919226539203" className="hover:text-red-400 transition-colors duration-200">
                  +91 92265 39203
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@flexfiregym.com" className="hover:text-red-400 transition-colors duration-200">
                  info@flexfiregym.com
                </a>
              </div>
              <div className="mt-4 text-sm">
                <p className="text-red-400 font-medium">Operating Hours:</p>
                <p>Mon - Sun: 24/7 Access</p>
                <p className="text-xs text-gray-500">Staffed Hours: 6:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} FlexFire Gym. All rights reserved. | Ignite Your Potential
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
                Membership Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
