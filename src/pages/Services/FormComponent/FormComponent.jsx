import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const params = new URLSearchParams();
    // for (const [key, value] of Object.entries(formData)) {
    //   params.append(key, value);
    // }
    // const encodedString = params.toString();
    // console.log('%c encodedString: ', 'color: #f00', encodedString);

    // console.log('%c data:  ', 'color: #f00', $('#gform').serialize());

    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbz6bMyzvA1g2TRsbAJZWpZ3q7DlcQWVCT_7pRWpXun7xZlmT91A1Xu67I371EMxUMmk/exec',
      data: formData,
      method: 'post',
      success: function (response) {
        console.log('%c response: ', 'color: #f00', response);
        alert('Form submitted successfully');
        handleClearForm();
      },
      error: function (err) {
        alert('Something Error');
      },
    });
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    setFormErrors({
      name: false,
      email: false,
      phone: false,
      message: false,
    });

    setIsFormValid(false);
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  const validate = (key, value) => {
    const errors = { ...formErrors };
    const nameRegex = /^[A-Za-z0-9\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^(\+?\d{1,3})?[-.\s]?\(?\d{1,}\)?[-.\s]?\d{1,}[-.\s]?\d{1,}[-.\s]?\d{1,}[-.\s]?\d{1,}$/;

    if (key === 'name') {
      errors.name = false;
      if (!value.trim() || !nameRegex.test(value)) {
        errors.name = true;
      }
    }
    if (key === 'email') {
      errors.email = false;
      if (!value.trim() || !emailRegex.test(value)) {
        errors.email = true;
      }
    }
    if (key === 'phone') {
      errors.phone = false;
      if (!value.trim() || !phoneRegex.test(value)) {
        errors.phone = true;
      }
    }
    if (key === 'message') {
      errors.message = false;
      if (!value.trim()) {
        errors.message = true;
      }
    }

    setIsFormValid(!Object.values(errors).some((error) => error === true));
    setFormErrors(errors);
  };

  return (
    <div className='flex justify-center  py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Book Our Services
          </h2>
        </div>
        <form
          className='mt-8 space-y-6'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
          // action='https://script.google.com/macros/s/AKfycbx1nl6_BAWARfvfHli_Vg8RhIiv9xRDcVzeOA_fuu2KTVRTz13X5qkaC7kgf5BEcILw/exec'
          // method='POST'
          id='gform'
        >
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <div className='mt-1'>
              <input
                id='name'
                name='name'
                value={formData.name}
                type='text'
                autoComplete='off'
                required
                onBlur={handleValidation}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.name ? 'border-red-500' : ''
                }`}
              />
              {formErrors.name && (
                <p className='mt-2 text-sm text-red-500'>Please enter a valid name.</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email address
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                value={formData.email}
                type='email'
                autoComplete='email'
                required
                onChange={handleChange}
                onBlur={handleValidation}
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.email ? 'border-red-500' : ''
                }`}
              />
              {formErrors.email && (
                <p className='mt-2 text-sm text-red-500'>
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
              Phone number
            </label>
            <div className='mt-1'>
              <input
                id='phone'
                name='phone'
                value={formData.phone}
                type='tel'
                autoComplete='tel'
                required
                onBlur={handleValidation}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.phone ? 'border-red-500' : ''
                }`}
              />
              {formErrors.phone && (
                <p className='mt-2 text-sm text-red-500'>
                  Please enter a valid phone number.
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <div className='mt-1'>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                rows='7'
                required
                onBlur={handleValidation}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.message ? 'border-red-500' : ''
                }`}
              ></textarea>
              {formErrors.message && (
                <p className='mt-2 text-sm text-red-500'>Please enter a message.</p>
              )}
            </div>
          </div>
          <div className='flex justify-between'>
            <button
              type='submit'
              className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                !isFormValid ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isFormValid}
            >
              Submit
            </button>
            <button
              type='button'
              onClick={handleClearForm}
              className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
