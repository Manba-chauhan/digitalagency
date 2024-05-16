import React from 'react';
import img  from '../assets/img/img.png'
import dot from '../assets/img/dot.png'
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import p4 from '../assets/img/p4.png'
import p3 from '../assets/img/p3.png'
import p5 from "../assets/img/p5.png";
import p6 from "../assets/img/p6.png";
import p7 from "../assets/img/p7.png";
import p8 from "../assets/img/p8.png";



const Section5 = () => {
  return (
    <div className=" relative top-20 max-w-[1300px] max-h-[600px] mx-auto max-lg:max-w-[1000px] max-lg:mx-auto ">
      <div className="">
        <h1 className="text-black text-4xl text-center text-extrabold">
          What our happy client say
        </h1>
        <p className="text-zinc-500 mt-3 text-md text-center text-bold">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="">
        <div
          className="  flex justify-center items-center 
        max-lg:flex-col max-lg:justify-center"
        >
          <div className="">
            <img
              src={dot}
              alt=""
              className="relative left-60 top-20 -z-50 max-md:left-20"
            />
            <img src={img} alt="" />
            <span
              className="px-10 py-8 border-8  rounded-full  border-rose-600 
            relative -right-12 -top-40  -z-50  max-md:hidden  max-sm:hidden max-lg:right-10"
            ></span>
          </div>
          <div className="max-w-1/2  max-sm:ml-8">
            <h2 className="text-black  text-2xl font-meduim">Matthew Paul</h2>
            <p className="text-zinc-600 text-meduim w-3/6 text-sm max-lg:w-full ">
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
          </div>
          <div className="relative -left-40 top-40  max-sm:left-6 max-sm:right-0 ">
            <img src={p6} alt="" className="relative top-52 left-28" />

            <img src={p4} alt="" className="relative -top-10 left-2" />
            <img src={p2} alt="" className="relative -left-10 max-sm:-left-5" />
            <img
              src={p1}
              alt=""
              className="relative top-2 -left-32 max-md:-left-28"
            />
            <img
              src={p3}
              alt=""
              className="relative -top-80 -left-32 max-md:-left-28"
            />

            <img
              src={p8}
              alt=""
              className="relative -top-72 -left-40 max-md:-left-28"
            />
            <img src={p7} alt="" className="relative  -top-96 left-28" />

            {/* <img src={p4} alt="" className="relative -top-4 -left-20" /> */}
            <img src={p5} alt="" className="relative  -top-72  left-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
