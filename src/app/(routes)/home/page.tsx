"use client"
import Carousel from '@/app/components/modules/HomePage/Carousel'
import Categories from '@/app/components/modules/HomePage/Categories'
import { Divider } from '@mantine/core'
import React from 'react'
import ProductsPage from '../products/page'
import Products from '@/app/components/modules/HomePage/Products'

const HomePage = () => {
    return (
        <main className='dynamic-x-padding dynamic-y-padding'>
            <Carousel/>
            <Categories/>
            <Divider my="sm"/>
            <Products/>
        </main>
    )
}

export default HomePage