import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Head = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <>
      <h1 className="bg-blue-500 text-center p-7 text-[60px]">Header</h1>
      <h3 className="bg-red-200 text-center p-8 text-[50px]">Phone: {phone}</h3>
      <h3 className="bg-red-200 text-center p-8 text-[50px]">Name: {name}</h3>
    </>
  );
};

export default Head;
