import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import { myCart, myFav } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const store = useSelector((state) => state);
  const cart = store.cart;
  const fav = store.favourites;
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      let res = await axios.get(
        `https://medicalproducts.onrender.com/products/${id}`
      );
      console.log(res.data);
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFav = () => {
    const isProductInFav = fav.some((item) => item.id === details.id);

    if (isProductInFav) {
      dispatch(myFav(details));
    } else {
      toast({
        title: "Added to Favourites",
        status: "success",
        isClosable: true,
      });
      dispatch(myFav(details));
    }
  };

  const handleAddToCart = () => {
    const isProductInCart = cart.some((item) => item.id === details.id);

    if (isProductInCart) {
      toast({
        title: "Product is already present in the cart",
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Added to the cart",
        status: "success",
        isClosable: true,
      });
      dispatch(myCart(details));
    }
  };

  return (
    <Box>
      <Heading padding="20px" color="rgb(0,82,93)">
        {details.category}
      </Heading>
      <Flex
        margin="20px 70px"
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box
          p="4"
          w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          padding={{
            base: "20px 50px",
            sm: "20px 100px",
            md: "20px 100px",
            lg: "20px 150px",
          }}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        >
          <Image
            src={details.image}
            alt={details.productName}
            width="100%"
            height="500px"
          />
        </Box>
        <Spacer />

        <Flex
          p="4"
          w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          direction="column"
          justifyContent="space-between"
          padding="20px"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        >
          <Heading mb="10px">{details.productName}</Heading>

          <Stack spacing={3}>
            <Text fontSize="xl">{details.discount}% Discount</Text>
            <Text color="red" fontSize="3xl">
              ₹{details.finalPrice}{" "}
              <Text as="s" color="grey" fontSize="md">
                ₹{details.actualPrice}
              </Text>
            </Text>
            <Text color="grey">Inclusive of all taxes</Text>
            <hr color="grey" />
            <Text fontSize="2xl">Description</Text>
            <Text>{details.description}</Text>
            <Text color="grey">Estimated delivery in 2-3 Days</Text>
            <hr color="grey" />
          </Stack>
          <Flex>
            <Button
              bg="rgb(0,82,93)"
              color="white"
              width="90%"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </Button>
            <Spacer />
            <Button
              borderRadius="10"
              background="none"
              width="10%"
              onClick={() => handleAddToFav()}
            >
              <FaHeart
                color={
                  fav.some((item) => item.id === details.id) ? "red" : "grey"
                }
              />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Center>
        <Link to="/products">
          <Button width="250px" bg="rgb(0,82,93)" color="white" mb="100px">
            Buy More
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default ProductDetails;
