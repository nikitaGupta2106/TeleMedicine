import { Box, Center, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <Box height="100vh" mt="-250px" mb="-100px">
      <Center height="100%">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={4}>
            Thank You!
          </Heading>
          <Text fontSize="xl">Your Transaction was successfull</Text>
          <Link to="/products">
            <Button mt="20px" colorScheme="teal" type="submit">
              Continue Shopping
            </Button>
          </Link>
        </Box>
      </Center>
    </Box>
  );
}

export default ThankYouPage;
