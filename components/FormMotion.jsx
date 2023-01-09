import React, { useState } from 'react'
import Subtitle from './Subtitle'
import { motion, Variants } from 'framer-motion'



let variant = {
  visible: {
    opacity: 1,
    scale: 1, //Only in parent variant
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08
    }
  },
  hidden: {
    scale: 1,
    opacity: 0, //Only in parent variant
    transition: {
      when: 'afterChildren'
    }}
 };

 
let inputVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4, duration:0.8
    },
  },
  hidden: {
    y: 50 ,
    opacity: 0
  }
}

const Form = ({noBlur}) => {
  let [name,setName] = useState('');
  let [lastName,setLastName] = useState('');
  let [email,setEmail] = useState('');
  let [message,setMessage] = useState('');


  function handleSubmit (e) {
      e.preventDefault();
    
      const formData = new FormData();

      formData.append("name", name)
      formData.append("lastName", lastName)
      formData.append("email", email)
      formData.append("message", message)
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => alert("Form successfully submitted"))
        .catch((error) => alert(error));
    };
    
    
  return (
  <section id={'Form'} className='w-full'>
    <Subtitle name={'Form'} title={`And here's a\nbeautiful form`} span={'form'} position={'left'} first={true}/>

    <motion.form initial='hidden' whileInView='visible' variants={variant} viewport={{once:true}} 
      name='ContactForm' data-netlify="true" data-netlify-recaptcha="true"
      className='flex flex-col items-start'>

      <input type='hidden' name='form-name' value='ContactForm'/>
      
      <div className='grid gap-6 grid-cols-3 w-full min-w-[30vw] auto-rows-min'>
        <div className='inline-flex col-start-1 col-span-3 min-[500px]:col-span-2'>
          <div  className='inline-block relative col-start-1 col-span-1 pr-3'>
            <motion.label variants={inputVariants} className='text-primary cursor-pointer font-semibold whitespace-nowrap text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='name'>NAME</motion.label>
            <motion.input variants={inputVariants} required name='name' className={`block bg-white/10 shadow-sm font-normal text-primary placeholder:text-primary placeholder:text-xs min-[400px]:placeholder:text-sm
              ${!noBlur && ' backdrop-blur-md focus:backdrop-blur-sm '} target:outline-primary rounded-2xl
            autofill:bg-white/10  valid:scale-[0.99] 
              outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
              border border-transparent invalid:text-pink-600
              placeholder:text-primary/50
              focus:-outline-offset-2 focus:outline-white/20 p-2 w-full text-sm my-2`} id='name'
              type='text' 
              placeholder="First name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}/>
          </div>

          <div  className='inline-block relative col-start-2 col-span-1 pl-3'>
            <motion.label variants={inputVariants} className='text-primary cursor-pointer whitespace-nowrap font-semibold inline-flex max-w-fit text-xs mt-2 ml-1' htmlFor='lastname'>LAST NAME</motion.label>
            <motion.input variants={inputVariants} required name='lastname' 
            className={`bg-white/10 font-normal w-full text-primary placeholder:text-primary  placeholder:text-xs min-[400px]:placeholder:text-sm
            p-2 my-2
            ${!noBlur && ' backdrop-blur-md focus:backdrop-blur-sm '} shadow-sm target:outline-primary rounded-2xl
            autofill:bg-white/10 
              valid:scale-[0.99] 
              outline-none -outline-offset-2 
              focus:outline-none focus:animate-outlinePulse
              border border-transparent  
              invalid:text-pink-600
              placeholder:text-primary/50
              focus:-outline-offset-2 
              focus:outline-white/20  text-sm block `}
              id='lastname' 
              type="text" 
              placeholder="Or family name"
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}/>
          </div>
        </div>

        <div  className='inline-block relative col-start-1 col-span-3 min-[400px]:col-span-2'>
          <motion.label variants={inputVariants} className='text-primary cursor-pointer whitespace-nowrap font-semibold text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='email'>EMAIL</motion.label>
          <motion.input variants={inputVariants} required name='email' className={`bg-white/10 font-normal  text-primary placeholder:text-primary placeholder:text-xs min-[400px]:placeholder:text-sm
          ${!noBlur && ' backdrop-blur-md focus:backdrop-blur-sm '} 
          shadow-sm target:outline-primary rounded-2xl
          autofill:bg-white/10  valid:scale-[0.99]
            outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
            border border-transparent invalid:text-pink-600
            placeholder:text-primary/50
            focus:-outline-offset-2 focus:outline-white/20 p-2 w-full text-sm block my-2`} id='email' 
            type='email' 
            placeholder="example@ywdesign.co" 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        
        {/* <div className={`flex flex-row `}> */}
        <div className='inline-flex flex-col w-full col-start-1 col-span-3 '>
          <motion.label variants={inputVariants} className='text-primary cursor-pointer whitespace-nowrap font-semibold text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='message'>MESSAGE</motion.label>
          <motion.textarea variants={inputVariants} required className={`bg-white/10 font-normal  text-primary placeholder:text-primary placeholder:text-xs min-[400px]:placeholder:text-sm
          ${!noBlur && ' backdrop-blur-md focus:backdrop-blur-sm '} shadow-sm target:outline-primary rounded-2xl
          autofill:bg-white/10 valid:scale-[0.99]
            outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
            border border-transparent   invalid:text-pink-600
            placeholder:text-primary/50
            focus:-outline-offset-2 focus:outline-white/20 p-2 w-full h-[20vh] text-sm block my-2`}  id='message' 
            type='text'
            name='message' 
            placeholder={
            `For example:\nHi Yolan,\nI would like a new logo and website for my shop.\nCould we meet up to talk about it?\nSee you!`} 
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}>
          </motion.textarea> 
        </div>
      
      {/* BUTTON */}
        <div className='flex col-start-1 row-start-4 min-[400px]:col-start-3 min-[400px]:row-start-2  justify-start items-end '>
          <motion.button type='submit' variants={inputVariants} whileHover={{scale:1.05}} className={`inline-flex shadow-sm my-2
          border border-solid rounded-full px-4 py-2  
          font-sans font-semibold text-xs textcenter whitespace-nowrap
          cursor-pointer   
          outline-none focus-visible:outline-primary border-transparent bg-primary text-white 
          active:bg-white active:text-primary hover:border-white`}
          onSubmit={handleSubmit}>

            <h5>SUBMIT</h5>
          </motion.button>
        </div>

        <div className='col-start-2 row-start-4 min-[400px]:col-start-1 min-[400px]:row-start-4 min-[500px]:col-start-3 min-[500px]:row-start-1 ' data-netlify-recaptcha="true"></div>

      </div>
          
              
      {/* </div> */}


    
    </motion.form>

  </section >
  )
}

export default Form