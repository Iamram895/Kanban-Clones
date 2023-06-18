import React from "react";
import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { BsFillLightbulbFill } from "react-icons/bs";

const ThoughtTime = () => {
  return (
    <Box>
      <Box
        bg="#F5F5F5"
        p={5}
        w={{ base: "90%", md: 206 }}
        borderRadius={16}
        mx="auto"
        position="relative"
      >
        <Text fontWeight={500} textAlign="center">
          Thoughts Time
        </Text>
        <Text textAlign="center" p={2}>
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </Text>

        <Box
          position="absolute"
          bg="#F5F5F5"
          borderRadius="50%"
          textAlign="center"
          left="50%"
          transform="translateX(-50%)"
          top={-8}
          p={3}
        >
          <Box>
            <Box>
              <Icon as={BsFillLightbulbFill} color="#FBCB18" boxSize={8} />
            </Box>
          </Box>
        </Box>

        <Box bg="#FFFFFF">
          <Text fontWeight={500} color="#787486" textAlign="center" p={4}>
            Write a message
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ThoughtTime;
