import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FooterLink = ({ title }) => {
  return (
    <Link mt="30px" display="inline-block" ml={3}>
      <Flex alignItems="center">
        <Icon as={IoIosArrowDroprightCircle} />
        <Text as="span" p={2} fontSize="lg">
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default FooterLink;
