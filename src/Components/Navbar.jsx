import { Box, Button, HStack, List, ListItem, Stack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsArrowRight } from "react-icons/bs";

function Navbar() {
  return (
    <Stack>
      <div class=" flex mt-2 items-center text-white h-16 border-solid ">
        <List
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          color={"gray.400"}
          gap={6}
          ml={"3em"}
        >
          <ListItem>Docs</ListItem>
          <ListItem>SDks</ListItem>
          <ListItem>API Refrences</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>
            {" "}
            <AiOutlineTwitter class="h-10 w-8 " />
          </ListItem>
          <ListItem>
            {" "}
            <BsDiscord class="h-10 w-8 " />
          </ListItem>
        </List>

        <h1 class="ml-[4em] text-3xl "> METAGAMES</h1>

        <Button
          display={{ base: "none", lg: "block" }}
          class="absolute right-[15em]"
        >
          Login
        </Button>
        <Button
          display={{ base: "none", lg: "block" }}
          class="absolute flex items-center justify-center right-[3em] border-2 p-2 rounded-xl font-bold  border-orange-800 w-[10em]"
        >
          Get Started <BsArrowRight class="ml-2" />
        </Button>
      </div>
    </Stack>
  );
}

export default Navbar;
