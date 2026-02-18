import "@/styles/tailwind.css";
import "@/styles/globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#64748b",
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
