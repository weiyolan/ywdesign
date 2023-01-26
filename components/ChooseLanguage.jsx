import Link from 'next/link'
import { useRouter } from 'next/router'
import{TfiWorld} from 'react-icons/tfi'
import { useAppContext } from './Context'

export default function ChooseLanguage({mobile, toggleOpen}) {
  const router = useRouter()
  const { locales, locale : activeLocal } = router
  // const {width} = useAppContext()

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocal
  )

  return (
    <div 
    onClick={()=>toggleOpen()}
    className={`text-primary ${mobile?'text-lg':'text-xs'} textcenter font-sans duration-500 font-semibold self-center flex border border-transparent rounded-full focus-within:outline-primary hover:border-primary active:bg-white/20 cursor-pointer select-none px-4 py-2 mx-0 lg:mx-2 xl:mx-4`}>
      {/* <p>Locale switcher:</p> */}

        

        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            
              <Link 
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                key={locale}
                className='focus:outline-none'
              >
                <div className='inline-flex align-middle items-center'>
                  <TfiWorld className='mr-1'/>
                  {locale.toUpperCase()}
                </div>

              </Link>
          )
        })}
    </div>
  )
}
