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
import { useSelector } from "react-redux";

const NavHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const toast = useToast();
  const toastIdRef = React.useRef();
  const store = useSelector((state) => state);
  const cart = store.cart;
  const cartLength = cart.length;
  const fav = store.favourites;
  const favLength = fav.length;

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
        // height={{ base: "80px", sm: "80px", md: "70px", lg: "70px" }}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        padding="0 10px"
      >
        <Flex
          fontSize="20px"
          color="rgb(0,82,93)"
          width="80%"
          justifyContent="space-between"
          alignItems={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
            lg: "center",
          }}
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Flex width="25%">
            <Box
              fontSize={{ base: "20px", sm: "20px", md: "27px", lg: "30px" }}
            >
              <Link to="/">TeleMedicine</Link>
            </Box>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "75%", lg: "75%" }}
            justifyContent="space-evenly"
            fontSize={{ base: "11px", sm: "11px", md: "16px", lg: "16px" }}
          >
            <Box>
              <Link to="/products">Medicines</Link>
            </Box>
            <Box>Doctor</Box>
            <Box>Pharmacy</Box>
            <Box>Other Services</Box>
          </Flex>
        </Flex>
        <Spacer />
        <Flex
          w={{ base: "40%", sm: "25%", md: "19%", lg: "19%" }}
          justifyContent="space-evenly"
          alignItems={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
            lg: "center",
          }}
        >
          <Box marginRight="5px">
            <Menu isLazy>
              <MenuButton>
                <FaHome color="rgb(0,82,93)" size="35px" />
              </MenuButton>
              <MenuList>
                <Link to="/signup">
                <MenuItem alignItems="center">SignUp/Login</MenuItem></Link>
                <Link to="/cart">
                  <MenuItem>
                    Cart
                    <Button
                      size="xs"
                      ml="5px"
                      borderRadius="50%"
                      color="rgb(0,82,93)"
                    >
                      {cartLength}
                    </Button>
                  </MenuItem>
                </Link>
                <Link to="/favourites">
                  <MenuItem>
                    Favourites{" "}
                    <Button
                      size="xs"
                      ml="5px"
                      borderRadius="50%"
                      color="rgb(0,82,93)"
                    >
                      {favLength}
                    </Button>
                  </MenuItem>
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
