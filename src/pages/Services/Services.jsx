import FormComponent from './FormComponent/FormComponent';

const Service = () => {
  return (
    <div className='flex flex-col h-screen'>
      {/* Top Two Columns */}
      <div className='max-w-5xl mx-auto flex'>
        <div className='w-1/2 p-4 '>
          {/* Content for the first column goes here */}
          <FormComponent />
        </div>
        <div className='w-1/2 p-4'>
          {/* Content for the second column goes here */}
          <div className=' p-4'>
            {/* Image Gallery */}
            <div className='space-y-4'>
              <img
                className='w-full p-2'
                src='/images/chris-becker-6ErV8fw0l34-unsplash.jpg'
                alt='Image 1'
              />

              <img
                className='w-full p-2'
                src='/images/tim-foster-W26woEW9Kqs-unsplash.jpg'
                alt='Image 3'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Single Column after Fixed Height */}
      <div className='flex-grow p-4 bg-gray-400'>
        {/* Content for the third column goes here */}
        <p>This is the third column after the fixed height.</p>
      </div>
    </div>
  );
};

export default Service;
