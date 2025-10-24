import logoImg from '../assets/logoimg.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white font-fira flex flex-col gap-6 py-8 mt-36 border-t border-brand-500 px-4 md:px-16 lg:px-16 xl:px-32 2xl:px-44">

      <div className='flex flex-col md:flex-row gap-8 justify-between'>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 font-bold text-base">
            <img src={logoImg} className=' w-[24px]' alt="logo" />
            <h1 className='flex gap-8'>DaniD <span className='font-[400] text-brand-500'><a href="mailto:">dikehdaniel2020@gmail.com</a></span></h1>
          </div>
          <p>front-end developer</p>
        </div>

        <div>
          <p>Media</p>
          <ul className="flex gap-4 text-2xl mt-2">
            <li>
              <a href="http://"><FaGithub/></a>
            </li>
            <li>
              <a href=""><FaLinkedin/></a>
            </li>
            <li>
              <a href=""><FaTwitter/></a>
            </li>
          </ul>
        </div>
      </div>


      <div className="text-sm pt-4 flex justify-center">
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

