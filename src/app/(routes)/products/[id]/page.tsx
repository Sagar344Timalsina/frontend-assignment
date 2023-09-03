"use client"
import Image from 'next/image'
import React, { FC, useState } from 'react'
import img1 from "@/app/assets/images/img6.jpg"
import StarIcon from '@mui/icons-material/Star';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Button, Divider, TextInput } from '@mantine/core';
import { useQuery } from "@tanstack/react-query"
import { useRouter } from 'next/navigation';
import axios from "axios"


interface pageProps{
  params:{id:string}
}

const ProductDetails:FC<pageProps> = ({params}) => {
const router=useRouter();
  const [count, setCount] = useState<number>(1);

console.log(params.id)

  const {data,isLoading}=useQuery({
    queryKey: ['productDetail'],
    queryFn: () => axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res: any) => res.data),
  
  })

  const addStock = () => {
    setCount((prev) => prev + 1);
  }
  const deductStock = () => {
    if (count <= 1) {
      alert("can't deduct")
    }
    else {
      setCount((pre) => pre - 1);
    }
  }



  return (
    <main className='dynamic-x-padding dynamic-y-padding'>
      <section className='top grid grid-cols-12 gap-4'>
        <article className='left-image col-span-6 '>
          <div className=' '>
            <Image src={data?.image} alt='Product desc' width={500} height={500} quality={100} className='' />
          </div>
        </article>
        <article className='right-desc col-span-6 pl-6'>
          <section>
            <div>
              <h2 className='text-xl font-poppins font-bold'>
                {data?.title}
              </h2>
              <p className='text-sm font-poppins'>
                {data?.description}
              </p>
              <div className='flex gap-2 items-center'>
                <span className='flex items-center'>
                  <StarIcon fontSize='small' className='text-yellow-500' />
                </span>
                <span className='text-sm font-normal font-montserrat'>
                 {data?.rating?.rate}
                </span>
              </div>
            </div>
            <div className='pt-8 pb-4'>
              <h3 className='font-semibold text-base font-poppins '>
                ${data?.price} or 99.99/month
              </h3>
              <p className='text-sm font-poppins'>
                Suggested payment methods
              </p>
            </div>
          </section>
          <Divider my="sm" className='w-full' />
          <section>
            <div className='flex gap-4 items-center '>
              <article className='w-28 flex items-center  gap-2'>
                <Button radius="xl" onClick={addStock} compact className='bg-gray-400 '>
                  <span className='text-lg font-bold flex items-center'>+</span>
                </Button>
                <TextInput
                  className='text-center flex items-center'
                  size='sm'
                  value={count}
                  disabled
                />
                <Button radius="xl" onClick={() => deductStock()} compact className='bg-gray-400'>
                  <span className='text-lg font-bold flex items-center'>
                    -
                  </span>
                </Button>

              </article>
              <article>
                <p className='text-sm font-poppins'>
                  only <span className='text-red-500'>12</span> items left
                </p>
                <p className='text-sm font-poppins'>
                  Don't miss it
                </p>
              </article>
            </div>
            <div className='flex gap-5 pt-5'>
              <Button radius="xl" size="lg" className='bg-gray-700'>
                <span className='text-base  font-montserrat'>Buy now</span>
              </Button>
              <Button radius="xl" size="lg" variant='subtle' className='border-2 border-[#d8d8d8]'>
                <span className='text-gray-600 font-montserrat text-base '> Add to Cart</span>
              </Button>

            </div>
          </section>
          <Divider my="sm" className='w-full' />
          <section className='w-96 py-3'>
            <article className='border-x-2 border-t-2 border-[#d8d8d8] p-3'>
              <div className='flex gap-2'>
                <span>
                  <LocalShippingOutlinedIcon fontSize='small' />
                </span>
                <span className=''>
                  Free Delivery
                </span>
              </div>
              <div className='pl-7'>
                Enter your postal card
              </div>
            </article>
            <article className='border-2 border-[#d8d8d8] p-3'>
              <div className='flex gap-2'>
                <span>
                  <CalendarMonthOutlinedIcon fontSize='small' />
                </span>
                <span>
                  Free Delivery
                </span>
              </div>
              <div className='pl-7'>
                Free 30 days return after delivery
              </div>
            </article>
          </section>
        </article>
      </section>
      <section className='bottom py-8'>
        <h1 className='text-xl font-poppins '>Full Specification</h1>
        <div className='w-[50%] pt-4 font-poppins text-sm'>
          
          {
            data?.description
          }

        </div>
      </section>
    </main>
  )
}

export default ProductDetails