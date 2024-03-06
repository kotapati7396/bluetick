import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaThreads, FaLinkedinIn, FaQuora } from "react-icons/fa6";
import FooterLink from "../Components/FooterLink";
import FooterIcon from "../Components/FooterIcon";
const Footer = () => {
  return (
    <Flex
      as="footer"
      mt="150px"
      p={7}
      borderTop="1px solid gray"
      gap={7}
      direction={{ base: "column", md: "row" }}
    >
      <Box width={{ base: "100%", md: "25%" }}>
        <Image src="footerlogo.png" height="50px" />
        <Text fontWeight="600" fontSize="2xl" py={3}>
          Bluetick Consultants LLP
        </Text>
        <Box mt={6} maxW="300px">
          <Link
            href="mailto:contact@bluetickconsultants.com"
            fontWeight="600"
            display="block"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            contact@bluetickconsultants.com
          </Link>
        </Box>

        <Box mt={5}>
          <Image src="glassdoor.webp" height="75px" />
          <Image src="iso.webp" height="125px" />
        </Box>
      </Box>
      <Flex
        direction="column"
        width={{ base: "100%", md: "75%" }}
        mt={{ base: "25px", md: "0" }}
      >
        <Box
          display="Flex"
          flexDirection={{ base: "column", lg: "row" }}
          p={4}
          gap={{ base: "3", lg: "0" }}
          borderBottom={{ base: "0", md: "2px solid gray" }}
        >
          <Box width={{ base: "100%", md: "100%", lg: "25%" }}>
            <Text fontSize="2xl" fontWeight="600">
              RESOURCES
            </Text>
            <FooterLink title={"Blogs"} />
          </Box>
          <Box
            width={{ base: "100%", md: "85%" }}
            mt={{ base: "25px", md: "0" }}
          >
            <Text fontSize="2xl" fontWeight="600">
              Products
            </Text>
            <SimpleGrid
              minChildWidth={{ base: "100%", sm: "30%", lg: "20%" }}
              direction={{ base: "column", sm: "row" }}
            >
              <FooterLink title={"Talk To Code"} />
              <FooterLink title={"InterviewGPT"} />
              <FooterLink title={"PrivacyDoc"} />
              <FooterLink title={"Sales Call Evaluator"} />
            </SimpleGrid>
          </Box>
        </Box>
        <Flex
          alignItems="center"
          height="100%"
          direction={{ base: "column", md: "row" }}
          p={7}
          color="gray.600"
        >
          <SimpleGrid
            minChildWidth="15%"
            width={{ base: "100%", md: "50%" }}
            gap={5}
            alignItems="center"
          >
            <FooterIcon icon={FaFacebookF} />
            <FooterIcon icon={IoLogoInstagram} />
            <FooterIcon icon={FaThreads} />
            <FooterIcon icon={IoLogoTwitter} />
            <FooterIcon icon={FaLinkedinIn} />
            <FooterIcon icon={FaQuora} />
          </SimpleGrid>
          <Text ml={{ base: "0", md: "5" }} mt={{ base: "30px", md: "0" }}>
            2024 &copy; All rights reserved by Bluetick Consultants LLP
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
