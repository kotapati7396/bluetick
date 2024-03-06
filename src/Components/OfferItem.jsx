import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";

const OfferItem = ({ title, content }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _focus={{ boxShadow: "none" }}
          px={4}
          py={2}
          textAlign="left"
          borderRadius="md"
          backgroundColor="white"
          _hover={{ backgroundColor: "gray.200" }}
        >
          <Box as="span" flex="1" fontWeight="bold" minH="50px">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel px={4} pb={4} textAlign="left">
        {content}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default OfferItem;
