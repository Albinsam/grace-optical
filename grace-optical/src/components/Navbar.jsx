import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"}`}>

      <div className="container-custom px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-heading">
          Grace Optical
        </h1>

        <ul className="flex gap-8">

          <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-brandRed font-semibold" : "hover:text-brandRed"
            }
          >
            Home
          </NavLink>
          </li>
          
          <li>
            <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? "text-brandRed font-semibold" : "hover:text-brandRed"
            }
          >
            Collection
          </NavLink>
          </li>

          <li>
            <NavLink
            to="/full-lens-guide"
            className={({ isActive }) =>
              isActive ? "text-brandRed font-semibold" : "hover:text-brandRed"
            }
          >
            Lens Guide
          </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/full-clinical"
              className={({ isActive }) =>
                isActive ? "text-brandRed font-semibold" : "hover:text-brandRed"
              }
            >
              Clinical
            </NavLink>
          </li>
              <li>
                <NavLink
                  to="/full-about"
                  className={({ isActive }) =>
                    isActive ? "text-brandRed font-semibold" : "hover:text-brandRed"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/full-contact"
                  className={({ isActive }) =>
                    isActive ? "text-brandRed font-semibold" : "hover:text-brandRed"
                  }
                >
                  Contact
                </NavLink>
                </li>

        </ul>

      </div>
    </nav>
  )
}