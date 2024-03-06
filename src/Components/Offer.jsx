import React from "react";
import { Accordion } from "@chakra-ui/react";
import OfferItem from "./OfferItem";

const Offer = () => {
  return (
    <Accordion
      defaultIndex={[0]}
      allowToggle
      width={{ base: "100%", md: "75%" }}
    >
      <OfferItem
        title="Explore AI Opportunities for Your Enterprise"
        content="Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation."
      />
      <OfferItem
        title="Design AI Trust Layer"
        content="Prioritize data security and build trust in generative AI applications with a dedicated trust
layer, emphasizing privacy-focused solutions that safeguard both organizational and
customer data."
      />
      <OfferItem
        title="Scalability-Focused Solutions"
        content="Streamline and optimize business processes with comprehensive workflow automation,
ensuring seamless integration of AI technologies from inception to execution for increased
efficiency and productivity."
      />
      <OfferItem
        title="End to end Workflow automation"
        content="Streamline and optimize business processes with comprehensive workflow automation,
ensuring seamless integration of AI technologies from inception to execution for increased
efficiency and productivity."
      />
    </Accordion>
  );
};

export default Offer;
