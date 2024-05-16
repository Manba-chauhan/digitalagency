import React from 'react';
import google from '../assets/img/google.png';
import airbnb from '../assets/img/airbnb.png';
import amzon from '../assets/img/amzon.png';
import uber from '../assets/img/uber.png';

const Section2 = () => {
  return (
    <div className="max-W-[1200px] mx-auto mt-60 mb-40 max-lg:max-w-[1000px] max-lg:mx-auto">
      <div className="flex justify-center items-center space-x-2 
     
      max-md:flex-col max-md:justify-center max-md:space-x-0 max-md:space-y-8">
        <div className=" max-md:text-center max-lg:mx-10">
          <h2 className="text-3xl font-medium mb-4">Our Client</h2>
          <p className='text-md font-normal text-gray-500 w-9/12  max-md:1/2 max-md:mx-auto max-md:text-center'>Several selected clients, who already believe in our service.</p>
        </div>
        <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2  max-sm:grid-cols-1">
          <div className="-mt-2">
            <img src={google} alt="client" />
          </div>
          <div className="-mt-3">
            <img src={airbnb} alt="client" />
          </div>
          <div className="">
            <img src={uber} alt="client" />
          </div>
          <div className="">
            <img src={amzon} alt="client" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
