import React from 'react'

const VideoSection = () => {

    return (
        <section className='relative'>
            <div className="flex flex-col items-center justify-center pb-10">
                <video
                    src="https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/videos/homepage_hero_short.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto cursor-pointer rounded-[30px] md:rounded-[70px]"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <div className="bg-white/40 px-6 py-2 rounded-lg relative text-custom-primary font-light">
                    <p>Watch full video</p>
                </div>
            </div>
        </section>
    )
}

export default VideoSection