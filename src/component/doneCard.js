import React from "react";
import { Box, HStack, Image, Text, Button, Icon } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Memberinfo from "./memberinfo";

const DoneCard = ({
  heading,
  text,
  imageSource,
  info,
  imageSourceOne,
  imageSourceTwo,
}) => {
  return (
    <Box bg="#FFFFFF" p={5} borderRadius={16}>
      <HStack justifyContent="space-between" p={3} alignItems="center">
        <Button bg="#68B266">{text}</Button>
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

export default DoneCard;
