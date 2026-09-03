import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from 'react-icons/fa'
import { assetPath } from '../utils/assetPath'

const logo = assetPath('/logo/Tejays_logo.png')

export default function Footer() {
  const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Technology', path: '/technology' },
    { name: 'Dairy & Foods', path: '/dairy-foods' },
    { name: 'Nutrition', path: '/nutrition' },
  ]

  const exploreLinks = [
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Campus', path: '/campus' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      href: '#',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      href: '#',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      href: '#',
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      href: '#',
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06120D] text-white">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#72B943]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

        {/* Main Footer */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] lg:py-14">

          {/* Brand */}
          <div>

            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Tejays Agri"
                className="h-12 w-auto sm:h-14"
              />
            </Link>

            <p className="mt-5 max-w-[360px] text-[10px] uppercase leading-5 tracking-[0.18em] text-white/40">
              TECHNOLOGY. DAIRY.
              <br />
              NUTRITION. SUSTAINABILITY.
            </p>

          </div>


          {/* Company */}
          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
              COMPANY
            </p>

            <ul className="mt-4 space-y-2.5">

              {companyLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[10px] text-white/50 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>


          {/* Explore */}
          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
              EXPLORE
            </p>

            <ul className="mt-4 space-y-2.5">

              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[10px] text-white/50 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>


          {/* Connect */}
          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
              CONNECT
            </p>

            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-3 text-[10px] font-semibold text-white/65 transition-colors hover:text-white"
            >
              Start a Conversation

              <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />

            </Link>


            {/* Social Icons */}
            <div className="mt-5 flex gap-2">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-[#72B943] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>

        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[8px] text-white/30">
            © {new Date().getFullYear()} Tejays Agri. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              to="/privacy"
              className="text-[8px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white/60"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-[8px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white/60"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}