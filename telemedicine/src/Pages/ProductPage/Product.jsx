import React, { useEffect, useState } from "react";
import { Box, Heading, Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getFailure, getRequest, getSuccess } from "../../Redux/action";
import axios from "axios";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import ProductsCategories from "./ProductsCategories";

const Product = () => {
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const store = useSelector((state) => state);
  const products = store.products;
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    let prodURL = `https://medicalproducts.onrender.com/products?_page=${pageNo}&_limit=9`;
    if (sortOrder && category) {
      prodURL += `&_sort=finalPrice&_order=${sortOrder}&category=${category}`;
    } else if (sortOrder) {
      prodURL += `&_sort=finalPrice&_order=${sortOrder}`;
    } else if (category) {
      prodURL += `&category=${category}`;
    }
    fetchData(prodURL);
  }, [pageNo, sortOrder, category]);

  const fetchData = async (prodURL) => {
    dispatch(getRequest());
    try {
      let res = await axios.get(prodURL);
      // console.log(res.data);
      dispatch(getSuccess(res.data));
    } catch (error) {
      dispatch(getFailure());
    }
  };

  const changePageNo = (page) => {
    setPageNo(page);
  };
  const sortFunction = (odr) => {
    setSortOrder(odr);
    setPageNo(1);
  };

  const handleViewAll = () => {
    setSortOrder("");
    setPageNo(1);
    setCategory("");
  };
  return (
    <Box>
      <Flex>
        <Box p="4" w="100%">
          <Heading as="h4" size="md" color="rgb(0,82,93)" mb="20px">
            Most Recommended
          </Heading>
          <Heading size="3xl">Products</Heading>
        </Box>
      </Flex>
      <Flex direction="row-reverse">
        <Box>
          <Button
            color="rgb(0,82,93)"
            onClick={() => {
              sortFunction("asc");
            }}
          >
            Sort Low To High
          </Button>
          <Button
            marginRight="20px"
            marginLeft="20px"
            color="rgb(0,82,93)"
            onClick={() => sortFunction("desc")}
          >
            Sort High To Low
          </Button>
          <Button
            color="rgb(0,82,93)"
            onClick={handleViewAll}
            marginRight="7px"
          >
            View All
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" mt="20px" mb="10px">
        <Pagination changePageNo={changePageNo} pageNo={pageNo} />
      </Flex>
      <Flex>
        <Box
          w={{ base: "50%", sm: "50%", md: "30%", lg: "25%" }}
          p={4}
          color="white"
          padding="10px 20px"
        >
          <ProductsCategories setCategory={setCategory} setPageNo={setPageNo} />
        </Box>
        <Box w={{ base: "50%", sm: "50%", md: "70%", lg: "75%" }} mb="30px">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            padding="0 30px"
          >
            {products.length > 0 &&
              products.map((product) => (
                <GridItem key={product.id}>
                  <ProductCard product={product} />
                </GridItem>
              ))}
          </Grid>
          <Pagination changePageNo={changePageNo} pageNo={pageNo} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Product;
