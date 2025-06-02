import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import WeddingDateSection from "./components/WeddingDateSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";

// Компонент анимации появления
const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <ChakraProvider>
      <Header />
      <FadeIn>
        <WelcomeSection />
      </FadeIn>
      <FadeIn>
        <Countdown />
      </FadeIn>
      <FadeIn>
        <WeddingDateSection />
      </FadeIn>
      <FadeIn>
        <LocationSection />
      </FadeIn>
      <Footer />
    </ChakraProvider>
  );
}

export default App;