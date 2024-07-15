"use client";

import React, { useState } from "react";
import Validation from "./Validation";

const Forms = () => {
  const [value, setValue] = useState({
    fullname: "",
    lastname: "",
    email: "",
    textarea: "",
  });

  const [error, setErrors] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    const errors = Validation(value);
    setErrors(errors);
};
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col justify-start bg-white lg:w-[45%] h-[660px] sm:w-full rounded-lg p-4"
      >
        <h1 className=" text-xl font-semibold text-[#283B3F] mb-2">Contact Us</h1>
        <div className="lg:flex gap-3">
          <div className="w-full">
            <label htmlFor="Username" className="text-xs text-[#656A6A]">First Name *</label>
            <input
              value={value.fullname}
              onChange={handleOnChange}
              type="text"
              className={`border ${error.fullname ? 'border-red-500' : 'border-[#0C7D6A]'} rounded-md 
              flex justify-center items-center w-full h-9 mt-2 mb-2`}
              name="fullname"
            />
            {error.fullname && <p className="text-xs text-red-600">{error.fullname} </p>}
          </div>
          <div className="w-full">
            <label htmlFor="Username" className="text-xs text-[#656A6A]">Last Name *</label>
            <input
              value={value.lastname}
              onChange={handleOnChange}
              type="text"
              className={`border ${error.lastname ? 'border-red-500' : 'border-[#0C7D6A]'} rounded-md 
              flex justify-center items-center w-full h-9 mt-2 mb-2`}
              name="lastname"
            />
            {error.lastname && <p className="text-xs text-red-600">{error.lastname} </p>}
          </div>
        </div>
        <label htmlFor="Username" className="text-xs text-[#656A6A] mt-3">Email Address *</label>
        <input
          value={value.email}
          onChange={handleOnChange}
          type="text"
          className={`border border-[#959B99] ${error.email ? 'border-red-500' : 'border-[#0C7D6A]'} rounded-md h-10 mt-2 mb-2`}
          name="email"
        />
        {error.email && <p className="text-xs text-red-600">{error.email} </p>}
        <label htmlFor="Username" className="text-xs text-[#656A6A]">Query Type *</label>
        <div className="lg:flex gap-3">
          <div className="border border-[#959B99] rounded-md flex w-full justify-start items-center h-10 p-3 mt-3 gap-3 hover:bg-[#E0F1E7]">
            <input
              onChange={handleOnChange}
              type="radio"
              className="border border-[#959B99]"
            />
            <label htmlFor="Username">General Enquiry</label>
          </div>
          <div className="border border-[#959B99] rounded-md w-full flex justify-start items-center h-10 p-3 mt-3  gap-3 hover:bg-[#E0F1E7]">
            <input
              onChange={handleOnChange}
              type="radio"
              className="border border-[#959B99] checked:bg-green-500"
            />
            <label htmlFor="Username" >Support Request</label>
          </div>
        </div>
        <label htmlFor="Username" className="text-xs text-[#656A6A] mt-4">Message *</label>
        <input
          value={value.textarea}
          onChange={handleOnChange}
          type="textarea"
          className={`border border-[#959B99] ${error.textarea ? 'border-red-500' : 'border-[#0C7D6A]'} rounded-md h-40 mt-2`}
          name="textarea"
        />
        {error.email && <p className="text-xs text-red-600 flex justify-start items-center ">{error.email} </p>}
        <div className="flex justify-start  items-center gap-3 mb-5 mt-5">
        <input
          type="checkbox"
          className="border border-[#959B99] rounded-md checked:bg-green-500"
        />
         <p className="text-xs text-[#656A6A]">
              I consent to being contacted by the team *
            </p>
        </div>
        <button
          className="flex justify-center items-center bg-[#0C7D6A] rounded-md text-white font-medium text-sm h-12"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
