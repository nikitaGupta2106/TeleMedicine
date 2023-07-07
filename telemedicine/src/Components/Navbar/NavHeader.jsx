import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NavHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const toast = useToast();
  const toastIdRef = React.useRef();

  function addToast() {
    onClose();
    toastIdRef.current = toast({
      description: "Our Team will contact you soon. ThankYou",
    });
  }

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
      <Flex
        bg="white"
        height="70px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        padding="0 10px"
      >
        <Flex
          fontSize="20px"
          color="rgb(0,82,93)"
          width="55%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box fontSize="30px">
            <Link to="/">TeleMedicine</Link>
          </Box>
          <Box>
            <Link to="/products">Medicines</Link>
          </Box>
          <Box>Doctor</Box>
          <Box>Pharmacy</Box>
          <Box>Other Services</Box>
        </Flex>
        <Spacer />
        <Flex w="17%" justifyContent="space-between" alignItems="center">
          <Box textAlign="center">
            <Menu isLazy>
              <MenuButton>
                {" "}
                <FaHome color="rgb(0,82,93)" size="35px" />
              </MenuButton>
              <MenuList>
                <MenuItem alignItems="center">SignUp/Login</MenuItem>
                <Link to="/cart">
                  <MenuItem>Cart</MenuItem>
                </Link>
                <Link to="/favourites">
                  <MenuItem>Favourites</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Button
              onClick={onOpen}
              bg="rgb(0,82,93)"
              color="white"
              borderRadius="0"
            >
              Consult Now
            </Button>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Enter Your Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Full name</FormLabel>
                    <Input ref={initialRef} placeholder="Full name" />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Contact No.</FormLabel>
                    <Input type="number" placeholder="Contact No." />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={addToast}>
                    Submit
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default NavHeader;
