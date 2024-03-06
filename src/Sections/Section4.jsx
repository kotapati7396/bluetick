import React from "react";
import InputForm from "../Components/InputForm";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Section4 = () => {
  return (
    <Box id="connect" my="150px" p={7}>
      <Box className="underline" bgColor="brand.700"></Box>
      <Heading color="brand.700">LET'S CONNECT</Heading>
      <Text fontSize={{ base: "md", md: "2xl" }} color="gray.500" my={5}>
        Contact our support team or make an appointment with our experts.
      </Text>
      <form>
        <Flex direction="column" gap={5}>
          <InputForm type="text" label="Full Name" />
          <InputForm type="email" label="Email" />
          <InputForm type="number" label="Contact Number" />
          <InputForm type="text" label="Subject" width="100%" />
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea height="150px" required />
          </FormControl>
          <Button colorScheme="blue" maxW="150px">
            Submit Form
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Section4;
