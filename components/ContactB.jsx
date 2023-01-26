import WhatsApp from '../public/images/icon_whatsapp.svg'
import Mail from '../public/images/icon_mail.svg'
import Phone from '../public/images/icon_phone.svg'
import Link from 'next/link';
import { useAppContext } from './Context';

let whatsappLink = 'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A';
let mailLink = 'mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A';

export default function ContactB() {
  const {locale} = useAppContext()

  return (

    <div className='inline-flex '>
      <Link className='focus:outline-none group' href='tel:+33638565302' title={`${locale==='en'?'Call phone number':"Appeler le numéro téléphone"}`}>
        <Button>
          <Phone className='w-5 sm:w-5' fill='white' alt={`${locale==='en'?'Call phone number':"Appeler le numéro téléphone"}`}/>
        </Button>
      </Link>

      <Link className='focus:outline-none group' title={`${locale==='en'?'Send WhatsApp Message':"Envoyer un message WhatsApp"}`} target='_blank' rel="noopener noreferrer" href={whatsappLink}>
          <Button ext={true} >
            <WhatsApp className='w-5 sm:w-5 ' fill='white' alt={`${locale==='en'?'Send WhatsApp Message':"Envoyer un message WhatsApp"}`}/>
          </Button>
      </Link>

      <Link className='focus:outline-none group' title={`${locale==='en'?'Send an Email':"Envoyer un courriel"}`} target='_blank' rel="noopener noreferrer" href={mailLink}>
          <Button ext={true}>
          <Mail className='w-5 sm:w-5 ' fill='white' alt={`${locale==='en'?'Send an Email':"Envoyer un courriel"}`}/>
          </Button>
      </Link>

    </div>
  )
}

function Button ({children,ext}) {
  return (
      <div className={`rounded-full bg-white/10 backdrop-blur-sm p-3 min-[420px]:p-3 sm:p-3 mr-3 min-[420px]:mr-3 border-2 border-transparent focus:outline-none cursor-pointer
        duration-200 shadow-xl hover:border-white/20 hover:animate-borderPulse group-focus:border-white/20 group-focus:scale-[1.05] group-hover:scale-[1.05] hover:scale-[1.05] active:shadow-sm active:translate-y-1 group-active:scale-[0.95]`}>
          {children}
      </div>
  )
}
