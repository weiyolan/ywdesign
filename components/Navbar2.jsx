import Image from 'next/image'
import Button from './Button2'
import Link from 'next/link'
import {useState} from 'react'

// let borderDebug = 'border border-red-500';

export default function Navbar() {
    return (
        <div className={'grid grid-cols-12 gap-4 w-screen'}>
            <div className='col-start-1 col-span-3 '>
            <Link className='' href={`/`}>
              <Image className='cursor-pointer m-1 '
                priority
                src='/images/logo.svg'
                width='40'
                height='40'
                alt="ywdesign svg logo"
                onClick={()=>selectButton('Home')}
              />
            </Link> 
            </div>
            <div className='flex flex-row ani justify-between justify-items-center col-start-4 col-span-6 self-center mx-auto'>
              <Button className='' to="" title="Home"/>
              <Button className='' to="services" title="Services"/>
              <Button className='' to="aboutme" title="About Me"/>
              <Button className='' to="contact" title="Contact"/>
            </div>
            <div className='flex flex-row col-start-10 col-span-3 justify-self-end self-center border-red-600'>
              <Button className='' to="" title="Have a question?"/>
              <Button className='' to="" title="EN"/>
              <Button className='' to="quote" title="Ask a quote" darkMode={true}/>
            </div>
        </div>
    )
}