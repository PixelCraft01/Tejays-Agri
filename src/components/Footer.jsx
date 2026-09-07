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

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#72B943]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-56 w-56 rounded-full bg-[#075B3A]/30 blur-[90px]" />


      {/* Footer Container */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-8">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div
          className="
            grid grid-cols-1
            gap-10
            py-4
            text-left
            lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr]
            lg:gap-12
          "
        >

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div
            data-aos="fade-up"
            className="flex flex-col items-start"
          >

            <Link
              to="/"
              className="group inline-flex items-center"
            >
              <img
                src={logo}
                alt="Tejays Agri"
                className="
                  h-11 w-auto
                  transition-all duration-300
                  group-hover:scale-[1.03]
                  group-hover:brightness-110
                "
              />
            </Link>


            <div className="mt-5 flex items-center gap-3">

              <span className="h-px w-7 bg-[#72B943]" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#72B943]
                "
              >
                GROWING FOR THE FUTURE
              </span>

            </div>


            <p
              className="
                mt-4
                max-w-[360px]
                text-[9px]
                leading-5
                tracking-[0.08em]
                text-white/40
              "
            >
              Technology, dairy, nutrition and sustainability
              connected through one integrated ecosystem.
            </p>

          </div>


          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="80"
          >

            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#72B943]
              "
            >
              COMPANY
            </p>

            <div className="mt-3 h-px w-6 bg-white/10" />

            <ul className="mt-4 space-y-3">

              {companyLinks.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      text-white/50
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >

                    <span
                      className="
                        h-px
                        w-0
                        bg-[#72B943]
                        transition-all
                        duration-300
                        group-hover/link:w-3
                      "
                    />

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =====================================================
              EXPLORE
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="140"
          >

            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#72B943]
              "
            >
              EXPLORE
            </p>

            <div className="mt-3 h-px w-6 bg-white/10" />

            <ul className="mt-4 space-y-3">

              {exploreLinks.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      text-white/50
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >

                    <span
                      className="
                        h-px
                        w-0
                        bg-[#72B943]
                        transition-all
                        duration-300
                        group-hover/link:w-3
                      "
                    />

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =====================================================
              CONNECT
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-start"
          >

            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#72B943]
              "
            >
              CONNECT
            </p>

            <div className="mt-3 h-px w-6 bg-white/10" />


            <Link
              to="/contact"
              className="
                group/connect
                mt-4
                inline-flex
                items-center
                gap-3
                text-[10px]
                font-semibold
                text-white/65
                transition-all
                duration-300
                hover:text-white
              "
            >

              Start a Conversation

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-[8px]
                  text-[#72B943]
                  transition-all
                  duration-300
                  group-hover/connect:translate-x-1
                  group-hover/connect:border-[#72B943]
                  group-hover/connect:bg-[#72B943]
                  group-hover/connect:text-[#06120D]
                "
              >
                <FaArrowRight />
              </span>

            </Link>


            {/* Social Icons */}

            <div className="mt-5 flex gap-2">

              {socialLinks.map((social) => (

                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-[9px]
                    text-white/40
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#72B943]
                    hover:bg-[#72B943]
                    hover:text-[#06120D]
                    hover:shadow-[0_8px_25px_rgba(114,185,58,0.18)]
                  "
                >
                  {social.icon}
                </a>

              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* Copyright */}

          <p
            className="
              text-[9px]
              font-bold
              tracking-[0.03em]
              text-white/65
              transition-colors
              duration-300
              hover:text-white
            "
          >
            © {new Date().getFullYear()} Tejays Agri. All rights reserved.
          </p>


          {/* Legal */}

          <div className="flex items-center gap-5">

            <Link
              to="/privacy"
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white/60
                transition-all
                duration-300
                hover:text-[#72B943]
              "
            >
              Privacy
            </Link>

            <span className="h-3 w-px bg-white/15" />

            <Link
              to="/terms"
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white/60
                transition-all
                duration-300
                hover:text-[#72B943]
              "
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}