import { Box, Link } from "@chakra-ui/react";
import React, { useState } from "react";

const NavLink = ({ text, id, activeLink, setActiveLink }) => {
  const handleLinkClick = () => {
    setActiveLink(id);
  };

  return (
    <Box>
      <Link
        href={`#${id}`}
        onClick={handleLinkClick}
        borderBottom={activeLink === id ? "2px solid" : "none"}
        cursor="pointer"
        display="inline-block"
        p={3}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "2px",
          backgroundColor: "brand.500",
          transition: "width 0.5s ease",
        }}
        _hover={{
          _before: {
            width: "100%",
          },
        }}
      >
        {text}
      </Link>
    </Box>
  );
};

export default NavLink;
