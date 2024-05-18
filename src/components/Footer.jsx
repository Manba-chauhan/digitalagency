import React from 'react';

const Footer = () => {
  return (
    <div className="relative max-w-[1200px] max-h-[400px] mx-auto mt-60">
      <div className="flex justify-between items-center max-md:flex-col">
        <div className="w-2/4 mx-auto max-md:w-full max-md:ml-5">
          <h3 className="text-xl text-black font-bold">A+ Studio</h3>
          <p className="text-sm text-zinc-500 font-semibold max-sm:w-10/12">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <ul className="flex space-x-8 mt-6 mb-6 max-sm:justify-center max-sm:space-x-12">
            <li className="text-3xl text-blue-700">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li className="text-3xl text-blue-500">
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li className="text-3xl text-red-500">
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
        <div className="">
          <div
            className="grid grid-cols-4 gap-20 
          max-lg:gap-5 max-md:grid-cols-2 max-sm:gri-cols-1 max-md:hidden"
          >
            <div className="">
              <h1 className="text-lg font-bold">What We Do</h1>
              <ul>
                <li className="text-sm text-zinc-600 font-medium">
                  Web Desige{" "}
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  {" "}
                  App Design
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  social Media Manag
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  Market Analysis
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  Project App Design
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-bold">What We Do</h1>
              <ul>
                <li className="text-sm text-zinc-600 font-medium">
                  Web Desige{" "}
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  {" "}
                  App Design
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  social Media Manag
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  Market Analysis
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-bold">What We Do</h1>
              <ul>
                <li className="text-sm text-zinc-600 font-medium">
                  Web Desige{" "}
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  {" "}
                  App Design
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  social Media Manag
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  Market Analysis
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-bold">What We Do</h1>
              <ul>
                <li className="text-sm text-zinc-600 font-medium">
                  Web Desige{" "}
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  {" "}
                  App Design
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  social Media Manag
                </li>
                <li className="text-sm text-zinc-600 font-medium">
                  Market Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
