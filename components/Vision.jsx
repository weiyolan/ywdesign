export default function Vision ({title,text, position}) {


  return (
    <div className={`flex flex-col`}>
      <h1 className={`text-4xl font-light text-white mb-6`} >{title}</h1>
      <p className={`text-base font-light text-primary text-justify`} >{text}</p>

    </div>
    )
}