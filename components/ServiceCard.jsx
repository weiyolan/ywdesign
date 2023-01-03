export default function ServiceCard ({icon, visible, position, noBlur, first}) {

//       animate-outlinePulse outline-2 outline outline-white/30 -outline-offset-2 


  return (
    <div className={`absolute flex flex-col  p-8  rounded-[40px]  items-center  
      text-center filter
      duration-500 overflow-hidden font-extralight
      cursor-default top-1/2 ${first?'-translate-y-1/3':'-translate-y-1/4'} left-1/2 
      ${position==='left'?' -translate-x-1/3  ':' -translate-x-2/3 '}

      ${ visible? ` bg-white/5 text-white ${noBlur?'':'backdrop-blur-md'} shadow-2xl z-10 blur-none `:
       ` blur-sm invisible bg-transparent text-transparent filter ${noBlur?'':'backdrop-blur-sm'} shadow-transparent shadow-sm z-0`}`}
      >
      
      <h3 className={`duration-500 whitespace-nowrap mb-4 mx-8 text-4xl`+
      (visible? ' font-thin  ' :
      ' -translate-y-24 font-thin -rotate-1') }>
        {icon.title}
      </h3>
      
      <ul className={` duration-500` + 
      (visible? '  ' :
      '   ')}>
        {icon.list.map((item)=>{return <li className='my-2' key={item}>{item}</li>})}
      </ul>

    </div>
  )
}