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
    <>
      <style>{`
        .submit-btn:hover {
          background-color: #A0522D !important;
        }
      `}</style>
      <section id="contact" style={{ paddingTop: '80px', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#654321' }}>
        <h2 style={{ color: '#654321' }}>{t('contact')}</h2>
        <p style={{ color: '#654321' }}>{t('contact_us_intro')}</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px', marginTop: '2rem' }}>
          <input type="text" placeholder={t('name')} value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #D2B48C', borderRadius: '4px' }} />
          <input type="email" placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #D2B48C', borderRadius: '4px' }} />
          <textarea placeholder={t('message')} value={message} onChange={(e) => setMessage(e.target.value)} required style={{ padding: '0.5rem', minHeight: '100px', border: '1px solid #D2B48C', borderRadius: '4px' }}/>
          <button type="submit" className="submit-btn" style={{ padding: '0.75rem', backgroundColor: '#654321', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', transition: 'background-color 0.3s' }}>{t('send')}</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
