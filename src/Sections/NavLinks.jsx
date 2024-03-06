import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import NavLink from "../Components/NavLink";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: 7, lg: 10 }}
      fontWeight="600"
      alignItems={{ base: "none", lg: "center" }}
      p={{ base: 5, lg: 0 }}
    >
      <NavLink
        text="Home"
        id="home"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <NavLink
        text="What we Offer"
        id="offer"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <NavLink
        text="Blogs"
        id="blogs"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <NavLink
        text="Let's Connect"
        id="connect"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </Box>
  );
};

export default NavLinks;
