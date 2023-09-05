import React from 'react'

const Loading = () => {
    return (
        //     <div classNameName="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        //   <div className="animate-pulse flex space-x-4">
        //     <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        //     <div className="flex-1 space-y-6 py-1">
        //       <div className="h-2 bg-slate-700 rounded"></div>
        //       <div className="space-y-3">
        //         <div className="grid grid-cols-3 gap-4">
        //           <div className="h-2 bg-slate-700 rounded col-span-2"></div>
        //           <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        //         </div>
        //         <div className="h-2 bg-slate-700 rounded"></div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <section className='flex gap-8 flex-wrap animate-pulse'>
            {
                [...Array(4)]?.map((datas: any,index:any) => (
                    <article key={index} className='card w-[16rem] h-[16rem] pt-4 cursor-pointer ' >
                        <div className='bg-gray-400 p-4  rounded-t-lg '>
                            <div className='relative h-8 w-8 rounded-full bg-white top-2 left-2 flex items-center justify-center'>
                                <span className='flex text-center h-4 items-center'>

                                </span>
                            </div>

                            <div className='w-full  h-full'>

                            </div>
                        </div>
                        <div className='p-2 bg-gray-400'>
                            <div className='text-base h-20 w-12 font-semibold font-montserrat'>

                            </div>
                            <div className='flex items-center gap-2 '>
                                <div className='flex bg-gray-600 w-12 h-2 items-center'>

                                </div>
                                <div className='text-base font-normal bg-gray-600 w-12 h-2 font-montserrat'>

                                </div>

                            </div>
                            <div className=' flex justify-between items-center h-8 bg-gray-400'>
                                <div className='font-montserrat text-base h-2 bg-gray-700 w-24'>


                                </div>
                                <div className='cursor-pointer bg-gray-700 h-2 w-32'>

                                </div>

                            </div>
                        </div>
                    </article>
                    // <div className="border border-blue-300 check shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    //     <div className="animate-pulse flex space-x-4">
                    //         <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    //         <div className="flex-1 space-y-6 py-1">
                    //             <div className="h-2 bg-slate-700 rounded"></div>
                    //             <div className="space-y-3">
                    //                 <div className="grid grid-cols-3 gap-4">
                    //                     <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    //                     <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    //                 </div>
                    //                 <div className="h-2 bg-slate-700 rounded"></div>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                ))
            }
        </section>
    )
}

export default Loading