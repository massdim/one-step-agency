import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationComp = ({ count, page }) => {
  return (
    <Pagination
      count={count}
      variant="outlined"
      shape="rounded"
      onChange={(e, value) => page(value)}
    />
  );
};

export default PaginationComp;
