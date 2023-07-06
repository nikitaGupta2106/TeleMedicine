import React from "react";
import { FaHeart } from "react-icons/fa";
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { myCart, myFav } from "../../Redux/action";

const ProductCard = ({ product }) => {
  const store = useSelector((state) => state);
  const cart = store.cart;
  const fav = store.favourites;
  const toast = useToast();
  const dispatch = useDispatch();
  console.log(cart);

  const handleAddToCart = () => {
    const isProductInCart = cart.some((item) => item.id === product.id);

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
      dispatch(myCart(product));
    }
  };

  const handleAddToFav = () => {
    const isProductInFav = fav.some((item) => item.id === product.id);

    if (isProductInFav) {
      dispatch(myFav(product));
    } else {
      toast({
        title: "Added to Favourites",
        status: "success",
        isClosable: true,
      });
      dispatch(myFav(product));
    }
  };

  return (
    <>
      <Card
        maxW="sm"
        h="550px"
        padding="10px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Flex justifyContent="flex-end" mb="5px">
          <Button
            borderRadius="100%"
            background="none"
            onClick={() => handleAddToFav()}
          >
            <FaHeart
              color={
                fav.some((item) => item.id === product.id) ? "red" : "grey"
              }
            />
          </Button>
        </Flex>
        <CardBody>
          <Link to={`productdetails/${product.id}`}>
            <Image
              src={product.image}
              alt="product-Img"
              borderRadius="lg"
              w="100%"
              h="230px"
              padding="0 20px"
            />
          </Link>
          <Stack mt="6" textAlign="center" h="100px">
            <Heading size="md" h="80px">
              {product.productName}{" "}
            </Heading>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              mt="8px"
              h="20px"
            >
              <Text as="s" color="grey" fontSize="l">
                ₹{product.actualPrice}
              </Text>

              <Text color="rgb(0,82,93)" fontSize="xl">
                ₹{product.finalPrice}
              </Text>
            </Flex>
          </Stack>
        </CardBody>

        <CardFooter>
          <Button
            width="100%"
            bg="rgb(0,82,93)"
            color="white"
            onClick={() => handleAddToCart()}
          >
            Add to cart
          </Button>
        </CardFooter>
      </Card>
      ;
    </>
  );
};

export default ProductCard;
