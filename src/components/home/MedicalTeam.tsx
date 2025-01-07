import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/mt-1.webp'
import image2 from '@/assets/mt-2.webp'
import image3 from '@/assets/mt-3.webp'
import signImg from '@/assets/mt-signature.png'


const MedicalTeam = () => {
    return (
        <section className='py-20 text-custom-primary'>
            <span className='px-4 text-sm font-semibold'>SENIOR MEDICAL TEAM</span>
            <h1 className='px-4 text-4xl font-semibold max-w-screen-lg'>Our programme is created by experts in the biology and psychology of weight loss</h1>

            <div className="flex flex-wrap pt-10 space-y-4 md:space-y-0">
                <div className="relative w-full md:w-1/3 p-4 space-y-4">
                    <Image src={image1} alt='programme-image' height={300} width={400} className='w-full h-72 rounded-2xl object-cover m-auto' />
                    <div className="absolute text-white left-10 bottom-10 ">
                        <h1 className='text-2xl font-semibold'>Dr Matt Capehorn</h1>
                        <p>Director of Obesity</p>
                    </div>
                </div>
                <div className="relative w-full md:w-1/3 p-4 space-y-4">
                    <Image src={image2} alt='programme-image' height={300} width={400} className='w-full h-72 rounded-2xl object-cover m-auto' />
                    <div className="absolute text-white left-10 bottom-10 ">
                        <h1 className='text-2xl font-semibold'>Anna Mullany, MSc, BSc</h1>
                        <p>Head of Behaviour Change</p>
                    </div>
                </div>
                <div className="relative w-full md:w-1/3 p-4 space-y-4">
                    <Image src={image3} alt='programme-image' height={300} width={400} className='w-full h-72 rounded-2xl object-cover m-auto' />
                    <div className="absolute text-white left-10 bottom-10 ">
                        <h1 className='text-2xl font-semibold'>Molly Morgan, RD </h1>
                        <p>Lead Dietitian</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFF5D9] p-10 mt-10 rounded-2xl w-11/12 m-auto">
                <p className='text-3xl'>Our industry leading weight loss experts know that there's more to it than ‘eat less, move more’ - that’s why we chose them to create a programme that tackles the root cause of weight gain, by helping you reset your mind and body.</p>
                <Image src={signImg} alt='programme-image' height={100} width={160} className='object-cover my-6' />
                <div className="flex gap-6 my-5">
                    <Image src={image1} alt='programme-image' height={300} width={300} className='object-cover w-14 h-14 rounded-full' />
                    <p className='text-sm font-semibold'>Dr Earim Chaudry <span className='block font-normal'>Chief Medical Director</span> </p>
                </div>
                <div className="border-custom-primary border-2 w-fit py-3 px-8 rounded-lg font-semibold">Learn about our experts</div>
            </div>

        </section>
    )
}

export default MedicalTeam