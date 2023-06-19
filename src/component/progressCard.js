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
}) => {
  return (
    <Box bg="#FFFFFF" p={5} mt={4} borderRadius={16} transform={rotation}>
      <CardInfo
        heading={heading}
        text={text}
        imageSourceOne={imageSourceOne}
        imageSourceTwo={imageSourceTwo}
        info={info}
        rotation={rotation}
        buttonBg="#D58D49"
      />
    </Box>
  );
};

export default ProgressCard;
