import React from 'react'

const AboutUs = () => {
  return (
    <main className='contact-main dynamic-x-padding dynamic-y-padding check'>
      <section className='heading-about flex justify-center items-center check'>
        <h1 className='h1-text text-2xl font-semibold '>About us</h1>
      </section>
      <section className="child-about grid grid-cols-12 py-8 check min-h-[28rem]">
        <article className="left-about grid-items col-span-4 flex items-center flex-col gap-4 ">
          <h4 className='text-xl font-poppins'>What we do?</h4>
          <p className='w-72 font-poppins text-justify'>
            At our company, we will never give you the hard sell, or try to convince you
            to purchase something you dont need. We value your patronage and always
            aim to provide a great shopping experience. Youre invited to call us, chat
            with us, or visit in person—were waiting to serve you. Well give you all
            the time you need to discuss your concerns and graciously welcome any
            request.
          </p>
        </article>
        <article className="mid-about grid-items col-span-4 flex  flex-col gap-4 items-center">
          <h4 className='text-xl font-poppins'>About Company</h4>
          <p className='w-72 font-poppins text-justify'>
            Established to provide top notch and genuine products in Nepali market in reasonable prices.
            We aim to be First and Fully Customized DIY PC builders in Nepali Market.
          </p>
        </article>
        <article className="right-about grid-items col-span-4 flex  flex-col gap-4 items-center">
          <h4 className='text-xl font-poppins'>We Hire True Know-How</h4>
          <p className='w-72 font-poppins text-justify'>
            We have photography, audio and video specialists as our salespeople.
            By hiring so many accomplished experts, we place years of industry
            experience and advice at your disposal.
          </p>
          <p className='w-72 font-poppins text-justify'>
            In addition to their own experience, Aliteq associates spend more
            than 25% of their working time in equipment trainings. So, that we
            can give you the best advice for the equipments you want.
          </p>
        </article>
      </section>
    </main>
  )
}

export default AboutUs