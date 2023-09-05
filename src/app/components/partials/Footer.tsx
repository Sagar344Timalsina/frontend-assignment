'use client';

import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import connectIPS from "../../assets/images/ConnectIPS.png";
import esewa from "../../assets/images/eSewa.png";
import khalti from "../../assets/images/Khalti.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Divider } from '@mantine/core';
import Image from 'next/image';


const FooterPage = () => {
    const payment = [
        { id: 1, name: "ConnectIPS", img: connectIPS },
        { id: 2, name: "esewa", img: esewa },
        { id: 3, name: "khalti", img: khalti }
    ];

    const socialMedia = [
        { id: 1, name: 'Facebook', img: FacebookIcon },
        { id: 2, name: 'Instagram', img: InstagramIcon },
        { id: 3, name: 'Twitter', img: TwitterIcon },
        { id: 4, name: 'Pinterest', img: PinterestIcon },
    ]


    return (
        <footer className='flex flex-col  '>

            <article className='grid grid-cols-12 py-5  '>
                <section className='col-span-4  flex items-center  flex-col'>
                    <div className='text-lg font-semibold'>
                        Customer Service
                    </div>
                    <div >
                        <ul className='flex flex-col gap-2'>
                            <li className='text-sm cursor-pointer '>About us</li>
                            <li className='text-sm cursor-pointer '>Terms and Conditions</li>
                            <li className='text-sm cursor-pointer '>Contact us</li>
                            <li className='text-sm cursor-pointer '>Privacy Policy</li>
                        </ul>
                    </div>
                </section>
                <section className='col-span-4 flex items-center  flex-col'>
                    <div className='text-lg font-semibold'>
                        My Account
                    </div>
                    <div className=''>
                        <ul className=' flex flex-col gap-2'>
                            <li className='text-sm cursor-pointer'>Account us</li>
                            <li className='text-sm cursor-pointer'>Wishlst</li>
                            <li className='text-sm cursor-pointer'>FAQs </li>

                        </ul>
                    </div>
                </section>
                <section className='col-span-4  flex items-center  flex-col'>
                    <div className='text-lg font-semibold'>
                        Support
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 items-center '>
                            <span className='flex items-center '>
                                <EmailOutlinedIcon fontSize='inherit' />
                            </span>
                            <span className='text-sm font-normal'>
                                Email:Sales@gmail.com
                            </span>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <span className='flex items-center '>
                                <PhoneIphoneOutlinedIcon fontSize='inherit' />
                            </span>
                            <span className='text-sm font-normal'>
                                Phone:9841255253
                            </span>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <span className='flex items-center '>
                                <LocationOnOutlinedIcon fontSize='inherit' />
                            </span>
                            <span className='text-sm font-normal'>
                                Putalisadak,Kathmandu
                            </span>

                        </div>
                    </div>
                </section>
            </article>
            <Divider my="sm" />
            <article className='flex justify-around items-center'>
                <section className='flex gap-4  items-center'>
                    <div className='font-semibold'>Payment Method</div>
                    <div className='flex'>
                        <ul className='flex gap-3'>
                            {
                                payment?.map((pay) => (
                                    <li key={pay.id} className=''>
                                        <Image src={pay.img} quality={100} width="80" height="80" alt={pay.name} className='cursor-pointer hover:scale-105 ease-in duration-200 ' />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <section className='flex gap-4  items-center'>
                    <div className='font-semibold'>
                        Follow Us
                    </div>
                    <div>
                        <ul className='flex gap-3'>
                            {
                                socialMedia?.map((social) => (
                                    <li key={social.id} className='bg-gray-700  h-12 w-12 flex items-center justify-center rounded-full hover:scale-105 duration-200 ease-in cursor-pointer'>
                                        {
                                            <social.img className='text-white' />
                                        }
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </section>
            </article>
            <Divider my="sm" />
            <article className='bg-gray-600 flex items-center justify-center h-12' >
                <p className="text-white">

                    Online store Pvt.Ltd. &copy; {new Date().getFullYear()}. All rights Reseved.
                </p>
               
            </article>
        </footer>
    )
}

export default FooterPage