import React from 'react'

const TitleOwner = ({title,subtitle}) => {
  return (
   <>
   <div className=''>
    <h1 className='font-medium text-3xl'>{title}</h1>
    <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subtitle}</p>
   </div>
   </>
  )
}

export default TitleOwner