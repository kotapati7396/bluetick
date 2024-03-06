import { Button, Icon } from "@chakra-ui/react";
import React from "react";

const FooterIcon = ({ icon }) => {
  return (
    <Button variant="ghost" borderRadius="3xl" height="50px" width="50px">
      <Icon as={icon} />
    </Button>
  );
};

export default FooterIcon;
