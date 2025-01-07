import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/hero-image.webp'

const HeroSection = () => {
    return (
        <section className='flex flex-wrap py-20 px-4 bg-[#FFF5D9] text-custom-primary'>
            <div className="w-full md:w-1/2 p-2 lg:p-4 mt-5 md:mt-20">
                <h1 className='text-4xl md:text-6xl font-semibold'>The last weight loss programme you’ll ever need</h1>
                <p className='my-5'>Break free of fads and yo-yo diets. Achieve a healthier, happier weight with programmes backed by science.</p>
                <p className='bg-[#FF781F] px-4 py-2 rounded-lg w-fit font-semibold'>Am I eligible?</p>

                {/* divider  */}
                <hr className='my-10' />

                <div className="flex gap-5">
                    <p className='text-6xl font-semibold'>65K</p>
                    <p className='text-sm'>We are the UK&apos;s leading medicated weight loss programme, with over 65,000 members</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 md:mt-20">
                <Image src={heroImg} alt='hero-image' height={600} width={600} className='m-auto' />
            </div>
        </section>
    )
}

export default HeroSection