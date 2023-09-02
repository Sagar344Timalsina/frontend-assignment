import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/images/online_store.jpg"

const Logo = () => {
  return (
    <div className=' object-contain'>
        <Image src={logo} width="100" height="100" quality={100} alt='Online Store'/>
    </div>
  )
}

export default Logo