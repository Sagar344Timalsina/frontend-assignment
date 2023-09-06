"use client"
import Image from 'next/image'
import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { useRouter } from 'next/navigation';
import axios from "axios"
import ProductCard from '@/app/components/modules/ProductPage/CardProduct';
import { APIGetAllProducts } from '@/app/apis/products/index';
import Loading from '@/app/components/modules/ProductPage/ProductsLoading';
const ProductsPage = () => {

  const router = useRouter();


  const getAllProducts = async () => {
    try {
      const res = await APIGetAllProducts();
      return res;
    } catch (error) {
      console.log(error)
    }
  }



  const { data, isLoading } = useQuery({
    queryKey: ['allproducts'],
    queryFn: () => getAllProducts(),

  })

  if (isLoading) return <Loading />

  return (
    <main className='dynamic-x-padding dynamic-y-padding'>
      <section>
        <ProductCard cards={data} />
      </section>

    </main>
  )
}

export default ProductsPage