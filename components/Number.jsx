import {react} from 'react'
import Link from 'next/link';
import { useAppContext } from './Context'

export default function Number ({n, title, text, link, unit}) {
  let {width,breakPointSmall} = useAppContext();


  return(
    <div className='flex w-full sm:w-fit min-[420px]:px-8 sm:px-0 items-center flex-row sm:flex-col mx-auto md:whitespace-pre-wrap text-left sm:text-center cursor-default'>
      
      <MyLink link={link}>
        <div className='flex font-sans items-end text-primary w-[30vw] min-[420px]:w-[25vw] sm:w-full justify-start mb-2 sm:mb-4 font-light sm:font-extralight text-6xl sm:text-8xl md:text-9xl'>
        {n}
        {width>breakPointSmall && <span className='text-2xl sm:text-3xl font-light'>{unit}</span>}
        </div>
      </MyLink>

      <div className='flex font-sans text-primary font-light lg:text-base text-sm '>
        <p>
        {width<breakPointSmall?`${unit}, `:''} {title} <Link className='cursor-alias' href={link} target='_blank' rel="noopener noreferrer"><span>source</span></Link>
        </p>
      </div>

    </div>

  )
}

function MyLink ({link,children}) {
  if (link.length>0) {
    return (
      <Link className='cursor-alias' href={link} target='_blank' rel="noopener noreferrer" >{children}</Link>
    )
  } else {
    return (<div>{children}</div>)
  }
}

Number.defaultProps = {
  link:''
}