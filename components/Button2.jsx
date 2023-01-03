import Link from "next/link"

let basicStyle = `flex border border-solid rounded-full px-4 py-2 mx-4 
  font-sans font-semibold text-xs textcenter self-center whitespace-nowrap
  duration-500 cursor-pointer 

  outline-none focus-visible:outline-primary

  border-transparent text-primary/70 hover:border-primary active:bg-primary/20

  target:border-primary target:text-primary active:bg-primary/20`
  
let darkStyle = ` border-transparent bg-primary text-white 
  active:bg-white active:text-primary hover:border-white`


export default function Button({to, title, darkMode}) {
    // let content = title;

  if (darkMode) {
    return(
      <Link className={basicStyle + darkStyle}
      id={`/${to}`}  
      href={`/${to}`}
        >

          <h5>{title.toUpperCase()}</h5>

      </Link>
    )} else {
      return (
        <Link className={basicStyle}
          id={`/${to}`}  
          href={`/${to}`}
           >
            <h5>{title.toUpperCase()}</h5>

        </Link>
    )}
}
