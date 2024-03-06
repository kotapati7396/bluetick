import React from "react";
import Blog from "../Components/Blog";
import {
  Box,
  HStack,
  Spacer,
  Flex,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import {
  Carousel,
  LeftButton,
  Provider,
  RightButton,
} from "chakra-ui-carousel";

const Section3 = () => {
  const blogData = [
    {
      title: "Speaking SQL: Turning Natural Language into Database Dialogues",
      description:
        "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence",
      link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-di",
    },
    {
      title:
        "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      description: `Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
success of ChatGPT, marking a significant advancement in AI's ability to understand and
engage in human language. This method, vital for fine-tuning language models, addresses
the complexities and nuances of communication, ensuring AI interactions are natural and
intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding
models to avoid replicating inappropriate language or tones`,
      link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
    },
    {
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description: `Welcome to our exploration of the fascinating world of large language models! As many of
you are aware, the scale of these models has skyrocketed recently. Take, for instance,
GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
requires adjusting countless parameters, which is time-consuming, and the GPU demands
are nothing short of immense.`,
      link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    },
    {
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description: `Welcome to our exploration of the fascinating world of large language models! As many of
you are aware, the scale of these models has skyrocketed recently. Take, for instance,
GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
requires adjusting countless parameters, which is time-consuming, and the GPU demands
are nothing short of immense.`,
      link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    },
  ];
  const fixedDescriptionLength = 250;

  const formatDescription = (description) => {
    if (description.length > fixedDescriptionLength) {
      return `${description.substring(0, fixedDescriptionLength)}...`;
    } else {
      return description.padEnd(fixedDescriptionLength, " ");
    }
  };

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Box my="150px" p={7} id="blogs">
      <Heading color="brand.700" mb="100px">
        Explore and enjoy the blogs written by our passionate techies.
      </Heading>

      <Provider>
        {isLargeScreen && (
          <Flex alignItems="center" justifyContent="space-between">
            <LeftButton bgColor="brand.400" color="white" />
            <Carousel gap={50} p={5}>
              {blogData.map((blog, index) => (
                <Blog
                  key={index}
                  title={blog.title}
                  description={formatDescription(blog.description)}
                  link={blog.link}
                />
              ))}
            </Carousel>
            <RightButton bgColor="brand.400" color="white" />
          </Flex>
        )}
        {!isLargeScreen && (
          <Flex direction="column" gap={3}>
            {blogData.map((blog, index) => (
              <Blog
                key={index}
                title={blog.title}
                description={formatDescription(blog.description)}
                link={blog.link}
              />
            ))}
          </Flex>
        )}
      </Provider>
    </Box>
  );
};

export default Section3;
