"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from "@/app/assets/images/img2.jpg"
import Image from 'next/image';

const Products = () => {
    const data = [
        { id: 1, name: 'Product name', rate: 4.2, price: '$250' },
        { id: 2, name: 'Product name', rate: 4.3, price: '$550' },
        { id: 3, name: 'Product name', rate: 4.6, price: '$450' },
    ]
    const router = useRouter();
    return (
        <main>
            <section className='flex items-center justify-between'>
                <div className='text-2xl font-semibold font-poppins'>Popular Products 2023</div>
                <div className='text-xl font-semibold font-poppins cursor-pointer' onClick={() => router.push("/products")}>See all</div>
            </section>

            <section>
                <article className='card'>
                    <div className='h-56 w-56 bg-gray-300 rounded-lg'>
                        <div className='relative h-8 w-8 rounded-full bg-white top-2 left-2 flex items-center justify-center'>
                            <span className='flex text-center items-center'>
                                <FavoriteBorderIcon fontSize='small' />
                            </span>
                        </div>

                        <div className='w-full h-full'>
                            <Image src={img1} width={300} height={800} alt='Product image' quality={100} />
                        </div>
                    </div>
                    <div>
                        <span>
                            ProductName
                        </span>
                        <span>

                        </span>
                        <span>

                        </span>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Products