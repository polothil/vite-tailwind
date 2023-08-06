import React from 'react';

const Home = () => {
  return (
    <main className='bg-gray-100 pt-3 pb-32'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow rounded-lg px-8 py-6'>
          <h1 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
            Bicycle service on your terms!
          </h1>
          <p className='text-lg text-gray-700 mb-6'>
            We at Cirkulära Verkstaden offer the bicycle service that comes to you. After
            many years of experience in the bicycle industry, we now offer a rolling
            workshop that comes exactly where you need it. We work climate-smart, close to
            the customer and based on the customer's own wishes regarding time and place.
            Having a broken bike should not be a project, instead let us come and repair
            the bike!
          </p>
          <h2 className='text-3xl font-semibold'>How it works</h2>
          <p className='text-lg text-gray-700 mb-6'>
            We start from Kortedala and Gamlestaden in Gothenburg and contact you to agree
            on a time and place as soon as a repair request has been submitted via the
            form on the page. You can also contact us with questions by phone.
          </p>
          <h4 className='text-xl font-normal'>
            Don't hesitate to get in touch, a bike feels good to be ridden on!
          </h4>
        </div>
      </div>
    </main>
  );
};

export default Home;
