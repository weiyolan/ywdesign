import WhatsApp from '../public/images/icon_whatsapp.svg'
import Mail from '../public/images/icon_mail.svg'
import Phone from '../public/images/icon_phone.svg'

export default function ContactB() {
  return (


    
    <div className='inline-flex justify-center items-center flex-row'>
      
      <div className='rounded-full bg-white/10 backdrop-blur-md p-4 mx-2 outline-none -outline-offset-2 cursor-pointer
      duration-300 shadow-xl hover:backdrop-blur-sm hover:outline-white/20 hover:animate-outlinePulse hover:shadow-sm hover:translate-y-1 hover:scale-[0.98] '>
        <Phone width='20' fill='white' alt='phone icon'/>
      </div>

      <div className=' rounded-full bg-white/10 backdrop-blurmdm p-4 mx-2 outline-none -outline-offset-2 cursor-pointer
      duration-300 shadow-xl hover:backdrop-blur-sm hover:outline-white/20 hover:animate-outlinePulse hover:shadow-sm hover:translate-y-1 hover:scale-[0.98] '>
        <WhatsApp width='20' fill='white' alt='whatsapp icon'/>

      </div>

      <div className='rounded-full bg-white/10 backdrop-blur-md p-4 mx-2 outline-none -outline-offset-2 cursor-pointer
      duration-300 shadow-xl hover:backdrop-blur-sm hover:outline-white/20 hover:animate-outlinePulse hover:shadow-sm hover:translate-y-1 hover:scale-[0.98] '>
        <Mail width='20' fill='white' alt='mail icon'/>

      </div>

    </div>
  )
}

