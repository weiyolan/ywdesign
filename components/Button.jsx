import Link from "next/link"

let basicStyle = `flex border border-solid rounded-full px-4 py-2 mx-4 
  font-sans font-semibold text-xs textcenter self-center whitespace-nowrap
  duration-500 cursor-pointer   
  outline-none focus-visible:outline-primary`
let activeStyle = ` border-primary text-primary active:bg-white/20`
let inactiveStyle = ` border-transparent text-primary/70 hover:border-primary active:bg-white/20` 
let darkStyle = ` border-transparent bg-primary text-white 
  active:bg-white active:text-primary hover:border-white`

  
export default function Button({to, title, text, selected, handleClick, darkMode, mode}) {
    // let content = title;

  switch (mode) {
    case 'unselected' :
      return (
        <Link className={basicStyle + inactiveStyle}
          href={`/${to}`}
          onClick={()=>handleClick(title)}>

            <h5>{text.toUpperCase()}</h5>
        </Link>)

    case 'selected' :
      return (
        <Link className={basicStyle + activeStyle}
           href={`/${to}`}
           onClick={()=>handleClick(title)}>

            <h5>{text.toUpperCase()}</h5>

        </Link>)

    case 'dark' :
      return(
      // <Link className={basicStyle + darkStyle + ''}
        <Link className={`flex border-2 border-solid rounded-full px-4 py-2 mx-4 
        font-sans font-semibold text-xs textcenter self-center whitespace-nowrap
        duration-300 cursor-pointer   
        outline-none border-transparent 
        bg-primary text-white focus-visible:outline-primary active:bg-white active:text-primary hover:border-white`}
        href={`/${to}`}
        onClick={()=>handleClick(title)}>

          <h5>{text.toUpperCase()}</h5>

      </Link>)

    case 'white' :
      return(
        <Link className={`flex border-2 outline-none border-solid border-transparent rounded-full self-center duration-300 cursor-pointer
        px-4 py-2  
        font-sans font-semibold text-xs textcenter whitespace-nowrap
        bg-white text-primary focus-visible:outline-primary active:bg-primary active:text-white hover:border-primary`}
          href={`/${to}`}
          onClick={()=>handleClick(title)}>
  
            <h5>{text.toUpperCase()}</h5>
  
        </Link>)

    case 'side' :
      return(
        <Link className={basicStyle + darkStyle + ''}
          href={`/${to}`}
          onClick={()=>handleClick(title)}>
  
            <h5>{text.toUpperCase()}</h5>
  
        </Link>)
    default: 
      return (
        <Link className={basicStyle + inactiveStyle}
          href={`/${to}`}
          onClick={()=>handleClick(title)}>

            <h5>{text.toUpperCase()}</h5>
        </Link>)
  }
    
}
