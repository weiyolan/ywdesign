import React from 'react'
import Button from './Button'
import Subtitle from './SubTitle'

const Form = () => {
  return (
  <section className='my-24 w-full'>
    <Subtitle name={'Form'} title={`And here's a\nbeautiful form`} span={'form'} position={'right'} first={false}/>

    <form  className='flex flex-col items-start'>
      
      <div className='grid gap-6 grid-cols-3 w-full min-w-[30vw] auto-rows-min'>
        <div className='inline-block relative col-start-1 col-span-1 '>
          <label className='text-blue font-medium text-sm block my-2 ml-1' htmlFor='name'>NAME</label>
          <input required name='name' className='bg-white/10 font-normal text-primary placeholder:text-primary
           duration-500  backdrop-blur-md focus:backdrop-blur-sm shadow-xl focus:shadow-sm target:outline-primary rounded-2xl
           autofill:bg-white/10 valid:shadow-sm valid:translate-y-[1px] focus:translate-y-[1px] 
            outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
            border border-transparent   invalid:text-pink-600
            placeholder:text-primary/50
            focus:-outline-offset-2 focus:outline-white/20 p-2 w-full text-sm block my-2' id='name'
            type='text' 
            placeholder="First name"/>
        </div>

        <div className='inline-block relative col-start-2 col-span-1 '>
          <label className='text-blue font-medium text-sm block my-2 ml-1' htmlFor='lastname'>LAST NAME</label>
          <input required name='lastname' 
          className='bg-white/10 font-normal w-full text-primary placeholder:text-primary
           duration-500 p-2 my-2
           backdrop-blur-md focus:backdrop-blur-sm shadow-xl valid:shadow-sm focus:shadow-sm target:outline-primary rounded-2xl
           autofill:bg-white/10 
            valid:translate-y-[1px] focus:translate-y-[1px] 
            outline-none -outline-offset-2 
            focus:outline-none focus:animate-outlinePulse
            border border-transparent  
            invalid:text-pink-600
            placeholder:text-primary/50
            focus:-outline-offset-2 
            focus:outline-white/20  text-sm block ' 
            id='lastname' 
            type="text" 
            placeholder="Also known as family name"/>
        </div>

        <div className='inline-block relative col-start-1 col-span-2'>
          <label className='text-blue font-medium text-sm block my-2 ml-1' htmlFor='email'>EMAIL</label>
          <input required name='email' className='bg-white/10 font-normal  text-primary placeholder:text-primary
          duration-300 backdrop-blur-md focus:backdrop-blur-sm 
          shadow-xl valid:shadow-sm focus:shadow-sm target:outline-primary rounded-2xl
          autofill:bg-white/10  valid:translate-y-[1px] focus:translate-y-[1px]
            outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
            border border-transparent   invalid:text-pink-600
            placeholder:text-primary/50
            focus:-outline-offset-2 focus:outline-white/20 p-2 w-full text-sm block my-2' id='email' 
            type='email' 
            placeholder="example@ywdesign.co" />
        </div>
        {/* BUTTON */}
        <div className='flex col-start-3 row-start-2 justify-start items-end'>
          <div className={`inline-flex shadow-xl my-2
          border border-solid rounded-full px-4 py-2 mx-4  
          font-sans font-semibold text-xs textcenter whitespace-nowrap
          duration-300 cursor-pointer   
          outline-none focus-visible:outline-primary border-transparent bg-primary text-white 
          active:bg-white active:text-primary hover:border-white`}
          onClick={()=>handleClick(title)}>

            <h5>SUBMIT</h5>
          </div>
        </div>
      
      {/* <div className={`flex flex-row `}> */}
        <div className='inline-flex flex-col w-full col-start-1 col-span-3 '>
          <label className='text-blue font-medium text-sm block my-2 ml-1' htmlFor='message'>MESSAGE</label>
          <textarea required className='bg-white/10 font-normal  text-primary placeholder:text-primary
          duration-500 backdrop-blur-md focus:backdrop-blur-sm shadow-xl focus:shadow-sm target:outline-primary rounded-2xl
          autofill:bg-white/10 valid:shadow-sm valid:translate-y-[1px] focus:translate-y-[1px]
            outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
            border border-transparent   invalid:text-pink-600
            placeholder:text-primary/50
            focus:-outline-offset-2 focus:outline-white/20 p-2 w-full h-[20vh] text-sm block my-2'  id='message' 
            type='text'
            name='message' 
            placeholder={
            `For example:\nHi Yolan,\nI would like a new logo and website for my shop.\nCould we meet up to talk about it?\nSee you!`}>
          </textarea> 
        </div>
      </div>
          
      {/* </div> */}


    
    </form>

  </section >
  )
}

export default Form