'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Flame, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href) => {
    // Matches top-level and nested routes
    if (!href) return false
    return pathname === href
  }

  const handleWhatsAppConnect = () => {
    window.open('https://wa.me/919226539203', '_blank')
  }

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
    </svg>
  )

  // Update these paths to match your Next.js routes
  const menu = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      children: [
        { name: 'Trainers', href: '/about/trainers' },
        { name: 'Our Services', href: '/about/services' },
        { name: 'Membership Plans', href: '/about/membership' },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const baseItem = 'px-3 py-2 text-[15px] md:text-[16px] lg:text-[17px] font-semibold tracking-wide transition-colors'
  const activeCls = 'text-red-500'
  const inactiveCls = 'text-gray-300 hover:text-red-400'
  const linkCls = (href) => `${baseItem} ${isActive(href) ? activeCls : inactiveCls}`

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-lg shadow-xl' : 'bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-red-600 rounded-full p-2">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-black tracking-wider">
                FLEX<span className="text-red-500">FIRE</span>
              </span>
              <span className="text-xs text-gray-400 font-medium -mt-1">GYM & FITNESS</span>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-6">
              {menu.map((item) => (
                <li key={item.name} className="relative group">
                  <Link href={item.href} className={linkCls(item.href)}>
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 w-60 bg-black/95 border border-white/10 rounded-lg shadow-xl backdrop-blur-lg">
                      <div className="py-2">
                        {item.children.map((sub) => (
                          <Link key={sub.name} href={sub.href} className={linkCls(sub.href) + ' block px-4 py-2.5'}>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={handleWhatsAppConnect}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-red-500/25"
            >
              <WhatsAppIcon />
              <span>Connect Now</span>
            </button>
          </div>

          {/* Mobile toggles */}
          <div className="lg:hidden flex items-center space-x-3">
            <button onClick={handleWhatsAppConnect} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-all">
              <WhatsAppIcon />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/98 backdrop-blur-lg border-t border-red-500/20">
          <div className="px-4 py-6 space-y-3">
            {menu.map((item) => (
              <div key={item.name} className="rounded-lg">
                <Link href={item.href} onClick={() => setIsOpen(false)} className={linkCls(item.href) + ' block'}>
                  {item.name}
                </Link>
                {item.children && (
                  <div className="mt-1 space-y-1 pl-4">
                    {item.children.map((sub) => (
                      <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)} className={linkCls(sub.href) + ' block px-2'}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => { window.open('https://wa.me/919226539203', '_blank'); setIsOpen(false) }}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 mt-2"
            >
              <WhatsAppIcon />
              <span>Connect Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
