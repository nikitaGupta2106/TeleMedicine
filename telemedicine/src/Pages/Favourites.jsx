import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Heading, Grid, GridItem, Image, Button } from "@chakra-ui/react";
import { updateFavorites } from "../Redux/action";

const Favourites = () => {
  const favor = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    const updatedFavourites = favor.filter((item) => item.id !== id);
    dispatch(updateFavorites(updatedFavourites));
  };

  return (
    <div
      style={{
        margin: "100px",
        border: "solid 1px teal",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        marginBottom: "530px",
      }}
    >
      <Heading textAlign="center">Favourites</Heading>
      {favor?.map((prod) => {
        return (
          <Box>
            <Grid
              templateAreas={`"Img Inc pro"
                  "Img Inc price" `}
              templateColumns="repeat(1, 1fr 1fr 1fr)"
              boxShadow="md"
              rounded="md"
              p={10}
              border={"solid 1px teal"}
              m={10}
              gap={10}
            >
              <GridItem area={"Img"} w={100} h={100} boxShadow="md">
                <Image src={prod.image} />
              </GridItem>

              <GridItem area={"pro"}>
                <h2>{prod.productName}</h2>
              </GridItem>
              <GridItem area={"price"}>
                <h6> ₹{prod.finalPrice}</h6>
              </GridItem>
              <GridItem area={"price"}>
                <Button onClick={() => removeProduct(prod.id)}>Remove</Button>
              </GridItem>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
};

export default Favourites;
