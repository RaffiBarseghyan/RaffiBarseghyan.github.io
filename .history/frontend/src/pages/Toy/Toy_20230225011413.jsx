import React from "react";
import { Navigate } from "react-router-dom";
import style from "./toy.module.scss";
import { useLocation } from "react-router-dom";

function Toy() {
  const location = useLocation();
  const { from } = location.state;

  console.log(from);
  //   console.log(props.location.propsId);

    if (!from) return <Navigate to="/" />;
  //   return <></>;
}

export default Toy;
