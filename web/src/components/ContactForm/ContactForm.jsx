// web/src/components/ContactForm/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to the serverless function
      const response = await fetch('./functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Error sending email',response);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className='flex w-full justify-center'>
  <form onSubmit={handleSubmit} className='pt-8 pb-8 lg:w-1/2 xl:w-1/3'>
    <label className='block mb-2 text-white'>
      Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className='w-full p-2 border border-gray-300 rounded text-black'
      />
    </label>

    <label className='block mb-2 text-white'>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className='w-full p-2 border border-gray-300 rounded text-black'
      />
    </label>

    <label className='block mb-2 text-white'>
      Message:
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className='w-full p-2 border border-gray-300 rounded text-black'
      />
    </label>

    <button
      type="submit"
      className='w-full bg-[#3DA3C2] text-white p-2 rounded hover:bg-blue-600'
    >
      Submit
    </button>
  </form>
</div>


  );
};

export default ContactForm;
