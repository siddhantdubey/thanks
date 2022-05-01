import React from "react";
//import chakra stuff
import { Box, Button, Text, Flex, useColorMode } from "@chakra-ui/react";

import "../styles/letter.css";

export default function Letter(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      {colorMode === "light" ? (
        <Box className="letter-light">
          <Text>
            {props.letter}
          </Text>
        </Box>
      ) : (
        <Box className="letter-dark">
          <Text>
            {props.letter}
          </Text>
        </Box>
      )}
    </div>
  );
}
