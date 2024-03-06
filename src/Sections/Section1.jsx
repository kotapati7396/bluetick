import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

const Section1 = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      id="home"
    >
      <Box
        p={{ base: "25px", md: "50px" }}
        width={{ base: "100%", md: "60%" }}
        color="brand.700"
      >
        <Heading as="h1" size={{ base: "2xl", sm: "3xl" }} fontWeight="700">
          Bluetick Consultants
        </Heading>
        <Text fontSize="lg" fontWeight="600" p={3} pl={0}>
          Founded in 2017
        </Text>
        <Text my={7} fontWeight="600" color="gray.500">
          Bluetick Consultants is a technology-driven firm that has made a
          significant impact in the Indian and US startup ecosystems. We
          specialize in transforming enterprises with cutting-edge, scalable,
          and privacy-focused Generative AI Solutions.
        </Text>
        <Button
          as="a"
          href="https://www.bluetickconsultants.com/generative-ai.html"
          target="_blank"
          rel="noopener noreferrer"
          mt={7}
          colorScheme="blue"
        >
          <Text>know more</Text>
        </Button>
      </Box>
      <Box>
        <Image height="auto" src="hero.png" />
      </Box>
    </Box>
  );
};

export default Section1;
