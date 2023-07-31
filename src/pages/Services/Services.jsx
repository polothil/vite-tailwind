import FormComponent from './FormComponent/FormComponent';

const Service = () => {
  return (
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

      {/* Single Column after Fixed Height */}
      <div className='flex-grow p-4 mb-24 bg-gray-400 max-w-5xl mx-auto'>
        {/* Content for the third column goes here */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam suscipit a velit
          quo ducimus laboriosam provident veritatis eos commodi, nemo facere consequatur
          reiciendis qui. Consequuntur repudiandae temporibus voluptatem animi dolorum
          nobis autem eligendi delectus earum, in alias nostrum. Ad libero iusto ducimus
          inventore, blanditiis provident explicabo officia eveniet esse voluptatum veniam
          consectetur quas, cumque iure nisi quae accusamus repellat? Maxime aliquam
          adipisci laborum sed consectetur porro, nisi odio repellendus minus autem.
          Reiciendis eaque accusantium, eos dolor, quis aliquid molestiae quidem alias
          temporibus atque itaque amet assumenda a neque labore sequi ratione, id dicta
          numquam ea quod similique. Hic numquam odio aliquid pariatur, eaque consectetur
          nisi minima reprehenderit! Odio neque id ex, libero ut obcaecati ad repellendus
          sapiente accusamus aperiam veritatis doloremque, perspiciatis consectetur
          necessitatibus, aut suscipit! Odit perspiciatis culpa quasi aliquid eligendi
          magnam deserunt voluptate, qui facere temporibus sunt iste illo, reiciendis non
          eum ex inventore optio fugiat cum at aspernatur esse earum est! Labore quaerat
          itaque dignissimos? Vel quis beatae facilis! Fuga repudiandae commodi est animi!
          Odit nisi eaque corrupti. Nostrum ipsam similique explicabo laboriosam
          laudantium praesentium, ad molestiae accusamus unde! Deleniti dolorem, eos eaque
          neque sapiente, ut autem tempore deserunt omnis iure tempora similique
          laudantium consequatur nisi repellat?
        </p>
      </div>
    </div>

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
