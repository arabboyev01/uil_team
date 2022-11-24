import type { AppProps } from 'next/app'
import {theme} from "../theme";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "../styles/globals.css";
import {ContextProvider} from "../src/context/contextProvider";
function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
      </ThemeProvider>
  )
}

export default MyApp;
