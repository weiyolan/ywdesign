export default function ServiceCard ({icon, visible, position, noBlur}) {

//       animate-outlinePulse outline-2 outline outline-white/30 -outline-offset-2 


  return (
    <div className={`w-[80%] h-[380px] translate-y-7 absolute p-6 mt-36 rounded-[40px] 
      ${position==='left'?' right-0 bottom-0':' left-0 bottom-0'}
      font-thin text-center filter
      duration-500 overflow-hidden
      cursor-default 
      ${ visible? ` bg-white/5 text-white ${noBlur?'':'backdrop-blur-md'} shadow-2xl z-10 blur-none `:
       ` blur-sm invisible bg-transparent text-transparent filter ${noBlur?'':'backdrop-blur-sm'} shadow-transparent shadow-sm z-0`}`}
      >
      
      <h3 className={`duration-500 my-4 mx-8 text-4xl`+
      (visible? ' font-light  ' :
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