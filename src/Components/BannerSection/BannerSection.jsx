import React from 'react';
import logo from '../../assets/🚀 Ready to elevate your career in tech_ Join StatQuestJourney Hub and gain industry-ready skills in Data and AI through our innovative hybrid training approach! 🌟 Explore the future of tec.jfif';
const BannerSection = () => {
    return (

        <div className=''>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center mx-auto w-10/12 gap-10 mt-7 lg:mt-30'>
                <div className='space-y-5 lg:space-y-10'>
                    <div className='space-y-4  max-w-2xl'>
                        <h1 className=' text-4xl md:text-7xl  font-semibold md:font-bold  text-center md:text-start lg:leading-20'>
                            <span className='text-[#2664eb]'>Scale Your Business with</span> Smart Design.
                        </h1>
                        <p className='text-center md:text-start text-lg md:text-xl md:text-2xl lg:leading-10 '>
                            We help entrepreneurs and brands grow through modern web technology and world-class UI/UX.
                        </p>
                    </div>
                    <div className='flex  items-center justify-center lg:justify-start gap-5 lg:gap-9'>
                        <button className='btn btn-xs sm:btn-sm md:btn-md  btn-primary rounded-full'>Our Portfolio</button>
                        <button className='btn btn-xs sm:btn-sm md:btn-md btn-outline rounded-full'>Learn More</button>
                    </div>
                </div>


                <figure className='pulsing-logo'>
                    <img className='rounded-3xl'
                        src={logo}
                        alt="Shoes" />
                </figure>
            </div>
        </div>


    );
};

export default BannerSection;