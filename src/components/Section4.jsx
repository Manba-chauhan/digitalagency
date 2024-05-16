import React from 'react';
import video1 from '../assets/img/video1.png'

const Section4 = () => {
  return (
    <div className="max-w-[1200px] max-h-[500px] mx-auto  max-lg:max-w-[1000px] 
     max-lg:mx-auto   max-lg:mb-60  max-sm:mb-20 max-lg:w-full ">
      <div className="max-lg:ml-40 max-md:ml-10">
        <div
          className="flex justify-center items-center
           space-x-4
            max-lg:flex-col max-lg:justify-center max-lg:space-x-0 max-md:space-y-8"
        >
          <div className="">
            <img src={video1} alt='client'  className='w-full h-full object cover rounded-lg'/>
          </div>
          <div className="w-1/2 mx-auto max-lg:w-full ">
            <div className="">
              <div className="p-4">
                <h1 className='text-black font-bold text-5xl max-md:text-2xl'>Great Digital Product Agency since 2016 </h1>
                <p className='pt-4 text-zinc-600 text-md'>
                  Our Business Plan is a written document describing a company's
                  core business activites, Objectives, and how it plans to
                  achieve its goals. Our goal is to provide our client high
                  quality Product with modern idea accordingly their budgets and
                  according thir reuirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
