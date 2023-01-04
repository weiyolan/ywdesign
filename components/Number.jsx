export default function Number ({n, title, text, link, unit}) {
  return(
    <div className='flex flex-col mt-12 mx-auto whitespace-pre-wrap text-center cursor-default'>
      
      <MyLink url={link}><div className='font-sans text-primary font-extralight text-9xl'>
        {n}<span className='text-3xl font-light'>{unit}</span>
      </div></MyLink>
      <div className='font-sans text-primary font-light text-sm'>
        {title}
      </div>
      

    </div>

  )
}

function MyLink ({url,children}) {
  if (url.length>0) {
    return (
      <a className='cursor-alias' href={url}>{children}</a>
    )
  } else {
    return (<div>{children}</div>)
  }
}

Number.defaultProps = {
  link:''
}