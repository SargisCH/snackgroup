'use client';

import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation('common');

  const products = [
    t('nuts_salted'),
    t('nuts_honey'),
    t('corn_salted'),
    t('corn_pepper'),
    t('cashew'),
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex flex-col justify-center items-center bg-[#F5DEB3]">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#8B4513]">{t('products')}</h2>
        <p className="text-[#8B4513] mb-12 max-w-2xl mx-auto">{t('products_intro')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white text-[#8B4513] w-full max-w-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center font-semibold text-lg"
            >
              {product}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;