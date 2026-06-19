import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logoimg.png';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'home', path: '/' },
  { label: 'projects', path: '/projects' },
  { label: 'about-me', path: '/aboutme' },
  { label: 'contact', path: '/contact' },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav className="py-4 font-fira px-4 md:px-16 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 right-0 z-50 bg-[#282C33] border-b border-brand-400">
      <div className="text-white flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 font-bold text-base hover:text-brand-700 transition-colors duration-200">
          <img src={logoImg} className="w-[24px]" alt="logo" />
          <h1>DaniD</h1>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:block">
          <ul className="flex gap-6 lowercase">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`transition-colors duration-200 font-fira text-sm ${
                    isActive(path) ? 'text-brand-700' : 'text-white hover:text-brand-700'
                  }`}
                >
                  <span className="text-brand-700 font-bold">#</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(v => !v)}
          className="md:hidden text-white hover:text-brand-700 transition-colors p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-[57px] bg-[#282C33] z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="flex flex-col gap-6 p-8 mt-4 lowercase">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`text-3xl font-fira transition-colors duration-200 ${
                  isActive(path) ? 'text-brand-700' : 'text-white hover:text-brand-700'
                }`}
              >
                <span className="text-brand-700 font-bold">#</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
