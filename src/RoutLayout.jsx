import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./Componets/Header";
import Navber from "./Componets/Navber";
import Footer from "./Componets/Footer";
import { useDispatch } from "react-redux";
import { AllProductReducer, GetProducts } from "./ProductSlice";

import axios from "axios";

const RoutLayout = () => {
  const dispatch = useDispatch();

  async function getAllData() {
    await axios.get("https://dummyjson.com/products")
    .then((res) => {
      dispatch(GetProducts(res.data.products));
      dispatch(AllProductReducer(res.data.products));
    });
  }
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Header />
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RoutLayout;
