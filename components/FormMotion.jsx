import React, { useState } from 'react'
import Subtitle from './Subtitle'
import { motion, Variants } from 'framer-motion'
import {BsCheckLg} from 'react-icons/bs'
import { useAppContext } from './Context';


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

const Form = ({noBlur, setLightbox}) => {
  let [success,setSuccess] = useState(false)
  let [buttonHovering,setButtonHovering] = useState(false)
  const {locale} = useAppContext();

  let [name,setName] = useState('');
  let [lastName,setLastName] = useState('');
  let [email,setEmail] = useState('');
  let [message,setMessage] = useState('');
  let [honey,setHoney] = useState('');

  function encode(data) {
    console.log(Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&"))
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    const upload = fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        'name': name,
        'lastName':lastName,
        'email':email,
        'message':message,
        'bot-field':honey
      }),
    })
    .then(() => {setLightbox(true);setSuccess(true);setName('');setLastName('');setEmail('');setHoney('');setMessage('')})
    .catch((error) => alert(error));
    console.log(upload)
    console.log(upload.then)

  };
    
    
  return (
  <section id={'Form'} className='w-full'>
      <Subtitle name={`${locale === 'en' ? 'Form' : "Formulaire"}`} title={`${locale === 'en' ? 'Ask your questions here' : "Demandez un devis\nvia ce formulaire"}`} span={`${locale === 'en' ? 'questions' : "devis"}`} position={'left'} first={true} />

    <motion.form initial='hidden' whileInView='visible' variants={variant} viewport={{once:true}} 
          onSubmit={handleSubmit} name='ContactForm' method="POST" data-netlify="true" netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
      className='flex flex-col items-start'>

      <input type='hidden' name='form-name' value='ContactForm'/>
        <p className='hidden'> 
          <label>{`${locale==='en'?"Don't fill this out if you're human:":'Ne pas remplir si vous êtes humain.'}`}</label>
          <input name="bot-field" value={honey} onChange={(e)=>setHoney(e.target.value)} />
        </p>
      
      <div className='grid gap-6 grid-cols-3 w-full min-w-[30vw] auto-rows-min'>
        <div className='inline-flex col-start-1 col-span-3 min-[500px]:col-span-2'>
          <div  className='inline-block relative col-start-1 col-span-1 pr-3'>
            <motion.label variants={inputVariants} className='text-primary cursor-pointer font-semibold whitespace-nowrap text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='name'>{`${locale==='en'?'NAME':"PRENOM"}`}</motion.label>
            <motion.input variants={inputVariants} required name='name' className={`block bg-white/10 shadow-sm font-normal text-primary placeholder:text-primary placeholder:text-xs min-[400px]:placeholder:text-sm
              ${!noBlur && ' backdrop-blur-md focus:backdrop-blur-sm '} target:outline-primary rounded-2xl
            autofill:bg-white/10  valid:scale-[0.99] 
              outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
              border border-transparent invalid:text-pink-600
              placeholder:text-primary/50
              focus:-outline-offset-2 focus:outline-white/20 p-2 w-full text-sm my-2`} id='name'
              type='text' 
              placeholder={`${locale==='en'?"First name":"Ou surnom"}`}
              value={name}
              onChange={(e)=>{setName(e.target.value)}}/>
          </div>

          <div  className='inline-block relative col-start-2 col-span-1 pl-3'>
            <motion.label variants={inputVariants} className='text-primary cursor-pointer whitespace-nowrap font-semibold inline-flex max-w-fit text-xs mt-2 ml-1' htmlFor='lastname'>{`${locale==='en'?'LAST NAME':"NOM"}`}</motion.label>
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
              placeholder={`${locale==='en'?"Or family name":"Nom de famille"}`}
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}/>
          </div>
        </div>

        <div  className='inline-block relative col-start-1 col-span-3 min-[400px]:col-span-2'>
          <motion.label variants={inputVariants} className='text-primary cursor-pointer whitespace-nowrap font-semibold text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='email'>{`${locale==='en'?'EMAIL':"EMAIL"}`}</motion.label>
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
        
        <div className='inline-flex flex-col w-full col-start-1 col-span-3 '>
          <motion.label variants={inputVariants} className='text-primary cursor-pointer whitespace-nowrap font-semibold text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='message'>{`${locale==='en'?'MESSAGE':"MESSAGE"}`}</motion.label>
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
            `${locale==='en'?'An example below. To begin, just start typing. \nHi Yolan, \nI would like a new logo and website for my shop. \nCould we meet up to talk about it? \nSee you!':
            "Un exemple ci-dessous. Pour commencer, il suffit de taper. \nBonjour Yolan, \nje voudrais un nouveau logo et un nouveau site web pour ma boutique. \nPourrions-nous nous rencontrer pour en parler ? \nA bientôt !"}`} 
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}>
          </motion.textarea> 
        </div>
      
      {/* BUTTON */}
        <motion.div variants={inputVariants} className='flex relative w-full col-start-1 row-start-4 min-[400px]:col-start-3 min-[400px]:row-start-2 min-h-[50px] justify-start items-end '>
          
          <button key='submitted' onMouseEnter={()=>setButtonHovering(true)} onMouseLeave={()=>setButtonHovering(false)}
          className={`inline-flex shadow-sm my-2 absolute left-0 bottom-0
          border border-solid rounded-full px-4 py-2  
          font-sans font-semibold text-xs textcenter whitespace-nowrap
          cursor-pointer overflow-hidden w-fit min-[400px]:w-50% min-[430px]:w-fit h-fit duration-300
          ${success?'opacity-100 ':'opacity-0 -translate-x-[50px]'}
          outline-none focus-visible:outline-primary border-transparent bg-primary text-white 
          active:bg-white active:text-primary hover:border-white`} 
          onClick={()=>setSuccess(false)}>
            <span className={`duration-500 relative transition-all ${!buttonHovering?'opacity-0  -translate-x-[20px] ':'opacity-100  translate-x-[8px] ' }`}>{`${locale==='en'?'MORE?':"PLUS?"}`}</span>
            <BsCheckLg className={`duration-500 relative text-base ${buttonHovering?'opacity-0  translate-x-[20px] ':'opacity-100   -translate-x-[20px] ' }`}/>
          </button>
          
          <button key='submit' type='submit'  
          className={`inline-flex shadow-sm my-2 absolute left-0 bottom-0
          border border-solid rounded-full px-4 py-2  
          font-sans font-semibold text-xs textcenter whitespace-nowrap
          cursor-pointer w-fit min-[400px]:w-50% min-[430px]:w-fit h-fit duration-300
          ${success?'opacity-0 translate-y-[40px]':'opacity-100'}
          outline-none focus-visible:outline-primary border-transparent bg-primary text-white 
          active:bg-white active:text-primary hover:border-white`}
          >
          {`${locale==='en'?'SEND':"ENVOYER"}`}
          </button>
        </motion.div>

        {/* <div className='col-start-2 row-start-4 min-[400px]:col-start-1 min-[400px]:row-start-4 min-[500px]:col-start-3 min-[500px]:row-start-1 ' data-netlify-recaptcha="true"></div> */}

      </div>
          
              
      {/* </div> */}


    
    </motion.form>

  </section >
  )
}

export default Form