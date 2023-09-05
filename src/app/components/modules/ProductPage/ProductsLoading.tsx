import React from 'react'

const ProductsLoading = () => {
  return (
    <main className='dynamic-x-padding dynamic-y-padding '>
      <ul className=' flex gap-8 flex-wrap animate-pulse '>

        {
          [...Array(8)]?.map((datas: any, index: any) => (
            <div key={index} className="card bg-slate-100 h-72 w-64 rounded-lg overflow-hidden  " >
              <section className="w-[200px] h-[180px] mx-auto flex items-center justify-center">
                <span

                  className=" rounded-t-lg rounded-b-md bg-blend-multiply w-full bg-slate-300 h-[160px] object-contain"
                />
              </section>
              <section className="px-6 py-4">
                <div className='w-36 h-2 bg-slate-300'></div>
                <div className='w-36 h-2 bg-slate-300 '></div>
                <div className="flex justify-between  py-4">
                  <span className='w-24 h-2 bg-slate-300'></span>
                  <span className='w-24 h-2 bg-slate-300'></span>
                </div>
              </section>
            </div>
          ))
        }
      </ul>
    </main>
  )
}

export default ProductsLoading