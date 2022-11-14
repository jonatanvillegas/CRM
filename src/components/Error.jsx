import React from 'react'

const Error = ({children}) => {
  return (
    <div className='text-white uppercase p-3 bg-red-600 text-center my-4 font-bold'>
      {children}
    </div>
  )
}

export default Error
