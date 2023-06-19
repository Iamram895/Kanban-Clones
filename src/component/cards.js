import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Box, HStack, Text, Icon, Card } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { VscCircleFilled } from "react-icons/vsc";
import TodoCard from "./todoCard";
import ProgressCard from "./progressCard";
import DoneCard from "./doneCard";

const Cards = ({
  heading,
  isShowButton,
  color,
  isTodoCard,
  isProgressCard,
  isDoneCard,
  borderColor,
  todoCards,
  progressCards,
  doneCards,
}) => {
  return (
    <Box bg="#F5F5F5" borderRadius={16} p={5}>
      <HStack justifyContent="space-between">
        <HStack>
          {" "}
          <Icon as={VscCircleFilled} color={color} />
          <Text>{heading}</Text>
          <Box w={5} h={5} borderRadius={10} bg="#E0E0E0"></Box>
        </HStack>

        {isShowButton && (
          <Box
            bg="rgba(80, 48, 229, 0.2)"
            borderRadius={5}
            w={7}
            h={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SmallAddIcon color="#5030E5" />
          </Box>
        )}
      </HStack>
      <Box mt={5} pb={5}>
        <Box bg="#800080" border={`3px solid ${borderColor}`} />
      </Box>

      {isTodoCard && (
        <Box>
          <Droppable droppableId="todo">
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
                {todoCards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoCard
                          text={card.text}
                          heading={card.heading}
                          info={card.info}
                          imageSourceOne={card.imageSourceOne}
                          imageSourceTwo={card.imageSourceTwo}
                          rotation={card.rotation}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Box>
      )}

      {isProgressCard && (
        <Box>
          <Droppable droppableId="progress">
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
                {progressCards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {card.heading === "progresscard" ? (
                          <div>
                            <ProgressCard
                              text={card.text}
                              heading={card.heading}
                              imageSourceOne={card.imageSourceOne}
                              imageSourceTwo={card.imageSourceTwo}
                              info={card.info}
                              rotation={card.rotation}
                            />
                          </div>
                        ) : (
                          <ProgressCard
                            text={card.text}
                            heading={card.heading}
                            imageSourceOne={card.imageSourceOne}
                            imageSourceTwo={card.imageSourceTwo}
                            info={card.info}
                            rotation={card.rotation}
                          />
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Box>
      )}

      {isDoneCard && (
        <Box>
          <Droppable droppableId="done">
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
                {doneCards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DoneCard
                          text={card.text}
                          heading={card.heading}
                          imageSourceOne={card.imageSourceOne}
                          imageSourceTwo={card.imageSourceTwo}
                          info={card.info}
                          rotation={card.rotation}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Box>
      )}
    </Box>
  );
};

export default Cards;
