import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/three-step1.webp'
import image2 from '@/assets/three-step3.svg'
import image3 from '@/assets/three-step2.webp'

const ThreeStep = () => {
    return (
        <section className='py-20 text-custom-primary'>
            <span className='px-4 text-sm font-semibold'>PROGRAMME</span>
            <h1 className='px-4 text-4xl font-semibold'>Introducing a new way to lose weight</h1>

            <div className="flex flex-wrap pt-10 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/3 p-4 space-y-4">
                    <Image src={image1} alt='programme-image' height={300} width={300} className='w-full m-auto' />
                    <h1 className='text-2xl font-semibold'>Introducing a new way to lose weight</h1>
                    <p>Set off on the right foot with weight loss medication that’s proven to help you hit the ground running and reach your goals faster</p>
                </div>
                <div className="w-full md:w-1/3 p-4 space-y-4">
                    <Image src={image2} alt='programme-image' height={300} width={300} className='w-full m-auto' />
                    <h1 className='text-2xl font-semibold'>Dedicated health team</h1>
                    <p>Whether you need support with your medication, nutrition or motivation, our specialist teams of coaches, clinicians and nutritionists have you covered. </p>
                </div>
                <div className="w-full md:w-1/3 p-4 space-y-4">
                    <Image src={image3} alt='programme-image' height={300} width={300} className='w-full m-auto' />
                    <h1 className='text-2xl font-semibold'>Stay on track with the Voy App</h1>
                    <p>Build a new, healthier lifestyle with expert guidance on nutrition, movement and mindset. With an easy-to-follow habit change programme, and in-app progress tracking that’s proven to reinforce your motivation.</p>
                </div>
            </div>
        </section>
    )
}

export default ThreeStep