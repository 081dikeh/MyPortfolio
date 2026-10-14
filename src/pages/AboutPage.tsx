// src/pages/AboutPage.tsx
import secHeroImg from '../assets/secHeroImg.png'
import { SITE } from '../data/site'
import Skill from '../components/Skill'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

export default function AboutPage() {
  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <div className='grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20'>
        <div>
          <SectionHeading
            as='h1'
            title='About'
            subtitle='Frontend developer in Nigeria. Open to freelance work and full-time roles.'
          />
          <div className='flex max-w-[36rem] flex-col gap-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
            <p className='text-2xl leading-snug text-ink md:text-[1.7rem]'>
              I’m a self-taught frontend developer who has shipped 10 live projects across music, finance, e-commerce,
              and community apps, without a bootcamp or CS degree.
            </p>
            <p>
              I work mostly with React, TypeScript, Next.js, and Tailwind CSS, and deploy everything on Vercel, with
              Supabase or Neon on the backend when a project needs one.
            </p>
            <p>
              I started from zero and built everything through consistency and a genuine obsession with how the web
              works. Every project is live, has a public GitHub repo, and was built entirely by me.
            </p>
            <p>If you’re building something and need someone who ships, let’s talk.</p>
          </div>
          <div className='mt-9 flex flex-wrap gap-3'>
            <Button to='/contact'>Get in touch</Button>
            <Button href={SITE.resume} download variant='secondary'>Download resume</Button>
          </div>
        </div>

        <div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#E7B53B] lg:max-w-none'>
          <img
            src={secHeroImg}
            alt='Dikeh Daniel'
            width={803}
            height={958}
            className='absolute -bottom-[4%] left-1/2 w-[104%] max-w-none -translate-x-1/2'
          />
        </div>
      </div>

      <div className='mt-section'>
        <SectionHeading title='Skills' subtitle='What I build with every day.' />
        <Skill />
      </div>
    </PageLayout>
  )
}