import React from 'react'

const TwoColumns = ({children,left}) => {

  return (
    <section className='cursor-default flex flex-col w-full'>

      <div className={`flex-1 relative`}>
        {left?children[0]:children[1]}
      </div>
    
      <div className='flex-1 relative'>
        {left?children[1]:children[0]}
      </div>

    </section>  
  )
}

export default TwoColumns