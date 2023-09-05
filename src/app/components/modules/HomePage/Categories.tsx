import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import CategoriesLoading from '../Categories/CategoriesLoading'
import { APIGetCategories } from '@/app/apis/categories/route'

const Categories = () => {
 


    const getCategories = async () => {
        try {
            const res = await APIGetCategories();
            // return res;
            console.log(res);
            return res;
        } catch (error) {
            console.log(error)
        }
    }


    const { data, isLoading } = useQuery({
        queryKey: ["Categories"],
        queryFn: () => getCategories()
        
    })
    console.log(data);
    if (isLoading) return <CategoriesLoading />


    return (
        <main className=' pt-16   '>
            <div className='text-2xl font-semibold font-poppins'>
                Top Categories
            </div>
            <div className='  flex gap-12 py-6 '>
                {
                    data?.map((cat: any, index: any) => (
                        <ul key={index} className='border-[#b2b2b2] cursor-pointer border-solid border-2 flex items-center bg-white shadow-lg  justify-center  h-16 w-44 rounded-full'>
                            <li className='text-center text-base font-poppins font-semibold '>
                                {cat}
                            </li>
                        </ul>
                    ))
                }
            </div>

        </main>
    )
}

export default Categories