import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logoimg.png';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const links: string[] = ['home', 'projects', 'about me', 'contact'];

  // Toggle function - switches between true and false
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu function - sets to false
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-4 font-fira mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44 fixed top-0 left-0 right-0 z-50 bg-[#282C33]">
      <div className='text-white flex justify-between items-center'>

        <div className="flex items-center gap-1 font-bold text-base">
          <img src={logoImg} className='w-[24px]' alt="logo" />
          <h1>DaniD</h1>
        </div>


        <div className="links text-base hidden md:block lg:block">
          <ul className="flex gap-6 lowercase">
            {links.map((link) => (
              <li key={link} className="hover:text-brand-700 transition-colors duration-300 font-fira">
                <span className='text-brand-700 font-bold'>#</span>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
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
        className={`fixed bg-[#282C33] w-full h-full left-0 z-40 p-8 md:hidden lg:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        <div className="links text-base text-white mt-8">
          <ul className="flex flex-col gap-8 lowercase">
            {links.map((link) => (
              <li key={link} className="hover:text-brand-700 transition-colors duration-300 font-fira text-3xl">
                <span className='text-brand-700 font-bold'>#</span>
                <Link to={`/${link}`} onClick={closeMenu}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  );
};

export default Nav;