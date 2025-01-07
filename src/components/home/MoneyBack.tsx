import Image from 'next/image'
import React from 'react'
import moneyBackImg from '@/assets/money-back-image.jpg'
import appBannerImg from '@/assets/money-back-app_banner.jpg'

const MoneyBack = () => {
    return (
        <section className='py-10 px-4 text-custom-primary'>
            {/* money back section  */}
            <div className="flex flex-wrap items-center bg-[#FFF5D9] rounded-2xl w-11/12 m-auto">
                <div className="w-full md:w-1/2 p-10">
                    <h3 className='text-4xl font-semibold max-w-lg leading-snug mb-5'>Lose 10% body weight or your money back</h3>
                    <p className='max-w-lg'>We’re confident that you’ll lose at least 10% of your body weight in six months with our programme. If you don’t, we’ll give you your money back.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image src={moneyBackImg} alt='money back image' width={600} height={600} />
                </div>
            </div>
            {/* app banner section  */}
            <div className="flex flex-col-reverse items-center md:flex-row mt-20 bg-[#FFF5D9] rounded-2xl w-11/12 m-auto">
                <div className="w-full md:w-1/2">
                    <Image src={appBannerImg} alt='app banner image' width={600} height={600} />
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <h3 className='text-4xl font-semibold max-w-lg leading-snug mb-5'>5,000+ Voy customers are already benefitting from using the app</h3>
                    <p>Make weight loss simpler - join Voy today</p>
                    <div className=" bg-[#FF781F] w-fit py-3 px-8 rounded-lg font-semibold mt-5">Learn about our experts</div>
                </div>
            </div>
        </section>
    )
}

export default MoneyBack