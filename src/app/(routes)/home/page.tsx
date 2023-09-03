"use client"
import Carousel from '@/app/components/modules/HomePage/Carousel'
import Categories from '@/app/components/modules/HomePage/Categories'
import { Divider } from '@mantine/core'
import React from 'react'
import ProductsPage from '../products/page'
import Products from '@/app/components/modules/HomePage/Products'
import { useThemeContext } from '@/app/components/context/themeContext'

const HomePage = () => {
    const theme = useThemeContext();
    const themeStyle = {
        backgroundColor: theme ? '#333' : '#ccc',
        color: theme ? '#ccc' : '#333'
    } as React.CSSProperties
    return (
        <main className='dynamic-x-padding dynamic-y-padding' style={themeStyle}>
            <Carousel />
            <Categories />
            <Divider my="sm" />
            <Products />
        </main>
    )
}

export default HomePage