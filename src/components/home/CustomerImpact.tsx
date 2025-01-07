import React from 'react'

const CustomerImpact = () => {
    return (
        <section className='py-20 bg-custom-primary text-white'>
            <span className='px-4 text-sm font-semibold'>OUR CUSTOMER IMPACT</span>
            <h1 className='px-4 text-4xl font-semibold'>The results speak for themselves</h1>

            <div className="flex flex-wrap py-10 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/3 p-4 space-y-4">
                    <h1 className='text-4xl font-semibold'>84%</h1>
                    <p>of members say this is the most effective program they have tried</p>
                </div>
                <div className="w-full md:w-1/3 p-4 space-y-4">
                    <h1 className='text-4xl font-semibold'>92%</h1>
                    <p>of members are confident they will keep the weight off for good</p>
                </div>
                <div className="w-full md:w-1/3 p-4 space-y-4">
                    <h1 className='text-4xl font-semibold'>97%</h1>
                    <p>of members felt their overall health had improved</p>
                </div>
            </div>
            <p className='px-4 text-sm'>*Taken from customer care survey from 300 patients over 6 months of treatment</p>
        </section>
    )
}

export default CustomerImpact