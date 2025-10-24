import logoImg from '../assets/logoimg.png'

export default function Nav() {
  const links: string[] = ['home', 'works', 'about me', 'contact']

  return (
    <nav className="w-full py-4 text-white flex justify-between items-center font-fira mx-4 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64">

      <div className="flex items-center gap-1 font-bold text-base">
        <img src={logoImg} className=' w-[24px]' alt="logo" />
        <h1>DaniD</h1>
      </div>

      <div className="links text-base">
        <ul className="flex gap-6 lowercase">

          {links.map((link) => (
            <li key={link} className="hover:text-brand-700 transition-colors duration-300 font-fira">
              <span className='text-brand-700 font-bold'>#</span>
              <a href="">{link}</a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
};