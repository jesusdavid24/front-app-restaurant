import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {navigation.state === "loading" ? "Loading..." : <Outlet />}
      <Footer />
    </>
  );
};

export default Root;
