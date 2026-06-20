import { Github, Linkedin, Twitter } from 'lucide-react'
import logoImg from '../assets/logoimg.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='font-fira border-t border-brand-400 mt-10'>
      <div className='mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>

        {/* Brand */}
        <Link to='/' className='flex items-center gap-2 text-white hover:text-brand-700 transition-colors duration-200'>
          <img src={logoImg} className='w-6' alt='logo' />
          <span className='font-bold text-sm'>DaniD</span>
        </Link>

        {/* Copy */}
        <p className='text-brand-500 text-xs text-center'>
          © {new Date().getFullYear()} Dikeh Daniel — Built with React & Tailwind
        </p>

        {/* Social icons */}
        <div className='flex items-center gap-4 text-brand-500'>
          <a href='https://github.com/081dikeh' target='_blank' rel='noopener noreferrer'
            className='hover:text-brand-700 transition-colors duration-200 hover:scale-110 transform'>
            <Github size={18} />
          </a>
          <a href='https://www.linkedin.com/in/daniel-dikeh' target='_blank' rel='noopener noreferrer'
            className='hover:text-brand-700 transition-colors duration-200 hover:scale-110 transform'>
            <Linkedin size={18} />
          </a>
          <a href='https://twitter.com/Danishadow081' target='_blank' rel='noopener noreferrer'
            className='hover:text-brand-700 transition-colors duration-200 hover:scale-110 transform'>
            <Twitter size={18} />
          </a>
        </div>

      </div>
    </footer>
  )
}
