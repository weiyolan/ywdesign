export default function Vision ({title,text, position}) {


  return (
    <div className={`flex flex-col max-w-md`}>
      <h1 className={`min-[420px]:text-center text-2xl min-[420px]:text-3xl sm:text-5xl font-thin text-white mb-6`} >{title}</h1>
      <p className={`text-base font-light lg:text-base text-primary text-left min-[420px]:text-center`} >{text}</p>

    </div>
    )
}