import React from "react";
import { Box } from "@chakra-ui/react";
import CardInfo from "./cardInfo";

const DoneCard = ({
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
    <Box p={5} borderRadius={16} transform={rotation} mt={5}>
      <CardInfo
        heading={heading}
        text={text}
        imageSourceOne={imageSourceOne}
        imageSourceTwo={imageSourceTwo}
        info={info}
        rotation={rotation}
        buttonBg="#68B266"
        dottedBoxBg={dottedBoxBg}
        dottedBorder={dottedBorder}
        dottedBoxRadius={dottedBoxRadius}
        linearTransform={linearTransform}
      />
    </Box>
  );
};

export default DoneCard;
