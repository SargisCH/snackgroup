'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact = () => {
  const { t } = useTranslation('common');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
    alert('Form submitted (check console)');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex flex-col justify-center items-center text-[#8B4513]">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('contact')}</h2>
        <p className="text-center mb-8 max-w-xl">{t('contact_us_intro')}</p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-tan-100">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-semibold mb-1 opacity-80">{t('name')}</label>
            <input 
              id="name"
              type="text" 
              placeholder={t('name')} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="w-full px-4 py-3 border border-tan-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-semibold mb-1 opacity-80">{t('email')}</label>
            <input 
              id="email"
              type="email" 
              placeholder={t('email')} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full px-4 py-3 border border-tan-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-semibold mb-1 opacity-80">{t('message')}</label>
            <textarea 
              id="message"
              placeholder={t('message')} 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className="w-full px-4 py-3 min-h-[120px] border border-tan-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 py-4 bg-[#8B4513] text-white font-bold rounded-lg hover:bg-[#A0522D] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {t('send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
