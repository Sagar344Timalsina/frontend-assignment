"use client"

import { Button, Divider, TextInput } from '@mantine/core'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity, remove } from '@/app/store/cartSlice'


const CartPage = () => {

  const [amt,setAmt]=useState(0);
  const { productData: items } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()
  console.log(items)

useEffect(() => {
 let amout=0;
 items && items?.map((item:any)=>

   {
  amout+=Math.round(item.price*item.quantity*100)/100
  return
  
})
setAmt(amout)
}, [items])

  const handleAddButton = ({ id, price, quantity, image, title }: { id: number, price: number, quantity: number, image: string, title: string }) => {
    dispatch(increaseQuantity(
      {
        id, image, title, price, quantity
      }
    ))

  }
  const handleDecreaseButton = ({ id, price, quantity, image, title }: { id: number, price: number, quantity: number, image: string, title: string }) => {
    dispatch(decreaseQuantity(
      {
        id, image, title, price, quantity
      }
    ))
  }
  const handleRemoveButton = ({ id, price, quantity, image, title }: { id: number, price: number, quantity: number, image: string, title: string }) => {
    dispatch(remove(
      {
        id, image, title, price, quantity
      }
    ))
  }




  return (

    <main className='dynamic-x-padding dynamic-y-padding bg-slate-100 h-100vh flex  justify-center gap-10'>
      {
        items && items?.length > 0 ?
          <section className='h-full w-[806px]  rounded-lg bg-white px-6 pt-3 pb-6'>
            <article>
              <h1 className='text-2xl font-poppins font-semibold'>Shopping Cart</h1>
            </article>
            <Divider my="sm" />
            <article className='flex gap-6 items-center justify-center flex-col'>
              {
                items?.map((cart: any) => (
                  <section className='bg-gray-300 w-full h-44 rounded-md grid grid-cols-12 gap-4' key={cart.id}>
                    <div className='max-h-[200px] flex items-center justify-center col-span-3'>
                      <Image src={cart?.image} width={100} height={100} alt="" quality={100} className='max-h-[100px]' />
                    </div>
                    <div className='col-span-5  flex flex-col items-center justify-center gap-2'>
                      <section className='text-lg font-poppins'>
                        {cart?.title.substring(0, 24)}......
                      </section>
                      {/* <section>
                  { }
                </section> */}
                      <section className=' flex items-center flex-col justify-center   gap-2 '>
                        <div className='flex items-center  gap-2'>
                          <Button onClick={() => handleAddButton(cart)} radius="xl" compact className='bg-gray-400 '>
                            <span className='text-lg font-bold flex items-center'>+</span>
                          </Button>
                          <TextInput
                            className='text-center flex items-center w-20'
                            size='lg'
                            value={cart?.quantity}
                            disabled
                          />
                          <Button onClick={() => handleDecreaseButton(cart)} radius="xl" compact className='bg-gray-400'>
                            <span className='text-lg font-bold flex items-center'>
                              -
                            </span>
                          </Button>
                        </div>
                      </section>
                      <section>

                        <Button radius="md" className='bg-gray-400 w-48 h-12' onClick={() => handleRemoveButton(cart)}>
                          <span className='text-lg  font-bold flex items-center'>
                            Remove items
                          </span>
                        </Button>
                      </section>
                    </div>
                    <div className='col-span-4  flex items-center justify-center'>
                      <h1 className='text-2xl font-semibold font-poppins'>
                        $ {cart.price}
                      </h1>
                    </div>
                  </section>
                ))
              }
            </article>

          </section> :
          <section className='h-[600px]  w-[806px] rounded-lg bg-white '>
            <article className='px-6 pt-3'>
              <h1 className='text-2xl font-poppins font-semibold'>Shopping Cart</h1>
            </article>
            <Divider my="sm" />
            <article className='  flex items-center justify-center  h-[450px]'>
              <h1 className='text-xl font-semibold font-poppins'>Products Not found!!!!!!!!</h1>
            </article>
          </section>
      }
      <section className='h-full w-[306px] rounded-lg px-6 py-3 bg-white '>
        <article className='h-full rounded-lg bg-white '>
        
            <h1 className='text-2xl font-poppins font-semibold'>Payment Total</h1>
          </article>
          <Divider my="sm" />
       <article>
          <p className='text-sm font-poppins'>Your order is ready to be shipped please be patient.See the total amount and details.</p>
       <div className='text-lg font-semibold py-4 flex items-center justify-between'>
        <span className=''>
          
          Total
          </span><span>
            $ {amt}
          </span>
       </div>
       
       </article>
      </section>
    </main>
  )
}

export default CartPage