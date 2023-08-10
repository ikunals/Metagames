import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  return (
    <div class="flex items-center flex-col justify-center bg-purple-400 h-[60vh]">
      <div class="text-center font-bold text-white text-[40px] mr-[16%] ml-[20%] ">
        Ready to build? <br /> Get started today
      </div>
      <div class="flex flex-row gap-4">
        <button class="flex mt-6 text-white bg-black items-center justify-center  border-2  rounded-xl font-bold  border-orange-800 w-[14em]">
          Get Started, We're free
          <BsArrowRight class="ml-2" />
        </button>
        <button class="flex mt-6 text-white bg-black items-center justify-center  border-2  rounded-xl font-bold  border-orange-800 w-[14em]">
          View our dev docs <BsArrowRight class="ml-2" />
        </button>
        <button class="flex mt-6 text-white bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[14em]">
          Schedule an intro call <BsArrowRight class="ml-2" />
        </button>
        <button class="flex mt-6 text-white bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[10em]">
          Join discord
          <BsArrowRight class="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
