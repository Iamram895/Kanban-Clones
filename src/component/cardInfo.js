import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Button,
  Icon,
  Avatar,
  AvatarGroup,
  position,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

import { TbFolderMinus } from "react-icons/tb";

const CardInfo = ({
  heading,
  text,
  imageSourceOne,
  imageSourceTwo,
  info,
  rotation,
  buttonBg,
  position,
}) => {
  return (
    <Box
      bg="#FFFFFF"
      p={5}
      mt={4}
      borderRadius={16}
      transform={rotation}
      left={3}
    >
      <HStack justifyContent="space-between" py={3} alignItems="center">
        <Button bg={buttonBg}>{text}</Button>
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
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={7}
          py={5}
          flexWrap="wrap"
        >
          <AvatarGroup size="md" max={3}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </AvatarGroup>
          <HStack>
            <Image src="/icons/messages.svg" alt="message" color="#787486" />
            <Text color="#787486">12</Text>
            <Text color="#787486">Comments</Text>
          </HStack>
          <HStack>
            <Icon as={TbFolderMinus} color="#787486" boxSize={6} />
            <Text color="#787486">0</Text>
            <Text color="#787486">files</Text>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default CardInfo;
