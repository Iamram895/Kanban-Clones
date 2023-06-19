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
}) => {
  return (
    <Box bg="#FFFFFF" p={5} mt={4} borderRadius={16} transform={rotation}>
      <CardInfo
        heading={heading}
        text={text}
        imageSourceOne={imageSourceOne}
        imageSourceTwo={imageSourceTwo}
        info={info}
        rotation
        buttonBg="#D58D49"
        position="absolute"
      />
    </Box>
  );
};

export default TodoCard;
