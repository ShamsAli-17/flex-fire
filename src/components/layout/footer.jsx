import { Dumbbell, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold font-poppins">PowerFit</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body and mind with our world-class fitness facility and expert trainers.
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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Services', 'Trainers', 'Classes', 'Membership', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-red-600 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Fitness Assessment', 'Recovery Services', 'Online Training'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-red-600 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Fitness Street</p>
                  <p>Downtown City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p>info@powerfitgym.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PowerFit Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}