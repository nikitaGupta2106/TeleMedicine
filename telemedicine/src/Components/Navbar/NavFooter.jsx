import React from "react";
import { Flex, Box, Text, Spacer, Grid, GridItem } from "@chakra-ui/react";

const NavFooter = () => {
  return (
    <div
      style={{
        background: "black",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        // position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
      }}
    >
      {/* <Flex color="white" justifyContent="space-evenly" padding="50px 80px"> */}
      <Grid
        color="white"
        padding={{
          base: "50px 0",
          sm: "50px 0",
          md: "50px 80px",
          lg: "50px 80px",
        }}
        templateColumns="repeat(4, 1fr)"
        // gap={6}
        textAlign="center"
      >
        <GridItem>
          <Flex direction="column">
            <Text fontSize="20px" mb="20px">
              All Medicine
            </Text>
            <Text>Health & Care</Text>
            <Text> Beauty Care</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
            <Text fontSize="20px" mb="20px">
              Doctors
            </Text>
            <Text>Physiotherapy</Text>
            <Text>Heart Specialist</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
            <Text fontSize="20px" mb="20px">
              Hospitals
            </Text>
            <Text>Government Listed</Text>
            <Text>Top Private</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
            <Text fontSize="20px" mb="20px">
              About Us
            </Text>
            <Text>Contact Us</Text>
          </Flex>
        </GridItem>
      </Grid>
      {/* </Flex> */}
      <hr />
      <Flex
        color="white"
        justifyContent="space-between"
        padding={{
          base: "25px 5px",
          sm: "25px 5px",
          md: "25px 100px",
          lg: "25px 100px",
        }}
      >
        <Box fontSize="13px">© Healthcare2023 All Rights Reserved.</Box>
        <Flex w="250px">
          <img
            src="data:image/png;base64,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"
            alt="appstore"
            width="100px"
          />
          <Spacer />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
            alt="googleplay"
            width="100px"
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default NavFooter;
