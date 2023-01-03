export default function Vision ({title,text, position}) {


  return (
    <div className={`flex flex-col max-w-md`}>
      <h1 className={`text-5xl font-thin text-white mb-6`} >{title}</h1>
      <p className={`text-base font-light text-primary text-center`} >{text}</p>

    </div>
    )
}