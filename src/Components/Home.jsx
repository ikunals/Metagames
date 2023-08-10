import React from "react";
import { BsArrowRight } from "react-icons/bs";
import hero from "../assets/hero.png";
import { Image } from "@chakra-ui/react";

function Home() {
  return (
    <div class="flex  items-center  flex-col h-auto ">
      <div class="text-center font-bold text-white text-[54px] mr-[16%] ml-[20%] mt-[5%]">
        Frictionless blockchain <br /> games build with MetaFab
      </div>
      <div class=" text-gray-400 text-center mr-[16%] ml-[20%] mt-[1.5em] text-[18px]">
        The free, end-to-end, self-serve solution for games and gamified apps to{" "}
        <br />
        integrate powerful blockchain infrastructure in minutes, not months.
      </div>
      <div class="flex text-white mt-5 gap-6">
        <button class="flex bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[12em]">
          Sign up, We're Free <BsArrowRight class="ml-2" />
        </button>
        <button class=" flex bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[12em]">
          Book an Intro call <BsArrowRight class="ml-2" />
        </button>
      </div>
      <Image src={hero} h={"27em"} mt={10} />

      <div class="text-center font-bold text-white text-[44px] mr-[16%] ml-[20%] mt-[5%]">
        The solutions we wish we had when building our games
      </div>
      <div class=" text-gray-400 text-center mr-[16%] ml-[20%] mt-[1.5em] text-[18px]">
        Interacting with blockchain systems should feel familiar for both
        players and <br /> developers. Read more about how our suite of tools
        makes this possible:
      </div>
      <button class="flex mt-6 text-white bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[16em]">
        View All Developer Docs <BsArrowRight class="ml-2" />
      </button>
    </div>
  );
}

export default Home;
