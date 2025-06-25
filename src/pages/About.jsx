import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>

        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forevr, we’re more than just a clothing brand — we’re your everyday style partner. From comfy everyday basics to bold statement pieces, our
             western wear collection is designed to help you express yourself, effortlessly.</p>
          <p> We believe fashion should be fun, fearless, and inclusive. That’s why our clothing is available 
            in a wide range of sizes, styles, and fits — for every body and every vibe.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to empower individuals through fashion that’s bold, comfortable, and effortlessly stylish.
             We aim to make trend-driven western wear accessible to everyone, without compromising on quality.</p>

          </div>

        </div>
        <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>

        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We bring you trend-first western wear inspired by global fashion, designed to keep you effortlessly stylish every day. 
              Our clothes are made with premium fabrics and expert stitching, offering both comfort and durability.</p>

          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className='text-gray-600'>Shopping with us is simple, fast, and stress-free. From easy-to-browse collections and secure online payments to quick doorstep delivery and hassle-free returns — we make fashion convenient at every step.

             Whether you're on your phone or desktop, your next favorite outfit is just a few clicks away.</p>

          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At Forever, we’re committed to putting our customers first. Our support team is always ready to assist you — whether you need help with sizing, tracking an order, or making a return.
We believe in quick responses, real solutions, and treating every customer like a priority. Because great fashion deserves even greater service.

</p>

          </div>

        </div>
        <NewsletterBox/>

      </div>
    </div>
  )
}

export default About