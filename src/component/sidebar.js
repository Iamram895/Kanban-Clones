import React from "react";
import {
  HStack,
  Image,
  Stack,
  Icon,
  Text,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import { PlusSquareIcon } from "@chakra-ui/icons";
import ThoughtTime from "./thoughtCard";
import { BsThreeDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <Box borderRight="1px solid #DBDBDB" height={"full"}>
      <Stack p={10}>
        <HStack gap={5}>
          <Image src="/icons/home.svg" />
          <Text color="#787486">Home</Text>
        </HStack>
        <HStack gap={5}>
          <Image src="/icons/messages.svg" />
          <Text color="#787486">Messages</Text>
        </HStack>
        <HStack gap={5}>
          <Image src="/icons/tasks.svg" />
          <Text color="#787486">Tasks</Text>
        </HStack>
        <HStack gap={5}>
          <Image src="/icons/users.svg" />
          <Text color="#787486">Members</Text>
        </HStack>
        <HStack gap={5}>
          <Icon as={IoSettingsOutline} w={6} h={6} color="#787486" />
          <Text color="#787486">Settings</Text>
        </HStack>
        <Box mt={5}>
          <Box border="1px solid #DBDBDB" />
        </Box>
        <Stack w={200} py={10}>
          <HStack justifyContent="space-between">
            <Text color="#787486" fontWeight={700}>
              My Projects
            </Text>
            <PlusSquareIcon color="#787486" />
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack cursor="pointer">
              <Icon as={VscCircleFilled} w={4} h={4} color="#7AC555" />
              <Text color="#0D062D" fontWeight={600}>
                Mobile App
              </Text>
            </HStack>

            <Icon as={BsThreeDots} bgSize={8} />
          </HStack>
          <HStack>
            <Icon as={VscCircleFilled} w={4} h={4} color="#FFA500" />
            <Text color="#787486">Website Redesign</Text>
          </HStack>
          <HStack>
            <Icon as={VscCircleFilled} w={4} h={4} color=" #E4CCFD" />
            <Text color="#787486">Design System</Text>
          </HStack>
          <HStack>
            <Icon as={VscCircleFilled} w={4} h={4} color="#76A5EA" />
            <Text color="#787486">Wireframes</Text>
          </HStack>
        </Stack>
        <Box py={10}>
          <ThoughtTime />
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
