import React from "react";
import { Box, HStack, Text, Button, Icon, Image } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Memberinfo from "./memberinfo";

const Cards = ({ heading, text, info, imageSourceOne, imageSourceTwo }) => {
  return (
    <Box bg="#FFFFFF" p={5} mt={4} borderRadius={16}>
      <HStack justifyContent="space-between" p={3}>
        <Button bg="#D58D49">{text}</Button>
        <Icon as={BsThreeDots} bgSize={8} />
      </HStack>
      <Text fontSize="2xl">{heading}</Text>
      <Box justifyContent="center" alignItems="center" display="flex">
        <HStack flexWrap="wrap">
          <Image src={imageSourceOne} />
          <Image src={imageSourceTwo} />
        </HStack>

        <Text>{info}</Text>
      </Box>

      <Box>
        <Memberinfo />
      </Box>
    </Box>
  );
};

export default Cards;
