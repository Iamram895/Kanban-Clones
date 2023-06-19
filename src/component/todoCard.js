import React from "react";
import { Box } from "@chakra-ui/react";

import CardInfo from "./cardInfo";

const TodoCard = ({
  heading,
  text,
  info,
  imageSourceOne,
  imageSourceTwo,
  rotation,
  dottedBoxBg,
  dottedBorder,
  dottedBoxRadius,
  linearTransform,
}) => {
  return (
    <Box p={5}>
      <CardInfo
        heading={heading}
        text={text}
        imageSourceOne={imageSourceOne}
        imageSourceTwo={imageSourceTwo}
        info={info}
        buttonBg="#D58D49"
        rotation={rotation}
        dottedBoxBg={dottedBoxBg}
        dottedBorder={dottedBorder}
        dottedBoxRadius={dottedBoxRadius}
        linearTransform={linearTransform}
      />
    </Box>
  );
};

export default TodoCard;
