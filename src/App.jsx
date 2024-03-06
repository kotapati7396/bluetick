import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Sections/Footer";
import NavBar from "./Sections/NavBar";
import Section1 from "./Sections/Section1";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section2 from "./Sections/Section2";

function App() {
  return (
    <>
      <NavBar />
      <Section1 />
      <Box maxW="1400px" mx="auto">
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </Box>
    </>
  );
}

export default App;
