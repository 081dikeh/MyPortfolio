import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { Mail, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { useInView } from '../hooks/useInView'

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

export default function ContactMePage() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', title: '', message: '' })
  const [errors, setErrors]     = useState<FormErrors>({})
  const [touched, setTouched]   = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [status, setStatus]     = useState<FormStatus>('idle')

  const { ref: headerRef, inView: headerVisible } = useInView()
  const { ref: formRef,   inView: formVisible   } = useInView({ threshold: 0.05 })

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
    }, 800)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', title: '', message: '' })
    setErrors({}); setTouched({}); setStatus('idle')
  }

  // ── Success ──────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className='min-h-screen flex items-center justify-center px-4 font-fira page-enter'>
        <div className='w-full max-w-lg text-center border border-brand-500 p-10 flex flex-col items-center gap-6 animate-scale-in'>
          <CheckCircle size={56} className='text-brand-700' strokeWidth={1.5} />
          <div>
            <h2 className='text-2xl text-white font-semibold mb-2'>Message ready to send!</h2>
            <p className='text-brand-500 text-sm leading-relaxed'>
              Your email client should have opened with your message pre-filled.
              Just hit <span className='text-brand-700 font-bold'>Send</span> in your mail app to reach Daniel.
            </p>
          </div>
          <button
            onClick={handleReset}
            className='px-6 py-2 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 text-sm'
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  // ── Field class helper ────────────────────────────────────────────
  const fieldClass = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-transparent border text-white placeholder-brand-300 focus:outline-none transition-colors duration-200 text-sm font-fira ${
      touched[field] && errors[field]
        ? 'border-brand-900 focus:border-brand-900'
        : 'border-brand-400 focus:border-brand-700'
    }`

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-24 font-fira page-enter'>
      <div className='w-full max-w-2xl'>

        {/* Header */}
        <div ref={headerRef} className='mb-10'>
          <h1 className={`text-3xl text-white font-[500] mb-1
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
            <span className='text-brand-700'>#</span>Contact me
          </h1>
          <p className={`text-brand-500 text-sm
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '120ms' }}>
            Got a project in mind? Fill in the form and I'll get back to you.
          </p>
        </div>

        {/* Form */}
        <div
          ref={formRef}
          className={`${formVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
            <div className='flex flex-col gap-1'>
              <input type='text' name='name' placeholder='Your name'
                value={formData.name} onChange={handleChange} onBlur={handleBlur}
                className={fieldClass('name')} disabled={status === 'loading'} />
              {touched.name && errors.name && (
                <p className='text-brand-900 text-xs flex items-center gap-1'>
                  <AlertCircle size={12} />{errors.name}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <input type='email' name='email' placeholder='Your email'
                value={formData.email} onChange={handleChange} onBlur={handleBlur}
                className={fieldClass('email')} disabled={status === 'loading'} />
              {touched.email && errors.email && (
                <p className='text-brand-900 text-xs flex items-center gap-1'>
                  <AlertCircle size={12} />{errors.email}
                </p>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-1 mb-4'>
            <input type='text' name='title' placeholder='Subject'
              value={formData.title} onChange={handleChange} onBlur={handleBlur}
              className={fieldClass('title')} disabled={status === 'loading'} />
            {touched.title && errors.title && (
              <p className='text-brand-900 text-xs flex items-center gap-1'>
                <AlertCircle size={12} />{errors.title}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-1 mb-2'>
            <textarea name='message' placeholder='Your message...' rows={7}
              value={formData.message} onChange={handleChange} onBlur={handleBlur}
              className={`${fieldClass('message')} resize-none`} disabled={status === 'loading'} />
            <div className='flex justify-between items-center'>
              {touched.message && errors.message ? (
                <p className='text-brand-900 text-xs flex items-center gap-1'>
                  <AlertCircle size={12} />{errors.message}
                </p>
              ) : <span />}
              <span className={`text-xs ml-auto ${formData.message.length > 800 ? 'text-brand-900' : 'text-brand-300'}`}>
                {formData.message.length}/1000
              </span>
            </div>
          </div>

          {status === 'error' && (
            <div className='mb-4 flex items-center gap-2 text-brand-900 border border-brand-900 px-4 py-2 text-sm animate-fade-in'>
              <AlertCircle size={16} />
              Something went wrong. Email me directly at{' '}
              <a href='mailto:dikehdaniel2020@gmail.com' className='underline hover:text-white transition-colors'>
                dikehdaniel2020@gmail.com
              </a>
            </div>
          )}

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6'>
            <button
              type='submit'
              disabled={status === 'loading'}
              className='flex items-center gap-2 px-8 py-3 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm'
            >
              {status === 'loading'
                ? <><Loader size={16} className='animate-spin' />Preparing...</>
                : <><Send size={16} />Send message</>}
            </button>

            <div className='flex items-center gap-4 text-brand-500 text-sm'>
              <span className='hidden sm:inline text-brand-400'>or reach out via</span>
              <a href='mailto:dikehdaniel2020@gmail.com' className='hover:text-brand-700 transition-colors' title='Email'>
                <Mail size={18} />
              </a>
              <a href='https://www.linkedin.com/in/daniel-dikeh' target='_blank' rel='noopener noreferrer'
                className='hover:text-brand-700 transition-colors' title='LinkedIn'>
                <Linkedin size={18} />
              </a>
              <a href='https://twitter.com/Danishadow081' target='_blank' rel='noopener noreferrer'
                className='hover:text-brand-700 transition-colors' title='Twitter'>
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </form>
        </div>

      </div>
    </div>
  )
}
