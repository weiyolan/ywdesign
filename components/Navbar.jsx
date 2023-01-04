import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import YW from '../public/images/logo_yw_b.svg'

// let borderDebug = 'border border-red-500';

export default function Navbar({from}) {
    let [selectedB,setSelectedB] = useState(from);

    function selectButton (selection) {
        setSelectedB(selection)
    }

    useEffect(()=>{
      setSelectedB(from)
    },[from])

    return (
        <div className={'grid grid-cols-12 top-0 z-10  backdrop-blur-sm gap-4 w-full'}>
            <div className='col-start-1 col-span-3 '>
            
            <Link  href={`/`} onClick={()=>selectButton('Home')}>
              {/* <YW
                width='40'
                className='m-2'
                alt="ywdesign svg-logo"
                onClick={()=>selectButton('Home')}/> */}
              <Image className='m-2' src="/images/logo_yw_b.svg" width={40} height={40} alt="ywdesign logo" />
              </Link> 
            </div>
            <div className='flex flex-row justify-between justify-items-center col-start-4 col-span-6 self-center mx-auto'>
              <Button className='' to="" title="Home" text="Home" mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="services" title="Services" text="Services" mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="aboutme" title="About Me" text="About Me" mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="contact" title="Contact"  text="Contact" mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>
            </div>
            <div className='flex flex-row col-start-10 col-span-3 justify-self-end self-center'>
              {/* <Button className=''  to="contact/#Form" title="Contact" text="Have a question?" handleClick={selectButton} /> */}
              {/* <Button className='' to="" title="EN"/> */}
              <Button className='' to="contact/#Form" title="Contact" text="Ask a quote" handleClick={selectButton} mode={'dark'}/>
            </div>
        </div>
    )
}