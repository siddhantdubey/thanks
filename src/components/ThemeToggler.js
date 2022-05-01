import React from 'react';
import {useColorMode, Box, IconButton} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

export default function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box textAlign="right" py={4} mr={12}>
        <IconButton
          //toggle icon based on color mode
            icon={colorMode === 'light' ? <SunIcon/>: <MoonIcon/>}
            aria-label="Toggle dark mode"
            onClick={toggleColorMode}
        //   variant="ghost"
        />
      </Box>
    );
  }