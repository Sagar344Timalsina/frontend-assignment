"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from "@/app/assets/images/img4.jpg"
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from 'next/image';
import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const Products = () => {
    const router = useRouter();


    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('https://fakestoreapi.com/products?limit=5').then((res: any) => res.data),
       
    })

    if (isLoading) return <>Loading.....</>

    return (
        <main>
            <section className='flex items-center justify-between'>
                <div className='text-2xl font-semibold font-poppins'>Popular Products 2023</div>
                <div className='text-xl font-semibold font-poppins cursor-pointer' onClick={() => router.push("/products")}>See all</div>
            </section>

            <section className='flex gap-8 flex-wrap'>
                {
                    data?.map((datas: any) => (
                        <article key={datas.id} className='card w-[16rem] pt-4 cursor-pointer ' onClick={() => router.push(`products/${datas.id}`)}>
                            <div className='bg-gray-400 p-4  rounded-t-lg '>
                                <div className='relative h-8 w-8 rounded-full bg-white top-2 left-2 flex items-center justify-center'>
                                    <span className='flex text-center items-center'>
                                        <FavoriteBorderIcon fontSize='small' />
                                    </span>
                                </div>

                                <div className='w-full  h-full'>
                                    <Image src={datas?.image} width={100} height={100} alt='Product image' quality={100} className='w-80 h-80' />
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='text-base h-20  font-semibold font-montserrat'>
                                    {datas.title}
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <span className='flex items-center'>
                                        <StarIcon className='text-yellow-500' />
                                    </span>
                                    <span className='text-base font-normal font-montserrat'>
                                        {datas.rating.rate}
                                    </span>

                                </div>
                                <div className=' flex justify-between items-center'>
                                    <span className='font-montserrat text-base'>

                                        {datas.price}
                                    </span>
                                    <span className='cursor-pointer'>
                                        <AddCircleIcon />
                                    </span>

                                </div>
                            </div>
                        </article>
                    ))
                }
            </section>
        </main>
    )
}

export default Products