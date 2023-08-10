import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Action() {
  return (
    <div class="flex  items-center flex-col h-auto ">
      <div class="text-center font-bold text-white text-[40px] mr-[16%] ml-[20%] mt-[5%]">
        We put in the time, money & <br /> headache, so you don't have to
      </div>
      <div class=" text-gray-300 text-center mr-[16%] ml-[20%] mt-[1.5em] text-[18px]">
        Reliable, scalable & secure systems; battle tested to handle 100,000's
        of active <br /> players and 10,000+ transactions per second, per game.
      </div>
      <button class="flex mt-6 text-white bg-black items-center justify-center  border-2 p-2 rounded-xl font-bold  border-orange-800 w-[10em]">
        Learn More <BsArrowRight class="ml-2" />
      </button>

      <Grid
        mt={"5em"}
        w={"70%"}
        ml={"5%"}
        gap={5}
        templateColumns={{ lg: "repeat(2, 1fr)" }}
      >
        <Card w={"md"} background={"rgba(0, 0, 0, 0.5)"} color={"white"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4">
                <Box>
                  <Heading size="sm">
                    <Text>Get to Market Faster</Text>
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Offset months of ground-up smart contract and systems development
              with our simple but powerful REST APIs and SDKs that cover 95% of
              blockchain implementation and design patterns for games in just a
              few lines of code.
            </Text>
          </CardBody>
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Text class="flex items-center font-bold">
              View Our SDK's <BsArrowRight class="ml-2" />{" "}
            </Text>
          </CardFooter>
        </Card>
        <Card w={"md"} background={"rgba(0, 0, 0, 0.5)"} color={"white"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4">
                <Box>
                  <Heading size="sm">
                    <Text>Focus on Building a Great Game</Text>
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Reallocate the 10's to 100's of thousands saved on blockchain R&D
              toward more developers, designers, and areas that scale, not
              toward building, writing, rewriting & re-rewriting efficient and
              immutable contracts & systems.
            </Text>
          </CardBody>
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Text class="flex items-center font-bold">
              View Our Documentation <BsArrowRight class="ml-2" />{" "}
            </Text>
          </CardFooter>
        </Card>
      </Grid>
    </div>
  );
}

export default Action;
