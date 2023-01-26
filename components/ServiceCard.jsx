import useWindowSize from "./useWindowSize"

export default function ServiceCard ({icon, visible, position, noBlur, first, breakPointSmall}) {
  let {width} = useWindowSize()
//       animate-outlinePulse outline-2 outline outline-white/30 -outline-offset-2 

  return (
    <div className={` 
      absolute 
      flex-col py-4 px-5 sm:p-6 select-none lg:p-8 rounded-[1.75rem] min-[400px]:rounded-[2rem] sm:rounded-[40px]
      filter 
      duration-500 overflow-hidden
      cursor-default 
      
      ${width<breakPointSmall?
        ` top-0 mt-10 w-full min-[420px]:w-[75vw] min-[420px]:translate-x-0 ${position==='right'?'translate-x-1/2 right-1/2 min-[420px]:right-0':'-translate-x-1/2 left-1/2 min-[420px]:left-0 '}
        `:
        `left-1/2 -translate-x-1/2 top-1/2 sm:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[400px]
        ${first?'-translate-y-1/3':'-translate-y-[10%]'}  
        ${position==='left'?' xl:-translate-x-1/3  sm:-translate-x-[45%] ':' sm:-translate-x-[55%] xl:-translate-x-2/3 '}
        `
      } 

      ${ visible? ` bg-white/5 text-white ${noBlur?'':'backdrop-blur-md'} shadow-2xl z-10 blur-none `:
       ` blur-sm invisible bg-transparent text-transparent filter ${noBlur?'':'backdrop-blur-sm'} shadow-transparent shadow-sm z-0`}`}
      >
      {/* ${position==='left'?'min-[420px]:justify-start':'min-[420px]:justify-end'}  */}
      <h3 className={`duration-500 flex md:whitespace-nowrap 
        text-xl min-[350px]:text-2xl lg:text-3xl  justify-center sm:justify-center  ${position==='left'?'min-[420px]:justify-start':'min-[420px]:justify-end' }
        ${visible? 'font-light ' :`-translate-y-24 font-thin ${position==='left'?'-rotate-12':'rotate-12'}`}` }>
        {icon.title}
      </h3>

      {/* MOVEMENT OF LINE UNDER TITLE */}
      {/* ${position==='left'?'translate-x-[50vw] -translate-y-[20vh] -rotate-45':'-translate-x-[50vw] -translate-y-[20vh] rotate-45'} */}
      <div className={`inline-flex border-b duration-500 mb-2 
        ${(visible? 'border-b-white w-full ' : `w-0  border-b-transparent `)}`}>
      </div>
      
      <ul className={`text-justify md:select-text text-sm filter-none font-extralight duration-500 ${visible?'':'font-thin'}` 
      }>
        {icon.list.map((item)=>{return <li className='' key={item}>{item}</li>})}
      </ul>

    </div>
  )
}