import React, { useState } from "react";
import img from "./cardImg.png";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import Address from "./Address";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [cardName, setCardName] = useState("");
  const [proceed, setProceed] = useState(false);
  console.log(showOtpInput);

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    // Card number validation
    if (cardNumber.length !== 16) {
      alert("Please fill in the correct card number (16 digits)");
      return;
      alert("OTP sent");
    }

    setShowOtpInput(true);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    if (otp.length !== 4) {
      alert("Please fill correct otp");
      setProceed(false);
      return;
      //alert("OTP sent")
    }

    // On successful OTP verification, process the payment
    console.log("Payment processed successfully!");
    alert("Payment processed successfully");
    setProceed(true);
  };

  return (
    <>
      <Flex justifyContent="space-around" alignItems="center" mb="50px">
        <Button bg="none" height="40px" padding="5px">
          <Address />
        </Button>
      </Flex>
      <Box width="400px" mx="auto" mt="4" mb="200px">
        {!showOtpInput ? (
          <form onSubmit={handlePaymentSubmit}>
            <FormControl>
              <FormLabel>Cards Accepted</FormLabel>
              <img src={img} alt="" />
            </FormControl>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Card Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter card name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </FormControl>
              <FormControl id="cardNumber">
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </FormControl>
              <Stack direction="row" spacing={4}>
                <FormControl id="expiryDate">
                  <FormLabel>Expiry Date</FormLabel>
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </FormControl>
                <FormControl id="cvv">
                  <FormLabel>CVV</FormLabel>
                  <Input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </FormControl>
              </Stack>

              <Button colorScheme="teal" type="submit">
                Proceed To Payment
              </Button>
              <Text mt={4} color="gray.500" fontSize="sm"></Text>
            </VStack>
          </form>
        ) : (
          <form
            onSubmit={handleOtpSubmit}
            style={{
              border: "1px solid teal",
              padding: "100px",
              margin: "20px",
              marginBottom: "250px",
            }}
          >
            <VStack spacing={4}>
              <FormControl id="otp">
                <Center>
                  <FormLabel>Enter OTP</FormLabel>
                </Center>
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </FormControl>
              {proceed ? (
                <Link to="/thankyou">
                  <Button colorScheme="teal" type="submit">
                    Verify OTP
                  </Button>
                </Link>
              ) : (
                <Button colorScheme="teal" type="submit">
                  Verify OTP
                </Button>
              )}
              {/* <Button colorScheme="teal" onClick={()=> {
              setShowOtpInput(false)
            }}>
              Back
            </Button> */}
            </VStack>
          </form>
        )}
      </Box>
    </>
  );
};

export default Payment;
