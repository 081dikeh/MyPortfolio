import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logoimg.png';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const links: string[] = ['home', 'projects', 'aboutme', 'contact'];

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <nav className="py-4 font-fira px-4 md:px-16 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 right-0 z-50 bg-[#282C33] border-b border-brand-400">
      <div className='text-white flex justify-between items-center'>

        <Link to="/" className="flex items-center gap-1 font-bold text-base hover:text-brand-700 transition-colors duration-200">
          <img src={logoImg} className='w-[24px]' alt="logo" />
          <h1>DaniD</h1>
        </Link>

        {/* Desktop links */}
        <div className="links text-base hidden md:flex items-center gap-6">
          <ul className="flex gap-6 lowercase">
            {links.map((link) => (
              <li key={link} className="hover:text-brand-700 transition-colors duration-300 font-fira">
                <span className='text-brand-700 font-bold'>#</span>
                <Link to={`/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
          {/* ✅ FIX 5: CV always visible in the nav */}
          <a
            href="/Daniel-Dikeh-CV.pdf"
            download
            className="text-sm px-4 py-1.5 ring-1 ring-brand-700 text-white hover:bg-brand-700 transition-colors duration-300 whitespace-nowrap"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-brand-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed bg-[#282C33] w-full h-full left-0 top-0 z-40 p-8 md:hidden lg:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="links text-base text-white mt-16">
          <ul className="flex flex-col gap-8 lowercase">
            {links.map((link) => (
              <li key={link} className="hover:text-brand-700 transition-colors duration-300 font-fira text-3xl">
                <span className='text-brand-700 font-bold'>#</span>
                <Link to={`/${link}`} onClick={closeMenu}>{link}</Link>
              </li>
            ))}
            {/* CV link in mobile menu too */}
            <li>
              <a
                href="/Daniel-Dikeh-CV.pdf"
                download
                onClick={closeMenu}
                className="text-2xl text-brand-700 hover:text-white transition-colors duration-300"
              >
                #download-cv
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Nav;
