import React from 'react';
import  dot2 from '../assets/img/dot2.png';
import Card from './Card';
import box1 from "../assets/img/box1.png";
import box2 from "../assets/img/box2.png";
import box3 from "../assets/img/box3.png";
import box4 from "../assets/img/box4.png";

const Section3 = () => {
  return (
    <div className="my-20 max-sm:w-full">
      <div className="bg-white  ml-20 
      flex max-lg:flex-col ">
        <div className="">
          <div className="">
            <span className="bg-yellow-50 p-20 rounded-l-full"></span>
          </div>
          <div className="">
            <h1 className="text-4xl font-bold  w-8/12  max-sm:w-full">
              How can we help your Business ?
            </h1>
            <p className="text-lg font-normal mt-2  w-11/12 text-gray-600">
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
          </div>
          <div className="w-[400px] h-[150px] relative top-10 max-sm:w-[300px]  ">
            <img src={dot2} alt="dot" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-lg:-ml-20 max-md:-ml-20  ">
          <div className="relative max-w-[1047px] mx-h-[620px]  relative top-40 ">
            <span className="bg-blue-200 py-60 px-96 rounded-ss-[150px] max-lg:hidden  relative z-50 "></span>
          </div>
          <div className="">
            <div className="relative -top-40  z-50 ">
              <div className="grid grid-cols-2 grid-rows-2 gap-5 
              max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div className="relative top-20 max-sm:top-40">
                  <Card
                    src={box1}
                    heading="Business Idea Planning"
                    text="We present you a proposal and discuss niffty-gritty like"
                  />
                </div>
                <div className="relative -left-8  max-sm:left-0  max-sm:top-40">
                  <Card
                    src={box2}
                    heading="Financial Planning System"
                    text="Protocols apart from aengage models, pricing billing"
                  />
                </div>
                <div className="relative top-20 max-sm:top-40 ">
                  <Card
                    src={box3}
                    heading="Development Website and App"
                    text="Communication protocols apart from engagement models"
                  />
                </div>
                <div className="relative -left-8 max-sm:left-0 max-sm:top-40">
                  <Card
                    src={box4}
                    heading="Market Analysis Project"
                    text="Protocols apart from aengage models, pricing billing"
                  />
                </div>
              </div>

              {/* <Card /> */}
            </div>
          </div>
          <div className=" relative -top-64  ">
            <span
              className="px-10 py-8 border-4  rounded-full  border-rose-600 
            absolute -right-0  -z-0  max-md:hidden  max-sm:hidden max-lg:right-10"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
