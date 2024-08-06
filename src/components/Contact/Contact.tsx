import React from 'react';
import {useState} from 'react'
import {motion} from 'framer-motion'
// import emailjs from '@emailjs/browser'
import {fadeIn, slideIn} from '../motion'
 
export const Contact = () => {
  // const formRef = useRef();
  const [form] = useState({
    name: '',
    email: '',
    message : '',
  })
  const [loading] = useState(false);
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setForm({...form,[name]: value})
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs.send('','',
  //   {
  //     from_name: form.name,
  //     to_name: "Ali Gates",
  //     from_email: form.email,
  //     to_email: "hacktech877@gmail.com",
  //     message: form.message,
  //   },
  //   ''
  //   ).then(() => {
  //     setLoading(false);
  //     alert('Thank You, I will get back to you as soon as possible.');
  //     setForm({
  //       name:'',
  //       email:'',
  //       message:'',
  //       })
  //   },(error) => {
  //     setLoading(false)
  //     console.log("Error!", error.message);
  //     alert('Something went Wrong');
  //   }
  //   )
  // }
  return (
    <>
    <motion.h1 className='text-[#0059a6] text-[2rem] sm:text-[30px] pt-6 font-bold flex justify-center' 
      variants={slideIn('down','tween', 0.2, 1)}>
          Contact
      </motion.h1>
    
      <motion.h3 variants={fadeIn('right', '', 1, 1)} initial="hidden" animate="show" className="text-[#0059a6] mb-7  flex justify-center font-thin">
        Get in touch with me!
      </motion.h3>
      
      <div className='container'>
        <div className=' md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.331360536526!2d73.46764747466422!3d30.793340582702672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918098eaf9ade0d%3A0xda76125df509d079!2sZahid%20Printing%20Services%20Okara!5e0!3m2!1sen!2s!4v1719846727174!5m2!1sen!2s"  
            className='border-0 w-full h-full' 
             
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
          <form className='w-full'>
            <div className='mb-3'>
            <label className='flex flex-col'>
            <span className='text-black font-medium mb-1'>
              Enter Name </span>
              <input 
              type="text"
              name='name'
              value={form.name}
              // onChange={handleChange}
              placeholder="Enter your name?"
              className='bg-white py-4 px-4 placeholder:text-secondary
              text-black rounded-lg border-2 font-medium mb-2'
              />
            </label >
            </div>
            <label className='flex flex-col'>
            <span className='text-black font-medium mb-1'>
              Your Email </span>
              <input 
              type="email"
              name='email'
              value={form.email}
              // onChange={handleChange}
              placeholder="What's your email?"
              className='bg-white py-4 px-4 placeholder:text-secondary
              text-black rounded-lg border-2 font-medium mb-3'
              />
            </label >
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-1'>
                Your Message </span>
                <textarea 
                name='message'
                rows={4}
                value={form.message}
                // onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-white py-4 px-4 placeholder:text-secondary
                text-black rounded-lg border-2 font-medium mb-2'
              />
            </label >
            <button
              type='submit'
              className='bg-[#0059a6] py-3 px-8 outline-none w-fit
            text-white font-bold shadow-md shadow-primary rounded-md'
            >
              {loading ? 'Sending...': 'Send'}
            </button>
          </form>

          </div>
        </div>
      </div>
      
    </>
  )
}
