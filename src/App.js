import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Content from "./component/content";

function App() {
  return (
    <Box
      boxShadow="0px 44px 84px 6px #D8D9DB"
      borderRadius={30}
      p={{ base: 2, md: 4 }}
    >
      <Box>
        <Header />
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box>
          <Sidebar />
        </Box>
        <Box w="100%" ml={{ base: 0, md: 4 }}>
          <Content />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
