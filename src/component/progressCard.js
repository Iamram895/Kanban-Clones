import React from "react";
import { Box } from "@chakra-ui/react";
import CardInfo from "./cardInfo";

const ProgressCard = ({
  heading,
  text,
  imageSourceOne,
  imageSourceTwo,
  info,
  rotation,
  dottedBoxBg,
  dottedBorder,
  dottedBoxRadius,
  linearTransform,
}) => {
  return (
    <Box p={5} mt={4} borderRadius={16}>
      <CardInfo
        heading={heading}
        text={text}
        imageSourceOne={imageSourceOne}
        imageSourceTwo={imageSourceTwo}
        info={info}
        rotation={rotation}
        buttonBg="#D58D49"
        dottedBoxBg={dottedBoxBg}
        dottedBorder={dottedBorder}
        dottedBoxRadius={dottedBoxRadius}
        linearTransform={linearTransform}
      />
    </Box>
  );
};

export default ProgressCard;
