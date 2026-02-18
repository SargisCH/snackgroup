'use client';

import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation('common');

  return (
    <section id="products" style={{ paddingTop: '80px', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#F5DEB3' }}>
      <h2 style={{color: '#8B4513'}}>{t('products')}</h2>
      <p style={{color: '#8B4513'}}>{t('products_intro')}</p>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ background: 'white', color: '#8B4513', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>{t('nuts_salted')}</div>
        <div style={{ background: 'white', color: '#8B4513', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>{t('nuts_honey')}</div>
        <div style={{ background: 'white', color: '#8B4513', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>{t('corn_salted')}</div>
        <div style={{ background: 'white', color: '#8B4513', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>{t('corn_pepper')}</div>
        <div style={{ background: 'white', color: '#8B4513', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>{t('cashew')}</div>
      </div>
    </section>
  );
};

export default Products;