import React from "react";
import Offer from "../Components/Offer";
import { Box, Heading } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      my="150px"
      p={7}
      id="offer"
    >
      <Heading color="brand.700" mb="100px">
        What we offer
      </Heading>
      <Offer />
    </Box>
  );
};

export default Section2;
