import React from 'react'

const Categories = () => {
    const categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Men's clothing" },
        { id: 3, name: "Women's Clothing" },
    ]
    return (
        <main className=' pt-16   '>
            <div className='text-2xl font-semibold font-poppins'>
                Top Categories
            </div>
            <div className='  flex gap-12 py-6 '>
                {
                    categories?.map((cat: any) => (
                        <ul key={cat.id} className='border-[#b2b2b2] cursor-pointer border-solid border-2 flex items-center  justify-center  h-40 w-40 rounded-full'>

                            <li  className='text-center  '>
                                {cat.name}
                            </li>
                        </ul>
                    ))
                }
            </div>

        </main>
    )
}

export default Categories