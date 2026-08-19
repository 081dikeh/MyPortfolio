import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import PageLayout from '../components/common/PageLayout'
import FadeIn from '../components/common/FadeIn'
import Button from '../components/common/Button'

interface FormData {
  name: string; email: string; title: string; message: string
}
interface FormErrors {
  name?: string; email?: string; title?: string; message?: string
}
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!data.title.trim()) errors.title = 'Subject is required'
  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters'
  }
  return errors
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', title: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const { ref: headerRef, inView: headerVisible } = useInView()
  const { ref: formRef, inView: formVisible } = useInView({ threshold: 0.05 })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name as keyof FormData]) {
      const updated = { ...formData, [name]: value }
      const newErrors = validate(updated)
      setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const newErrors = validate(formData)
    setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched({ name: true, email: true, title: true, message: true })
    const newErrors = validate(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('loading')
    const body = `Hi Daniel,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    const mailtoLink = `mailto:dikehdaniel2020@gmail.com?subject=${encodeURIComponent(formData.title)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      try { window.location.href = mailtoLink; setStatus('success') }
      catch { setStatus('error') }
    }, 600)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', title: '', message: '' })
    setErrors({}); setTouched({}); setStatus('idle')
  }

  const fieldClass = (field: keyof FormData) =>
    `form-input w-full px-4 py-3 bg-surface/30 border text-white placeholder-muted/50 transition-colors duration-200 text-sm ${
      touched[field] && errors[field]
        ? 'border-error'
        : 'border-border'
    }`

  if (status === 'success') {
    return (
      <PageLayout fullWidth className='min-h-[70vh] flex items-center justify-center px-4'>
        <div className='w-full max-w-lg text-center border border-border p-10 flex flex-col items-center gap-6 animate-scale-in bg-surface/20'>
          <CheckCircle size={52} className='text-accent' strokeWidth={1.5} />
          <div>
            <h2 className='text-2xl text-white font-mono font-semibold mb-2'>Message ready!</h2>
            <p className='text-muted text-sm leading-relaxed'>
              Your email client should have opened with your message pre-filled.
              Hit <span className='text-accent font-semibold'>Send</span> to reach me.
            </p>
          </div>
          <Button onClick={handleReset} variant='secondary'>Send another</Button>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout className='pt-24 pb-section'>
      <div className='max-w-2xl mx-auto'>
        <div ref={headerRef} className='mb-10'>
          <FadeIn show={headerVisible} direction='up'>
            <h1 className='text-3xl text-white font-mono font-semibold mb-2'>
              <span className='text-accent'>#</span>Contact
            </h1>
            <p className='text-muted text-sm'>
              Got a project in mind? Fill in the form and I'll get back to you within 24 hours.
            </p>
          </FadeIn>
        </div>

        <div ref={formRef}>
          <FadeIn show={formVisible} direction='up' delay={150}>
            <form onSubmit={handleSubmit} noValidate className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='name' className='text-xs text-muted font-mono sr-only'>Name</label>
                  <input id='name' type='text' name='name' placeholder='Your name'
                    value={formData.name} onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass('name')} disabled={status === 'loading'} />
                  {touched.name && errors.name && (
                    <p className='text-error text-xs flex items-center gap-1'>
                      <AlertCircle size={12} />{errors.name}
                    </p>
                  )}
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='email' className='text-xs text-muted font-mono sr-only'>Email</label>
                  <input id='email' type='email' name='email' placeholder='Your email'
                    value={formData.email} onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass('email')} disabled={status === 'loading'} />
                  {touched.email && errors.email && (
                    <p className='text-error text-xs flex items-center gap-1'>
                      <AlertCircle size={12} />{errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='title' className='text-xs text-muted font-mono sr-only'>Subject</label>
                <input id='title' type='text' name='title' placeholder='Subject'
                  value={formData.title} onChange={handleChange} onBlur={handleBlur}
                  className={fieldClass('title')} disabled={status === 'loading'} />
                {touched.title && errors.title && (
                  <p className='text-error text-xs flex items-center gap-1'>
                    <AlertCircle size={12} />{errors.title}
                  </p>
                )}
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='message' className='text-xs text-muted font-mono sr-only'>Message</label>
                <textarea id='message' name='message' placeholder='Tell me about your project...' rows={6}
                  value={formData.message} onChange={handleChange} onBlur={handleBlur}
                  className={`${fieldClass('message')} resize-none`} disabled={status === 'loading'} />
                <div className='flex justify-between items-center'>
                  {touched.message && errors.message ? (
                    <p className='text-error text-xs flex items-center gap-1'>
                      <AlertCircle size={12} />{errors.message}
                    </p>
                  ) : <span />}
                  <span className={`text-xs ml-auto ${formData.message.length > 800 ? 'text-error' : 'text-muted/50'}`}>
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              {status === 'error' && (
                <div className='flex items-center gap-2 text-error border border-error/40 px-4 py-2.5 text-sm bg-error/5'>
                  <AlertCircle size={16} />
                  Something went wrong. Email me at{' '}
                  <a href='mailto:dikehdaniel2020@gmail.com' className='underline hover:text-white transition-colors'>
                    dikehdaniel2020@gmail.com
                  </a>
                </div>
              )}

              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2'>
                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='inline-flex items-center gap-2 px-7 py-3 text-white ring-1 ring-accent hover:bg-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm btn-lift'
                >
                  {status === 'loading'
                    ? <><Loader size={16} className='animate-spin' />Preparing...</>
                    : <><Send size={16} />Send message</>}
                </button>

                <div className='flex items-center gap-4 text-muted text-sm'>
                  <span className='hidden sm:inline text-muted/50 font-mono text-xs'>or</span>
                  <a href='mailto:dikehdaniel2020@gmail.com' className='hover:text-accent transition-colors' aria-label='Email'>
                    <Mail size={18} />
                  </a>
                  <a href='https://www.linkedin.com/in/daniel-dikeh' target='_blank' rel='noopener noreferrer'
                    className='hover:text-accent transition-colors' aria-label='LinkedIn'>
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </PageLayout>
  )
}
