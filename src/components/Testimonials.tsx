import { Quote } from 'lucide-react'
import SectionHeading from './common/SectionHeading'
import FadeIn from './common/FadeIn'
import { useInView } from '../hooks/useInView'

const TESTIMONIALS = [
    {
        quote:
            'Daniel built a polished, functional product experience with real thought behind the UX. The final result felt premium and intentional.',
        name: 'Client / Product Lead',
        role: 'Product collaboration',
    },
    {
        quote:
            'His ability to turn an idea into a working interface, then iterate quickly, is exactly what teams need from a frontend developer.',
        name: 'Project Partner',
        role: 'Product & UI feedback',
    },
]

export default function Testimonials() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.08 })

    return (
        <section id='testimonials' ref={sectionRef} className='py-section scroll-mt-24'>
            <SectionHeading
                title='Testimonials'
                show={inView}
                subtitle='A few short notes from working relationships and collaboration experiences.'
                lineWidth='md:w-72 lg:w-[22rem]'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {TESTIMONIALS.map(({ quote, name, role }, index) => (
                    <FadeIn key={name} show={inView} delay={index * 120}>
                        <blockquote className='h-full border border-border bg-surface/30 p-6 flex flex-col gap-5'>
                            <Quote className='text-accent' size={22} />
                            <p className='text-muted leading-relaxed text-sm'>“{quote}”</p>
                            <footer className='mt-auto'>
                                <div className='text-white font-medium text-sm'>{name}</div>
                                <div className='text-muted text-xs font-mono'>{role}</div>
                            </footer>
                        </blockquote>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
