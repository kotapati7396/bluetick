import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Blog = ({ title, description, link }) => {
  return (
    <Card maxW={{ base: "sm", sm: "md" }} m={2} boxShadow="outline">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text fontWeight="400">{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => window.open(link, "_blank")}
        >
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Blog;
