export default function Number ({n, title, text}) {
  return(
    <div className='flex flex-col mx-auto text-center'>
      <div className='font-sans text-primary font-light text-9xl'>
        {n}
      </div>
      <div className='font-sans text-primary font-light text-sm'>
        {title}
      </div>

    </div>


  )
}