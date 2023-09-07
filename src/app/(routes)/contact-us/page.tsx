import Maps from '@/app/components/modules/Contactus/Maps'
import React from 'react'

const Contactpage = () => {
  return (
    <main className="main-contact dynamic-x-padding  dynamic-y-padding ">
      <div className="heading-contact flex items-center justify-center">
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
      </div>
      <section className="child-contact grid grid-cols-12 py-9">
        <div className="left-contact col-span-6  flex flex-col justify-center items-center">
          <h4 className='text-xl font-semibold '>Get in Touch!!!</h4>
          <p>
            We are Happy to Serve you😊
          </p>
        </div>
        <div className="right-contact col-span-6">
          <section className="map-contact " >
            <h4 className='text-xl font-semibold py-6'>This is a map</h4>
            <Maps />
          </section>
          <section className="address-contact text-sm py-8 font-poppins">
            <p>
              Paknajol,Kathmandu,Nepal
            </p>
            <p>
              Support: (+977) 9868823245, (+977) 9804332381
            </p>
            <p>Email: letusknow@abc.com</p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Contactpage