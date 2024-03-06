import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const InputForm = ({ type, label, width = "35%" }) => {
  return (
    <FormControl isRequired>
      <FormLabel fontSize="lg">{label}</FormLabel>
      <Input type={type} width={{ base: "100%", lg: width }} />
    </FormControl>
  );
};

export default InputForm;
