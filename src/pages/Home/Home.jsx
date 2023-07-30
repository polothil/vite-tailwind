import React from 'react';

const Home = () => {
  return (
    <main className='bg-gray-100 pt-3 pb-32'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow rounded-lg px-8 py-6'>
          <h1 className='text-4xl font-bold text-gray-800 mb-6'>
            Welcome to Cirkulära Verkstaden!
          </h1>
          <p className='text-lg text-gray-700 mb-6'>
            At Cirkulära Verkstaden, we are passionate about bicycles and dedicated to
            providing top-notch services for all cycling enthusiasts. Whether you ride for
            leisure, fitness, or competition, we've got you covered.
          </p>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Our Services:</h2>
          <ul className='list-disc list-inside mb-6'>
            <li className='text-lg text-gray-700'>
              Bicycle Repair and Maintenance: From simple tune-ups to complex repairs, our
              skilled technicians will have your bike running smoothly in no time. We use
              high-quality parts and the latest tools to ensure your bike performs at its
              best.
            </li>
            <li className='text-lg text-gray-700'>
              Custom Bike Builds: Looking for a bike that's tailored to your unique needs
              and preferences? Our team can build a custom bike from the ground up,
              combining top-quality components for the ultimate riding experience.
            </li>
            <li className='text-lg text-gray-700'>
              Bike Fitting: Achieve optimal comfort and performance with our professional
              bike fitting services. Our experts will analyze your riding posture and make
              adjustments to maximize efficiency and reduce the risk of injury.
            </li>
            <li className='text-lg text-gray-700'>
              Bike Rentals: Don't have a bike? No problem! Rent one of our premium
              bicycles and explore the scenic routes in the area. We have a variety of
              bikes for all ages and skill levels.
            </li>
            <li className='text-lg text-gray-700'>
              Cycling Accessories: Enhance your cycling experience with our wide range of
              accessories. From helmets and apparel to bike racks and lights, we've got
              everything you need to ride in style and safety.
            </li>
          </ul>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Why Choose Cirkulära Verkstaden?
          </h2>
          <ul className='list-disc list-inside mb-6'>
            <li className='text-lg text-gray-700'>
              Experienced Team: Our technicians and staff are cycling enthusiasts with
              years of experience, ensuring you receive the best advice and service.
            </li>
            <li className='text-lg text-gray-700'>
              Customer Satisfaction: Your satisfaction is our priority. We strive to
              exceed your expectations in every aspect of our services.
            </li>
            <li className='text-lg text-gray-700'>
              Quick Turnaround: We understand how important your bike is to you. Our
              efficient service ensures minimal downtime, so you can get back on the road
              quickly.
            </li>
            <li className='text-lg text-gray-700'>
              Competitive Prices: Quality service doesn't have to break the bank. We offer
              competitive prices for all our services and products.
            </li>
          </ul>
          <p className='text-lg text-gray-700'>
            Book a service with Cirkulära Verkstaden today and experience the difference!
            Whether you're a casual rider or a seasoned cyclist, we're here to support
            your passion for cycling. Feel free to contact us for any inquiries or to
            schedule an appointment. Happy cycling!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
