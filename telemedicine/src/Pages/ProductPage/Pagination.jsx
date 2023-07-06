import React from "react";
import { Button, Stack } from "@chakra-ui/react";

const Pagination = ({ changePageNo, pageNo }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={4} direction="row" align="center">
        <Button
          color="rgb(0,82,93)"
          bg={pageNo === 1 ? "lightgrey" : ""}
          onClick={() => changePageNo(1)}
        >
          1
        </Button>
        <Button
          color="rgb(0,82,93)"
          disabled={true}
          bg={pageNo === 2 ? "lightgrey" : ""}
          onClick={() => changePageNo(2)}
        >
          2
        </Button>
        <Button
          color="rgb(0,82,93)"
          bg={pageNo === 3 ? "lightgrey" : ""}
          onClick={() => changePageNo(3)}
        >
          3
        </Button>
        <Button
          color="rgb(0,82,93)"
          bg={pageNo === 4 ? "lightgrey" : ""}
          onClick={() => changePageNo(4)}
        >
          4
        </Button>
        <Button
          color="rgb(0,82,93)"
          bg={pageNo === 5 ? "lightgrey" : ""}
          onClick={() => changePageNo(5)}
        >
          5
        </Button>
      </Stack>
    </div>
  );
};

export default Pagination;
