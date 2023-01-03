import React from 'react'

const TwoColumns = ({children,left}) => {

  return (
    <section className='cursor-default grid grid-cols-2 w-full'>

      <div className={`col-start-1 w-full relative`}>
        {left?children[0]:children[1]}
      </div>
    
      <div className='col-start-2 w-full relative'>
        {left?children[1]:children[0]}
      </div>

    </section>  
  )
}

export default TwoColumns