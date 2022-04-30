import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('black', 'black')(props),
      bg: mode('black', 'black')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('black', 'black')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;