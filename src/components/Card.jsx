import React from 'react';


const Card = (props) => {
  return (
    <div className="max-w-[310px] max-h-[380px] mx-auto ">
      <div className="bg-white   border rounded-3xl">
        <div className="text-center px-4 py-10  ">
          <div className="bg-blue-100 p-2 mb-4 rounded-xl w-20 h-20 mx-auto">
            <img src={props.src} alt="card" />
          </div>
          <div className="w-11/12">
            <h2 className="text-2xl font-semibold ">{props.heading}</h2>
            <p className="text-md font-semibold tracking-wide text-gray-500 mt-4">
             {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
