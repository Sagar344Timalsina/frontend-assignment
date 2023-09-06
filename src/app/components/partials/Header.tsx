"use client"
import React, { useState, useEffect } from 'react'
import Logo from '../common/Logo'
import { useRouter, usePathname } from 'next/navigation'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ActionIcon, Switch, TextInput } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { changeTheme } from '@/app/store/themeSlice';


const HeaderPage = () => {
  const { productData } = useSelector((state: any) => state.cart)
  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState<String>('');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');


  // const getPathName=()=>{
  //   const paths=path.replace(/\//g, '');
  //   const strPath=paths[0].toUpperCase()+paths.slice(1);
  //   setActiveLink(strPath);
  // }



  // useEffect(() => {
  //   getPathName();

  // }, [])



  // function setThemeProvider() {
  //   setTheme(pre => !pre)
  // }


  const handleThemeChange = () => {
    dispatch(changeTheme(theme))
  }


  useEffect(() => {
    handleThemeChange()
  }, [theme])


  const navbar = [
    { id: 1, name: "Home", link: `/home` },
    { id: 2, name: "Products", link: `/products` },
    { id: 3, name: "About us", link: `/about-us` },
    { id: 4, name: "Contact us", link: `/contact-us` },
  ]
  // const currentLink
  return (
    <header className=''>
      <section className='flex  items-center justify-around ' >
        <div className='flex items-center  cursor-pointer ' onClick={() => router.push(`/home`)} >
          <Logo />
          <span className='text-2xl font-bold text'>Online <span className='text-red-600'>Store</span></span>
        </div>
        <div className=''>
          <TextInput
            rightSection={<SearchOutlinedIcon fontSize='small' />}
            rightSectionWidth={30}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            placeholder="Search .........."
            size='lg'
            radius="md"
          />

        </div>
        {/* <div>
          <Switch onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        </div> */}


        <div className='flex cursor-pointer' onClick={() => router.push(`/cart`)}>
          <ShoppingCartOutlinedIcon fontSize='large' />
          <div className='w-5 h-5 bg-red-700 rounded-full flex items-center justify-center relative -top-2'>
            <span className='text-[12px] text-white font-bold'>{productData.length > 0 ? productData.length : 0}</span>
          </div>

        </div>

      </section>
      <nav className=''>
        <ul className='flex gap-8 h-12 px-16 bg-gray-700 justify-end items-center'>
          {
            navbar?.map((nav: any) => (
              <li key={nav.id} onClick={() => router.push(nav.link)} className={`cursor-pointer  text-lg font-semibold hover:scale-110 duration-200 ease-in ${activeLink === nav?.name ? 'text-red-500' : 'text-white'}`} >


                {
                  nav.name
                }

              </li>
            ))
          }
        </ul>
      </nav>

    </header>
  )
}

export default HeaderPage