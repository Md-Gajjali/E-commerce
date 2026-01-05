import React from 'react'

const SecHeading = ({title,heading,className}) => {
  return (
    <div className={` ${className}`}>
        <div className={`flex items-center`}>
            <div className='w-5 h-10 bg-primary rounded-sm '/>
            <h5 className='font-pop font-semibold text-primary  pl-4'>{title}</h5>
        </div>
            <h2 className='text-4xl font-semibold font-Inter pt-6'>{heading}</h2>
    </div>
  )
}

export default SecHeading
