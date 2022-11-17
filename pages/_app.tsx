import type { AppProps } from 'next/app'
import {theme} from "../theme";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp;
