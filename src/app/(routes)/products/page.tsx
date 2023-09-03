"use client"
import Image from 'next/image'
import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { useRouter } from 'next/navigation';
import axios from "axios"
import productCard from '../../components/modules/ProductPage/productCard';
const ProductsPage = () => {

  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['allproducts'],
    queryFn: () => axios.get(`https://fakestoreapi.com/products`).then((res: any) => res.data),

  })

  return (
    <main className='dynamic-x-padding dynamic-y-padding'>
      <section>
        {/* <productCard /> */}
      </section>
      <section></section>
      <section></section>
    </main>
  )
}

export default ProductsPage