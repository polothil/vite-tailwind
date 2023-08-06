import React from 'react';

const PriceTable = () => {
  const priceListData = [
    { name: 'Normal Service', price: 'SEK 500', description: 'Includes basic basic' },
    {
      name: 'Complete Service',
      price: 'SEK 1000',
      description: 'Includes advanced features',
    },
    { name: 'Puncture repair', price: 'SEK 350', description: 'Includes all features' },
    {
      name: 'Change of spokes & wheel alignment',
      price: 'SEK 450',
      description: 'Includes premium features',
    },
    {
      name: 'Gear tuning',
      price: 'SEK 300',
      description: 'Includes premium features',
    },
    {
      name: 'Replacement of brake pads (rim brake):',
      price: 'SEK 300 + material',
      description: 'Includes premium features',
    },
    {
      name: 'Tyre change',
      price: 'SEK 450 + material',
      description: 'Includes premium features',
    },
    // Add more items as needed
  ];

  const firstRowItems = priceListData.slice(0, 3);
  const secondRowItems = priceListData.slice(3);

  return (
    <div>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3'>
        {firstRowItems.map((item, index) => (
          <div key={index} className='p-6 border border-gray-300 rounded-md shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>{item.name}</h2>
            <p className='text-lg mb-2'>{item.price}</p>
            <p className='text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>

      <div className={`grid gap-4 grid-cols-4 justify-center mt-8`}>
        {secondRowItems.map((item, index) => (
          <div key={index} className='p-6 border border-gray-300 rounded-md shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>{item.name}</h2>
            <p className='text-lg mb-2'>{item.price}</p>
            <p className='text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable;
