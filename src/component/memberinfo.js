import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Icon,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { TbFolderMinus } from "react-icons/tb";

const Memberinfo = () => {
  return (
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
  );
};

export default Memberinfo;
