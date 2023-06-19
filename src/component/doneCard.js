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
}) => {
  return (
    <Box bg="#FFFFFF" p={5} borderRadius={16} transform={rotation} mt={5}>
      <CardInfo
        heading={heading}
        text={text}
        imageSourceOne={imageSourceOne}
        imageSourceTwo={imageSourceTwo}
        info={info}
        rotation
        buttonBg="#68B266"
      />
    </Box>
  );
};

export default DoneCard;
