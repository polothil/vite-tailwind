import FormComponent from './FormComponent/FormComponent';
import PriceTable from './PriceTable/PriceTable';

const Service = () => {
  return (
    <main className='bg-gray-100 pt-3 pb-32'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow rounded-lg px-8 py-6'>
          <div className='bg-gray-100 py-4 md:flex md:flex-col '>
            {/* Top Two Columns */}
            <div className='md:flex max-w-5xl mx-auto flex'>
              <div className='md:w-1/2'>
                {/* Content for the first column goes here */}
                <FormComponent />
              </div>
              <div className='md:flex hidden md:w-1/2 pb-2'>
                {/* Content for the second column goes here */}
                <div className='space-y-4'>
                  <img
                    className='pl-2'
                    src={`https://images.unsplash.com/photo-1603981696711-bbbd734d1606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
                    alt='Image 1'
                  />

                  <img
                    className='pl-2'
                    src={`https://images.unsplash.com/photo-1421429167374-8fc8ab6d0f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
                    alt='Image 3'
                  />
                </div>
              </div>
            </div>
            <p className='text-lg text-gray-700  p-4 mb-6'>
              Fill out the form above and we will contact you as soon as possible to find
              a time and place that suits us both. You may also text us on our phone
              number and we will call you back as soon as we can.
            </p>

            {/* Single Column after Fixed Height */}
            <div className='flex-grow p-4 mb-24 max-w-5xl mx-auto'>
              {/* Content for the third column goes here */}
              <PriceTable />
            </div>
          </div>
        </div>
      </div>
    </main>

    // <div className='flex flex-col h-screen'>
    //   {/* Top Two Columns */}
    //   <div className='max-w-5xl mx-auto flex'>
    //     <div className='w-1/2 p-4 '>
    //       {/* Content for the first column goes here */}
    //       <FormComponent />
    //     </div>
    //     <div className='w-1/2 p-4'>
    //       {/* Content for the second column goes here */}
    //       <div className=' p-4'>
    //         {/* Image Gallery */}
    //         <div className='space-y-4'>
    //           <img
    //             className='w-full p-2'
    //             src={`https://images.unsplash.com/photo-1603981696711-bbbd734d1606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
    //             alt='Image 1'
    //           />

    //           <img
    //             className='w-full p-2'
    //             src={`https://images.unsplash.com/photo-1421429167374-8fc8ab6d0f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
    //             alt='Image 3'
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Single Column after Fixed Height */}
    //   <div className='flex-grow p-4 bg-gray-400'>
    //     {/* Content for the third column goes here */}
    //     <p>This is the third column after the fixed height.</p>
    //   </div>
    // </div>
  );
};

export default Service;
