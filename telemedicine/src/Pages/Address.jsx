import { useState } from "react";

import {
  ChakraProvider,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const Address = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  const handleBtn = () => {
    onClose();
    setShowBtn(false);
  };
  return (
    <Box width="400px" mx="auto" mt="4">
      {showBtn ? (
        <Button colorScheme="teal" size="md" onClick={onOpen}>
          Firstly, Fill out the address!!
        </Button>
      ) : (
        ""
      )}

      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Address Page</DrawerHeader>
            <DrawerBody>
              <FormControl id="name" mb="4">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter your name" />
              </FormControl>
              <FormControl id="address" mb="4">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="Enter your address" />
              </FormControl>
              <FormControl id="city" mb="4">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="Enter your city" />
              </FormControl>
              <FormControl id="state" mb="4">
                <FormLabel>State</FormLabel>
                <Input type="text" placeholder="Enter your state" />
              </FormControl>
              <FormControl id="zip" mb="4">
                <FormLabel>ZIP</FormLabel>
                <Input type="text" placeholder="Enter your ZIP code" />
              </FormControl>
            </DrawerBody>

            <DrawerFooter>
              {/* <Button colorScheme="teal" onClick={onClose} style={{margin-right: 135px}}>
                  Proceed To Payment
                </Button> */}
              <Button
                colorScheme="teal"
                onClick={handleBtn}
                style={{ marginRight: "135px" }}
              >
                Proceed To Payment
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Address;
