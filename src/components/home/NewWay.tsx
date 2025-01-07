import Image from 'next/image'
import React from 'react'
import ratingImage from '@/assets/rating-img.png'
import ratingSvg1 from '@/assets/rating-svg1.svg'
import ratingSvg2 from '@/assets/rating-svg2.svg'
import ratingSvg3 from '@/assets/rating-svg3.svg'
import ratingSvg4 from '@/assets/rating-svg4.svg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const NewWay = () => {
    return (
        <section className='py-20 px-4'>
            <span className='text-custom-primary text-sm font-semibold'>RATED EXCELLENT</span>
            <Image src={ratingImage} alt='rating-image' height={100} width={200} className='mt-2' />

            <div className="flex justify-between gap-6 overflow-x-scroll hide-scrollbar text-custom-primary py-10">
                <div className="bg-gray-100 min-w-60 w-[23%] rounded-lg px-4 py-6">
                    <Image src={ratingSvg1} alt='rating-image' height={40} width={40} className='mb-4 bg-white p-1 rounded-lg' />
                    <p className='text-lg'><span className='font-semibold'>Trusted by</span> 10K UK customers</p>
                </div>
                <div className="bg-gray-100 min-w-60 w-[23%] rounded-lg px-4 py-6">
                    <Image src={ratingSvg2} alt='rating-image' height={40} width={40} className='mb-4 bg-white p-1 rounded-lg' />
                    <p className='text-lg'><span className='font-semibold'>Ongoing </span> medical support</p>
                </div>
                <div className="bg-gray-100 min-w-60 w-[23%] rounded-lg px-4 py-6">
                    <Image src={ratingSvg3} alt='rating-image' height={40} width={40} className='mb-4 bg-white p-1 rounded-lg' />
                    <p className='text-lg'>Breakthrough medication</p>
                </div>
                <div className="bg-gray-100 min-w-60 w-[23%] rounded-lg px-4 py-6">
                    <Image src={ratingSvg4} alt='rating-image' height={40} width={40} className='mb-4 bg-white p-1 rounded-lg' />
                    <p className='text-lg'><span className='font-semibold'>Science backed</span> programme</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-between text-custom-primary mt-20">
                <div className="w-full md:w-1/2 max-w-lg">
                    <h1 className='text-4xl font-semibold'>Introducing a new way to lose weight</h1>
                    <p className='my-5'>Kickstart your weight loss with breakthrough medication, and achieve lasting results with a personalised programme delivered through the voy app.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className='bg-gray-100 p-4 rounded-lg my-2 border-none '>
                            <AccordionTrigger className='font-semibold text-2xl'>Enhanced by science</AccordionTrigger>
                            <AccordionContent>
                                Medication takes care of your hunger and cravings, so you don not have to worry about calorie counting, punishing diets, or bad foods.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='bg-gray-100 p-4 rounded-lg my-2 border-none '>
                            <AccordionTrigger className='font-semibold text-2xl'>Tailored for you</AccordionTrigger>
                            <AccordionContent>
                                Find out the top 5 things that will make the biggest difference to you. Your dedicated coach will help identify your root causes, and make realistic changes that fit with your lifestyle.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='bg-gray-100 p-4 rounded-lg my-2 border-none '>
                            <AccordionTrigger className='font-semibold text-2xl'>Built to last</AccordionTrigger>
                            <AccordionContent>
                                Get the knowledge, tools and habits to maintain a healthy lifestyle no matter what life throws at you. Make this the last program you ever need.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className='bg-gray-100 p-4 rounded-lg my-2 border-none '>
                            <AccordionTrigger className='font-semibold text-2xl'>Stay on track with our app</AccordionTrigger>
                            <AccordionContent>
                                Designed to simplify your journey, our App lets you track progress, reach out to your coach and understand how to safely take your medication.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </section>
    )
}

export default NewWay