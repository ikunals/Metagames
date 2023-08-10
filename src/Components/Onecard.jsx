import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Onecard(props) {
  return (
    <Card maxW="md" background={"rgba(0, 0, 0, 0.5)"} color={"white"}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4">
            <Avatar name="Segun Adebayo" src={props.image} />
            <Box>
              <Heading size="sm">{props.name}</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
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
        <Text class="flex items-center ">
          Learn About Shops&Crafting <BsArrowRight class="ml-2" />{" "}
        </Text>
      </CardFooter>
    </Card>
  );
}

export default Onecard;
