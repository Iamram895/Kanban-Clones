import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Search2Icon,
  ChevronDownIcon,
  ArrowLeftIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const showContents = useBreakpointValue({ base: false, md: true });

  return (
    <Box borderBottom="1px solid #DBDBDB">
      <HStack justifyContent="space-between" p={5} alignItems="center">
        <HStack justifyContent="space-between" px={10} gap={6}>
          <HStack pos="relative">
            <Image src="/icons/vuesax.svg" />
            <Text color="#0D062D">Project M.</Text>
          </HStack>
          <ArrowLeftIcon color="#787486" boxSize={6} />
        </HStack>

        {showContents && (
          <Box>
            <InputGroup bg="#F5F5F5">
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="search" placeholder="Search for anything..." />
            </InputGroup>
          </Box>
        )}

        <HStack gap={10}>
          {showContents && (
            <HStack>
              <Box>
                <Image src="/icons/calender.svg" />
              </Box>
              <Box>
                <Image src="/icons/message.svg" />
              </Box>
              <Box>
                <Image src="/icons/notification.svg" />
              </Box>
            </HStack>
          )}

          {showContents && (
            <HStack>
              <Box>
                <Text>Anima Agrawal</Text>
                <Text fontSize="sm">U.P, India</Text>
              </Box>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />

              <Box>
                <ChevronDownIcon boxSize={6} color="#787486" />
              </Box>
            </HStack>
          )}

          {!showContents && (
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onToggle}
              variant="ghost"
              size="md"
            />
          )}
        </HStack>
      </HStack>
      {!showContents && isOpen && (
        <Box p={5}>
          <HStack justifyContent="space-between" flexWrap="wrap">
            <InputGroup bg="#F5F5F5">
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="search" placeholder="Search for anything..." />
            </InputGroup>
            <HStack>
              <Box>
                <Image src="/icons/calender.svg" />
              </Box>
              <Box>
                <Image src="/icons/message.svg" />
              </Box>
              <Box>
                <Image src="/icons/notification.svg" />
              </Box>
            </HStack>
            <HStack>
              <Box>
                <Text>Anima Agrawal</Text>
                <Text fontSize="sm">U.P, India</Text>
              </Box>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />

              <Box>
                <ChevronDownIcon boxSize={6} color="#787486" />
              </Box>
            </HStack>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
