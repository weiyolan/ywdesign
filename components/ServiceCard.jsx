export default function ServiceCard ({icon, visible, position, noBlur, first}) {

//       animate-outlinePulse outline-2 outline outline-white/30 -outline-offset-2 


  return (
    <div className={`absolute flex min-w-[25vw] flex-col p-8 rounded-[40px]
      filter
      duration-500 overflow-hidden
      cursor-default top-1/2 ${first?'-translate-y-1/3':'-translate-y-[20%]'} left-1/2 
      ${position==='left'?' -translate-x-1/3  ':' -translate-x-2/3 '}

      ${ visible? ` bg-white/5 text-white ${noBlur?'':'backdrop-blur-md'} shadow-2xl z-10 blur-none `:
       ` blur-sm invisible bg-transparent text-transparent filter ${noBlur?'':'backdrop-blur-sm'} shadow-transparent shadow-sm z-0`}`}
      >
      
      <h3 className={`duration-500 inline-flex mx-auto whitespace-nowrap pb-4 text-3xl`+
      (visible? ' font-light  ' :
      ' -translate-y-24 font-thin -rotate-1') }>
        {icon.title}
      </h3>

      <div className={`flex border-b duration-500  mb-2 
      ${(visible? 'border-b-white' : ` border-b-transparent ${position==='left'?'translate-x-[50vw] -translate-y-[20vh] -rotate-45':'-translate-x-[50vw] -translate-y-[20vh] rotate-45'}`)}`}></div>
      
      <ul className={`text-justify text-sm font-extralight duration-500` + 
      (visible? '  ' :
      '   ')}>
        {icon.list.map((item)=>{return <li className='my-2' key={item}>{item}</li>})}
      </ul>

    </div>
  )
}