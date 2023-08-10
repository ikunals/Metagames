import { Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import chain from "../assets/chain.png";

function Chain() {
  return (
    <div class="flex  items-center flex-col h-auto ">
      <div class="text-center font-bold text-white text-[40px] mr-[16%] ml-[20%] mt-[5%]">
        Take your game & our <br /> tools anywhere
      </div>
      <div class=" text-gray-300 text-center mr-[16%] ml-[20%] mt-[1.5em] text-[18px]">
        Build programmatically using your preferred languages across popular{" "}
        <br />
        blockchains with one vertically integrated infrastructure suite -
        MetaFab.
      </div>
      <button class="flex mt-6 text-white bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[16em]">
        View Our Developer SDKs
        <BsArrowRight class="ml-2" />
      </button>
      <Image src={chain} />
    </div>
  );
}

export default Chain;
