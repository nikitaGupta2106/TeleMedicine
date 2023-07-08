import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../Redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart1 = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cart, setCart] = useState(cart1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.finalPrice;
    });
    setTotal(totalPrice);
  };

  const removecart = (id) => {
    console.log(id);
    const filtereddata = cart.filter((ele) => {
      return ele.id != id;
    });
    console.log(filtereddata);
    setCart(filtereddata);
    dispatch(updateCart(filtereddata));
  };
  /// Increase
  const increase = (id) => {
    // const inc = cart.map((ele) => {
    //   if (ele.id === id) {
    //     ele.quantity++;
    //     ele.finalPrice = ele.finalPrice * ele.quantity;
    //   }
    //   return ele;
    // });
    // console.log(inc);
    // setCart(inc);

    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        const newFinalPrice = (item.finalPrice / item.quantity) * newQuantity;

        return {
          ...item,
          quantity: newQuantity,
          finalPrice: newFinalPrice,
        };
      }
      return item;
    });
    setCart(updatedCart);
    dispatch(updateCart(updatedCart));
  };
  const decrease = (id) => {
    // const inc = cart.map((ele) => {
    //   if (ele.id === id) {
    //     ele.quantity--;
    //     ele.finalPrice = ele.finalPrice * ele.quantity;
    //   }
    //   return ele;
    // });
    // console.log(inc);
    // setCart(inc);

    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        const newFinalPrice = (item.finalPrice / item.quantity) * newQuantity;

        return {
          ...item,
          quantity: newQuantity,
          finalPrice: newFinalPrice,
        };
      }
      return item;
    });
    setCart(updatedCart);
    dispatch(updateCart(updatedCart));
  };

  return (
    <div
      style={{
        margin: "100px",
        border: "solid 1px teal",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        marginBottom: "400px",
      }}
    >
      <Heading textAlign="center">Your Cart</Heading>
      {cart1?.map((prod) => {
        return (
          <>
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
                <GridItem area={"Img"} w={200} h={150} boxShadow="md">
                  <Image w="100%" h="150px" src={prod.image} />
                </GridItem>
                <GridItem area={"Inc"}>
                  <Button
                    onClick={() => {
                      increase(prod.id);
                    }}
                  >
                    +
                  </Button>
                  <Button>{prod.quantity}</Button>
                  <Button
                    onClick={() => {
                      decrease(prod.id);
                    }}
                  >
                    -
                  </Button>
                </GridItem>
                <GridItem area={"pro"}>
                  <h2>{prod.productName}</h2>
                </GridItem>
                <GridItem area={"price"}>
                  <h6> ₹{prod.finalPrice}</h6>

                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => {
                      removecart(prod.id);
                    }}
                  >
                    Remove
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          </>
        );
      })}
      <Heading textAlign="center">Total: {total}</Heading>
      <Center>
        <Link to="/payment">
          <Button mt="20px" mb="20px" bg="rgb(0,82,93)" color="white">
            Checkout
          </Button>
        </Link>
      </Center>
    </div>
  );
};

export default Cart;
