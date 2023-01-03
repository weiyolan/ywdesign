import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const ArrowLink = ({text,to}) => {

  

  return (
    <Link className={`text-primary font-semibold text-sm w-fit block my-4`} href={to}>
      <div className='inline-flex items-center '>
        {text}<span className='inline-block'><BsArrowRightShort className='fill-primary text-xl'/></span>
      </div>
    </Link>
  )
}

export default ArrowLink