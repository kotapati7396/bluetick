import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const NavBar = () => {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      height="100px"
      fontSize="md"
      fontWeight="600"
      alignItems="center"
      px={{ base: "5", md: "50px " }}
      position="sticky"
      bg="white"
      top="0"
      zIndex="999"
    >
      <Box width="150px">
        <Link href="/">
          <Image src="/logo.png" />
        </Link>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <NavLinks />
      </Box>
      <Box display={{ base: "flex", lg: "none" }}>
        <SideDrawer />
      </Box>
    </Box>
  );
};

export default NavBar;
