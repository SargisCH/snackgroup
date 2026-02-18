'use client';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <section id="about" style={{ paddingTop: '80px', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#8B4513' }}>
      <h2 style={{ color: '#8B4513' }}>{t('about')}</h2>
      <p style={{ maxWidth: '600px', textAlign: 'center', color: '#8B4513' }}>{t('about_us_text')}</p>
    </section>
  );
};

export default About;