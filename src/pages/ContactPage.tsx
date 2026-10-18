// src/pages/ContactPage.tsx
import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { SITE } from '../data/site'
import PageLayout from '../components/common/PageLayout'
import { usePageMetadata } from '../hooks/usePageMetadata'
import Button from '../components/common/Button'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

interface FormData {
  name: string; email: string; title: string; message: string
}
interface FormErrors {
  name?: string; email?: string; title?: string; message?: string
}
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Enter your name'
  if (!data.email.trim()) {
    errors.email = 'Enter your email address'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address, like name@example.com'
  }
  if (!data.title.trim()) errors.title = 'Enter a subject'
  if (!data.message.trim()) {
    errors.message = 'Write a message'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Write at least 20 characters so I have enough to reply to'
  }
  return errors
}

export default function ContactPage() {
  usePageMetadata({
    title: 'Contact Dikeh Daniel | Frontend Engineer',
    description: 'Get in touch with Dikeh Daniel about frontend engineering roles, freelance projects, or product collaborations.',
  })

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', title: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name as keyof FormData]) {
      const updated = { ...formData, [name]: value }
      const newErrors = validate(updated)
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(formData)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched({ name: true, email: true, title: true, message: true })
    const newErrors = validate(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.title,
          message: formData.message,
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )

      setFormData({ name: '', email: '', title: '', message: '' })
      setErrors({})
      setTouched({})
      setStatus('success')
    } catch (error) {
      console.error('Email send failed:', error)
      setStatus('error')
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', title: '', message: '' })
    setErrors({}); setTouched({}); setStatus('idle')
  }

  const fieldClass = (field: keyof FormData) =>
    `w-full rounded-xl border-[1.5px] bg-surface px-4 py-3.5 text-base text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 ${
      touched[field] && errors[field] ? 'border-error' : 'border-line'
    }`

  const labelClass = 'mb-2 block text-[0.95rem] font-medium'

  const FieldError = ({ id, message }: { id: string; message?: string }) =>
    touched[id as keyof FormData] && message ? (
      <p id={`${id}-error`} className='mt-2 flex items-center gap-1.5 text-sm text-error'>
        <AlertCircle size={14} aria-hidden='true' />
        {message}
      </p>
    ) : null

  if (status === 'success') {
    return (
      <PageLayout className='flex min-h-[80vh] items-center pb-section pt-32'>
        <div className='animate-scale-in max-w-xl'>
          <CheckCircle size={44} className='mb-6 text-accent' strokeWidth={1.75} aria-hidden='true' />
          <h1 className='text-4xl font-bold md:text-5xl'>Message sent</h1>
          <p className='mt-4 font-serif text-xl leading-relaxed text-ink/80'>
            Thanks for reaching out. I’ll reply to the email address you gave within 24 hours.
          </p>
          <div className='mt-8'>
            <Button onClick={handleReset} variant='secondary'>Send another message</Button>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
        <div>
          <h1 className='text-5xl font-bold leading-[1] md:text-6xl'>Let’s talk</h1>
          <p className='mt-6 max-w-md font-serif text-xl leading-relaxed text-ink/80'>
            Tell me about your project or role. I’ll reply within 24 hours.
          </p>
          <div className='mt-8 flex flex-col gap-4 font-medium'>
            <a href={`mailto:${SITE.email}`} className='text-link inline-flex w-fit items-center gap-2.5 break-all'>
              <Mail size={18} aria-hidden='true' /> {SITE.email}
            </a>
            <a
              href={SITE.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-link inline-flex w-fit items-center gap-2.5'
            >
              <Linkedin size={18} aria-hidden='true' /> LinkedIn
            </a>
            <p className='inline-flex w-fit items-center gap-2.5 text-ink/80'>
              <MapPin size={18} aria-hidden='true' /> {SITE.location}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className='space-y-6'>
          <div className='grid gap-6 sm:grid-cols-2'>
            <div>
              <label htmlFor='name' className={labelClass}>Name</label>
              <input id='name' type='text' name='name' autoComplete='name'
                value={formData.name} onChange={handleChange} onBlur={handleBlur}
                aria-invalid={Boolean(touched.name && errors.name)} aria-describedby='name-error'
                className={fieldClass('name')} disabled={status === 'loading'} />
              <FieldError id='name' message={errors.name} />
            </div>
            <div>
              <label htmlFor='email' className={labelClass}>Email</label>
              <input id='email' type='email' name='email' autoComplete='email'
                value={formData.email} onChange={handleChange} onBlur={handleBlur}
                aria-invalid={Boolean(touched.email && errors.email)} aria-describedby='email-error'
                className={fieldClass('email')} disabled={status === 'loading'} />
              <FieldError id='email' message={errors.email} />
            </div>
          </div>

          <div>
            <label htmlFor='title' className={labelClass}>Subject</label>
            <input id='title' type='text' name='title'
              value={formData.title} onChange={handleChange} onBlur={handleBlur}
              aria-invalid={Boolean(touched.title && errors.title)} aria-describedby='title-error'
              className={fieldClass('title')} disabled={status === 'loading'} />
            <FieldError id='title' message={errors.title} />
          </div>

          <div>
            <label htmlFor='message' className={labelClass}>Message</label>
            <textarea id='message' name='message' rows={7} maxLength={1000}
              placeholder='What are you building, and how can I help?'
              value={formData.message} onChange={handleChange} onBlur={handleBlur}
              aria-invalid={Boolean(touched.message && errors.message)} aria-describedby='message-error'
              className={`${fieldClass('message')} resize-none`} disabled={status === 'loading'} />
            <div className='flex items-start justify-between gap-4'>
              <FieldError id='message' message={errors.message} />
              <span className='ml-auto mt-2 text-sm text-muted'>{formData.message.length}/1000</span>
            </div>
          </div>

          {status === 'error' && (
            <div role='alert' className='flex items-start gap-2.5 rounded-xl border-[1.5px] border-error/40 bg-error/5 px-4 py-3 text-[0.95rem] text-error'>
              <AlertCircle size={18} className='mt-0.5 shrink-0' aria-hidden='true' />
              <span>
                The message didn’t send. Try again, or email me directly at{' '}
                <a href={`mailto:${SITE.email}`} className='font-semibold underline'>{SITE.email}</a>.
              </span>
            </div>
          )}

          <button
            type='submit'
            disabled={status === 'loading'}
            className='inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-base font-semibold text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60'
          >
            {status === 'loading'
              ? <><Loader size={18} className='animate-spin' aria-hidden='true' />Sending…</>
              : <><Send size={18} aria-hidden='true' />Send message</>}
          </button>
        </form>
      </div>
    </PageLayout>
  )
}