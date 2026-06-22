import type {ReactNode} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, StyledEngineProvider, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b3261e',
    },
    secondary: {
      main: '#2563eb',
    },
  },
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 8,
  },
});

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
