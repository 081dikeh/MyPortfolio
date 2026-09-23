import { Code2, LayoutPanelTop, Rocket } from 'lucide-react'
import SectionHeading from './common/SectionHeading'
import FadeIn from './common/FadeIn'
import { useInView } from '../hooks/useInView'

const SERVICES = [
    {
        icon: Code2,
        title: 'Frontend development',
        description: 'Building clean, responsive interfaces with React, Next.js, and TypeScript for products that need to feel polished and perform well.',
    },
    {
        icon: LayoutPanelTop,
        title: 'UI implementation',
        description: 'Translating design systems and product ideas into real, accessible interfaces with thoughtful UX, spacing, and interaction patterns.',
    },
    {
        icon: Rocket,
        title: 'Product MVPs & dashboards',
        description: 'Creating launch-ready web experiences for startups and teams that need usable, scalable interfaces with strong product thinking behind them.',
    },
]

export default function Services() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.08 })

    return (
        <section id='services' ref={sectionRef} className='py-section scroll-mt-24'>
            <SectionHeading
                title='Services'
                show={inView}
                subtitle='I help businesses and founders turn product ideas into usable, fast, polished web experiences.'
                lineWidth='md:w-64 lg:w-80'
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {SERVICES.map(({ icon: Icon, title, description }, index) => (
                    <FadeIn key={title} show={inView} delay={index * 100}>
                        <div className='h-full border border-border bg-surface/30 p-6 hover:border-accent/40 transition-colors duration-300'>
                            <div className='mb-5 inline-flex items-center justify-center w-11 h-11 border border-accent/40 bg-accent/5 text-accent'>
                                <Icon size={18} />
                            </div>
                            <h3 className='text-white text-lg font-semibold mb-3'>{title}</h3>
                            <p className='text-muted text-sm leading-relaxed'>{description}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
