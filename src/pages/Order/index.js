import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumbs, Loading } from "../../components";

const Order = () => {
  const { isLoading } = useSelector((state) => state.general);
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ title: "Order", path: "/orders" }]} />
      {isLoading ? <Loading /> : <div>sadas</div>}
    </>
  );
};

export default Order;
