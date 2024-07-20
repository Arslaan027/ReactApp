import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <div>
      <h1 className="bg-green-200 text-center p-8 text-[70px]">Contact</h1>
      <h3 className="bg-red-200 text-center p-8 text-[50px]">Phone: {phone}</h3>
      <h3 className="bg-red-200 text-center p-8 text-[50px]">Name: {name}</h3>
    </div>
  );
};

export default Contact;
