import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

export default function ContactMePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
        </div>
        
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          required
        />
        
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          required
        />
        
        <button
          type="submit"
          className="px-8 py-3 ring-1 ring-brand-600  text-gray-300 hover:bg-purple-600 hover:border-purple-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

