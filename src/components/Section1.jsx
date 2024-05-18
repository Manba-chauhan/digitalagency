import React from 'react';
import dot from '../assets/img/dot.png';
import bigimg from '../assets/img/bigimg.png';

const Section1 = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between  items-center  max-lg:flex 
      max-lg:justify-between max-md:flex-col 
      max-sm:justify-center items-center">
        <div className="relative pl-20  max-md:left-0 lg:left-0 max-sm:pl-0">
          <div
            className="bg-white shadow-sm  max-w-[471px]  relative   top-20   z-50 px-1 py-4
           
           max-md:w-full"
          >
            <div className="max-sm:px-4">
              <h1 className="text-4xl text-black font-bold py-8 max-md:text-3xl">
                A Digital Product Agency
              </h1>
              <p className="text-gray-500 text-md tracking-wider ">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
              <button className="bg-blue-600 text-white px-10 py-3 rounded-full mt-4">
                Contact Now
              </button>
            </div>
          </div>
          <div className="w-[400px] h-[150px] relative max-sm:w-[300px]  ">
            <img src={dot} alt="dot" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex relative right-0  z-50">
          <div className="">
            <div className="max-w-[754px] max-h-[512px]  relative top-20  z-50 
            max-lg:w-[400px] max-lg:mx-auto max-sm:w-[350px]">
              <div className="absolute  -left-10  top-12 -z-50  max-sm:left-0">
                <span className="bg-blue-300  px-16 py-12 rounded-full max-sm:px-12 "></span>
              </div>
              <img src={bigimg} alt="img" className=" w-full h-full object-cover" />
              <div className="absolute right-20 -z-50 max-xl:right-0 max-lg:right-0 max-sm:right-5">
                <span className="bg-yellow-50 p-20  rounded-r-full  "></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
