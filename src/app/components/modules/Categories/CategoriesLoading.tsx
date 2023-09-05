import React from 'react'

const CategoriesLoading = () => {
  return (
    <div className='  flex gap-12 py-16  animate-pulse '>
        {
            [...Array(5)]?.map((data:any,index:any)=>(
                <ul key={index} className='border-[#b2b2b2] cursor-pointer border-solid border-2 flex items-center bg-white shadow-lg  justify-center  h-16 w-44 rounded-full'>
                            <li  className='text-center text-base font-poppins font-semibold bg-gray-400 h-2 w-16'>
                                
                            </li>
                        </ul>
            ))
        }
    </div>
  )
}

export default CategoriesLoading