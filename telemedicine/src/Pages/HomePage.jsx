import React from "react";
import "./HomePage.css";
import { FaAmbulance, FaHospital, FaStethoscope } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { LiaUserNurseSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Grid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  
  return (
    <div>
      <Box position="relative">
        <img
          id="homepageImg"
          src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?w=2000&t=st=1688676622~exp=1688677222~hmac=3f3d8defb5c5258e08ccadbb86281146af91bf47cd0b0a1de40857b1a1d5ae58"
          alt="homepageImg"
          width="100%"
        />
      </Box>
      <Box
        className="top-left-text"
        color="black"
        position="absolute"
        top={40}
        left={10}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="20px"
      >
        <Heading
          fontSize={{ base: "40px", sm: "50px", md: "60px", lg: "60px" }}
        >
          The Place where your health <br />
          matters most.
        </Heading>
        <Text fontSize="22px" mb="20px">
          Better health starts here.
        </Text>
        <Button padding="20px">MORE ABOUT US</Button>
      </Box>
      <Box mt={8} mb={8}>
        <Center align="center">
          <Stack spacing={2}>
            <Heading size="lg" fontWeight="normal" color="rgb(0, 82, 93)">
              Best-in-class
            </Heading>
            <Heading size="3xl">Healthcare Services</Heading>
            <Text color="grey">
              TeleMedicine is the one app you need for all your health needs.
              <br />
              Consult doctors online & ask your medical questions across 30+
              specialities.
            </Text>
          </Stack>
        </Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          padding="10px 80px"
          mt="20px"
        >
          <Button className="btn" backgroundColor="green.50">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <FaStethoscope size="40px" />
              </Box>
              <Box>Online Consultation</Box>
            </Flex>
          </Button>
          <Button className="btn" backgroundColor="green.50">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <FaHospital size="40px" />
              </Box>
              <Box>Hospitals</Box>
            </Flex>
          </Button>
          <Link to="/products">
            <Button className="btn" backgroundColor="green.50">
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box>
                  <GiMedicines size="40px" />
                </Box>
                <Box>Medicines</Box>
              </Flex>
            </Button>
          </Link>
          <Button className="btn" backgroundColor="green.50">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <BiTestTube size="40px" />
              </Box>
              <Box>Pathology Tests</Box>
            </Flex>
          </Button>
          <Button className="btn" backgroundColor="green.50">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <LiaUserNurseSolid size="40px" />
              </Box>
              <Box>Nursing</Box>
            </Flex>
          </Button>
          <Button className="btn" backgroundColor="green.50">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <FaAmbulance size="40px" />
              </Box>
              <Box>Emergency</Box>
            </Flex>
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
