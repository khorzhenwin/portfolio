import "../styles/globals.css";
import { extendTheme, ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import CustomCursor from "../components/CustomCursor";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 0,
        },
      },
      IconButton: {
        baseStyle: {
          borderRadius: 0,
        },
      },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CustomCursor />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(5px)" }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
