import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsArrowRight } from "react-icons/bs";

function Navbar() {
  return (
    <div class=" flex mt-2 items-center text-white h-16 border-solid ">
      <ul class="flex text-gray-400 text-md  flex-row items-center gap-6 ml-[3em] ">
        <li>Docs</li>
        <li>SDks</li>
        <li>API Refrences</li>
        <li>Support</li>
        <li>
          <AiOutlineTwitter class="h-10 w-8 " />
        </li>{" "}
        <li>
          {" "}
          <BsDiscord class="h-10 w-8 " />
        </li>
      </ul>

      <h1 class="ml-[4em] text-3xl "> METAGAMES</h1>

      <button class="absolute right-[15em]">Login</button>
      <button class="absolute flex items-center justify-center right-[3em] border-2 p-2 rounded-xl font-bold  border-orange-800 w-[10em]">
        Get Started <BsArrowRight class="ml-2" />
      </button>
    </div>
  );
}

export default Navbar;
