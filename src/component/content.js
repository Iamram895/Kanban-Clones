import React, { useState } from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Flex,
  Divider,
  Icon,
  Avatar,
  Center,
  AvatarGroup,
} from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import { SmallAddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { TbPencil } from "react-icons/tb";
import { FiLink2 } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import TodoCard from "./card";
const Content = () => {
  const [todoCards, setTodoCards] = useState([
    {
      id: "1",
      text: "Low",
      heading: "Brainstorming",
      info: "Brainstorming brings team members' diverse experience into play. ",
      imageSourceOne: "",
      imageSourceTwo: "",
    },
    {
      id: "2",
      text: "High",
      heading: "Research",
      info: "User research helps you to create an optimal product for users.",
      imageSourceOne: "",
      imageSourceTwo: "",
    },
    {
      id: "3",
      text: "High",
      heading: "Wireframes",
      info: "Low fidelity wireframes include the most basic content and visuals.",
      imageSourceOne: "",
      imageSourceTwo: "",
    },
  ]);
  const [progressCards, setProgressCards] = useState([
    {
      id: "progress-card-1",
      text: "Low",
      heading: "Onboarding Illustrations",
      imageSourceOne: "/background/bording.svg",
      imageSourceTwo: "",
      info: "",
    },
    {
      id: "progress-card-2",
      text: "Low",
      heading: "Moodboard",
      imageSourceOne: "/background/tree.svg",
      imageSourceTwo: "/background/dog.svg",
      info: "",
    },
  ]);

  const [doneCards, setDoneCards] = useState([
    {
      id: "done-card-1",
      text: "Completed",
      heading: "Mobile App Design",
      imageSourceOne: "/background/mobile.svg",
      imageSourceTwo: "",
    },
    {
      id: "done-card-2",
      text: "Completed",
      heading: "Design System",
      info: "It just needs to adapt the UI from what you did before ",
      imageSourceOne: "",
      imageSourceTwo: "",
    },
  ]);
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // Not a valid drop

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    if (sourceColumn === destinationColumn) {
      // Reorder cards in the same column
      const column =
        sourceColumn === "todo"
          ? todoCards
          : sourceColumn === "progress"
          ? progressCards
          : doneCards;

      const newCards = Array.from(column);
      const [draggedCard] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, draggedCard);

      if (sourceColumn === "todo") setTodoCards(newCards);
      else if (sourceColumn === "progress") setProgressCards(newCards);
      else setDoneCards(newCards);
    } else {
      // Move card between columns
      const sourceColumnCards =
        sourceColumn === "todo"
          ? todoCards
          : sourceColumn === "progress"
          ? progressCards
          : doneCards;
      const destinationColumnCards =
        destinationColumn === "todo"
          ? todoCards
          : destinationColumn === "progress"
          ? progressCards
          : doneCards;

      const newSourceCards = Array.from(sourceColumnCards);
      const newDestinationCards = Array.from(destinationColumnCards);

      const [draggedCard] = newSourceCards.splice(source.index, 1);
      newDestinationCards.splice(destination.index, 0, draggedCard);

      if (sourceColumn === "todo") {
        setTodoCards(newSourceCards);
        if (destinationColumn === "progress")
          setProgressCards(newDestinationCards);
        else setDoneCards(newDestinationCards);
      } else if (sourceColumn === "progress") {
        setProgressCards(newSourceCards);
        if (destinationColumn === "todo") setTodoCards(newDestinationCards);
        else setDoneCards(newDestinationCards);
      } else {
        setDoneCards(newSourceCards);
        if (destinationColumn === "todo") setTodoCards(newDestinationCards);
        else setProgressCards(newDestinationCards);
      }
    }
  };

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={5}
        flexWrap="wrap"
      >
        <HStack>
          <Text
            fontWeight={600}
            color="#0D062D"
            fontSize="5xl"
            textAlign="center"
          >
            Mobile App
          </Text>
          <Box
            bg="rgba(80, 48, 229, 0.2)"
            borderRadius={5}
            w={7}
            h={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={TbPencil} color="#5030E5" bgSize={6} />
          </Box>

          <Box
            bg="rgba(80, 48, 229, 0.2)"
            borderRadius={5}
            w={7}
            h={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FiLink2} color="#5030E5" bgSize={6} />
          </Box>
        </HStack>
        <HStack>
          <Box
            bg="rgba(80, 48, 229, 0.2)"
            borderRadius={5}
            w={5}
            h={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SmallAddIcon color="#5030E5" />
          </Box>
          <Text color="#5030E5">Invite</Text>
          <AvatarGroup size="md" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </HStack>
      </Flex>

      <HStack justifyContent="space-between" px={5} py={10} flexWrap="wrap">
        <HStack>
          <HStack border="1px solid #787486" borderRadius="6px" p={2}>
            <Icon as={BiFilterAlt} color="#787486" />
            <Text color=" #787486">Filter</Text>
            <ChevronDownIcon />
          </HStack>

          <HStack border="1px solid #787486" borderRadius="6px" p={2}>
            <Image src="/icons/calendarIcon.svg" alt="cal" w={5} />
            <Text color=" #787486">Today</Text>
            <ChevronDownIcon />
          </HStack>
        </HStack>

        <HStack>
          <HStack border="1px solid #787486" borderRadius="6px" p={2}>
            <Image src="/icons/users.svg" alt="cal" w={5} />
            <Text color=" #787486">Share</Text>
          </HStack>

          <Image src="/icons/pauseIcon.svg" alt="cal" w={12} />

          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>

          <Image src="/icons/home.svg" alt="cal" w={12} />
        </HStack>
      </HStack>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex justify="space-between" gap={6} flexWrap="wrap">
          <Box
            width={{
              base: "100%",
              md: "calc(66.333% - 2rem)",
              lg: "calc(66.333% - 2rem)",
              xl: "calc(33.333% - 2rem)",
            }}
          >
            <TodoCard
              heading="To Do"
              isShowButton={true}
              color="#5030E5"
              borderColor="#5030E5"
              isTodoCard={true}
              isProgressCard={false}
              isDoneCard={false}
              todoCards={todoCards}
            />
          </Box>
          <Box
            width={{
              base: "100%",
              md: "calc(66.333% - 2rem)",
              lg: "calc(66.333% - 2rem)",
              xl: "calc(33.333% - 2rem)",
            }}
          >
            <TodoCard
              heading="In Progress"
              isShowButton={false}
              color="#FFA500"
              borderColor="#FFA500"
              isTodoCard={false}
              isProgressCard={true}
              isDoneCard={false}
              progressCards={progressCards}
            />
          </Box>
          <Box
            width={{
              base: "100%",
              md: "calc(66.333% - 2rem)",
              lg: "calc(66.333% - 2rem)",
              xl: "calc(33.333% - 2rem)",
            }}
          >
            <TodoCard
              heading="Done"
              isShowButton={false}
              color="#76A5EA"
              borderColor="#8BC48A"
              isTodoCard={false}
              isProgressCard={false}
              isDoneCard={true}
              doneCards={doneCards}
            />
          </Box>
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default Content;
