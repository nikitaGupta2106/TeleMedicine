import React from "react";
import { Button, Box, Stack, Heading } from "@chakra-ui/react";

const ProductsCategories = ({ setCategory, setPageNo }) => {
  const handleClick = (category) => {
    setCategory(category);
    setPageNo(1);
  };
  return (
    <Box bg="rgb(245,245,245)">
      <Heading size="md" color="grey" marginBottom="20px" pt="10px" ml="20px">
        Products Categories
      </Heading>
      <Box>
        <Stack direction="column" gap="0">
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Handcare")}
          >
            Handcare
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Cosmetics")}
          >
            Cosmetics
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Dietary%20Supplements")}
          >
            Dietry Supplements
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Cough%20Cold%20%26%20Fever")}
          >
            Cough Cold & Fever
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Nutrition")}
          >
            Nutrition
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Vitamins%20%26%20Minerals")}
          >
            Vitamins & Minerals
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Probiotics")}
          >
            Probiotics
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Allergies")}
          >
            Allergies
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Mouth%20%26%20Teeth")}
          >
            Mouth & Teeth
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Eyecare")}
          >
            Eyecare
          </Button>
          <Button
            borderRadius="0"
            width="100%"
            size="lg"
            bg="none"
            justifyContent="flex-start"
            onClick={() => handleClick("Protection")}
          >
            Protection
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductsCategories;
