import React from 'react';

const Section6 = () => {
  return (
    <div className="max-w-[1200px] max-h-[400px] mx-auto relative top-40 
     max-lg:mt-[650px] ">
      <div className="max-w-[1100px] max-h-[300px] mx-auto bg-blue-200 rounded-3xl  
      flex justify-between ">
        <div className="mx-10 my-20">
          <h1 className="text-4xl text-black font-bold">
            Subscriber NewsLetters
          </h1>
          <p className="text-gray-400 font-medium text-sm mt-1">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className="bg-blue-600 rounded-ss-full  px-20 max-lg:px-10  py-8 relative max-md:hidden">
          <div className="flex justify-center items-center relative top-28 -left-44 
          bg-white px- rounded-full ">
            <input type="search" placeholder="search the here"  className='px-6 py-5 rounded-full '/>
            <div className="">
              <button className="bg-blue-700 rounded-full px-8 py-3">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
