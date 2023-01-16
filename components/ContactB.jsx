import WhatsApp from '../public/images/icon_whatsapp.svg'
import Mail from '../public/images/icon_mail.svg'
import Phone from '../public/images/icon_phone.svg'
import Link from 'next/link';

let whatsappLink = 'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A';
let mailLink = 'mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A';

export default function ContactB() {
  return (

    <div className='inline-flex'>
      <Link href='tel:+32471124525' alt='link to call phone number'>
        <Button>
          <Phone className='w-4 sm:w-5' fill='white' alt='phone icon'/>
        </Button>
      </Link>

      <Link className='cursor-alias' alt='Link to send message on WhatsApp' target='_blank' rel="noopener noreferrer" href={whatsappLink}>
          <Button ext={true} >
            <WhatsApp className='w-4 sm:w-5 cursor-alias' fill='white' alt='whatsapp icon'/>
          </Button>
      </Link>

      <Link className='cursor-alias' alt='Link to send an email' target='_blank' rel="noopener noreferrer" href={mailLink}>
          <Button ext={true}>
          <Mail className='w-4 sm:w-5 cursor-alias' fill='white' alt='mail icon'/>
          </Button>
      </Link>

    </div>
  )
}

function Button ({children,ext}) {
  return (
      <div className={`rounded-full bg-white/10 backdrop-blur-md p-2 min-[420px]:p-3 sm:p-4 mr-2 min-[420px]:mr-3 outline-none -outline-offset-2 ${ext?'cursor-alias':'cursor-pointer'}
        duration-300 shadow-xl hover:backdrop-blur-sm hover:outline-white/20 hover:animate-outlinePulse hover:shadow-sm hover:translate-y-1 hover:scale-[0.98]`}>
          {children}
      </div>
  )
}
