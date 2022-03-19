import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bed600',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
    secondary: {
      main: '#70b1cd',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
