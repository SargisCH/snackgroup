'use client';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 sm:px-6 lg:px-8 min-h-[50vh] flex flex-col justify-center items-center text-center" style={{ color: '#8B4513' }}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('about')}</h2>
      <p className="max-w-2xl text-lg sm:text-xl leading-relaxed">{t('about_us_text')}</p>
    </section>
  );
};

export default About;