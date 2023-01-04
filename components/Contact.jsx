import ContactB from '../components/ContactB'
import Button from './Button'

export default function Conctact ({first}) {
  return (
    <section className={`flex flex-row justify-between ${first?'mt-24':'mt-48'} items-end mb-20`}>

      <div className={'text-left'}>
        <h3 className='text-accent font-semibold text-sm'>
          CONTACT
        </h3>

        <h2 className='text-primary font-normal text-5xl mt-10 whitespace-pre-wrap'>
          
          {'I can '}

          <span className='text-white font-[550]'>
          {`help `}
          </span> 

          {"\nJust get in "} 

          <span className='text-white font-[550]'>
          touch
          </span> 
        </h2>
      </div>


      <ContactB />

      <div className='mb-2'>
        <Button  to="quote" title="Contact" text="Ask a quote" mode={'white'}/>
      </div>
    </section>
  )
}


