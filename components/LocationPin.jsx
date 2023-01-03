import React from 'react'
import {MdLocationOn} from 'react-icons/md'

export default function LocationPin ({text}) {
  return (
    <div>
        <MdLocationOn className='text-primary'/>
        <p className='text-xs text-primary font-normal' >{text}</p>
    </div>
  )
}
