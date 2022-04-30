import React from 'react';
import {useColorMode, Box, IconButton} from '@chakra-ui/react';

export default function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box textAlign="right" py={4} mr={12}>
        <IconButton
          //toggle icon based on color mode
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            aria-label="Toggle dark mode"
            //add label text to button
            label={'POG'}
            onClick={toggleColorMode}
        //   variant="ghost"
        />
      </Box>
    );
  }