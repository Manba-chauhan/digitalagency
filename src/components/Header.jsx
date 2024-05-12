import React from 'react';

const Header = () => {
  return (
    <div className="w-full  ">
      <div className="flex justify-between items-center text-black shadow-sm px-10 py-6 
      max-sm:px-2">
        <div className="flex justify-center items-center space-x-2 ">
          <span className="text-4xl text-black font-extrabold max-md:text-3xl">
            A+
          </span>
          <h1 className="text-3xl text-black font-extrabold max-md:2xl">
            Studio
          </h1>
        </div>
        <div className="max-md:hidden">
          <ul className="flex space-x-20">
            <li className='text-md font-medium hover:text-violet-400 cursor-pointer'>Home</li>
            <li className='text-md font-medium hover:text-violet-400 cursor-pointer'>About</li>
            <li className='text-md font-medium hover:text-violet-400 cursor-pointer'>Services</li>
            <li className='text-md font-medium hover:text-violet-400 cursor-pointer'>Portfolio</li>
            <li className='text-md font-medium hover:text-violet-400 cursor-pointer'>Contact</li>
          </ul>
        </div>
        <div className="md:hidden">
          <span className='text-3xl'>
            <i class="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
