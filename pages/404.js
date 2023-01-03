export default function Custom404({error}) {

    return  (
      <section className="w-full h-screen flex flex-col justify-center items-center text-center">
        <div className='flex flex-col rounded-3xl justify-center outline-none outline-red-500 outline-4 bg-purple-500/20 backdrop-blur-sm shadow-2xl animate-outlinePulse mx-auto'>
          <h1 className='font-sans text-white font-extralight whitespace-nowrap text-4xl my-6 mx-20'>We encountered an error.</h1>
          <p className='font-sans block text-white font-thin text-lg '>Please go back and refresh the page.</p>
          <p className='font-sans block text-white font-thin text-lg mt-10'>The following is its message:</p>
          <p className='font-sans block text-white font-thin text-lg mb-10'>{error?`${error}`:'404 - Page Not Found'}</p>
        </div>

      </section>
    
    )

  }