import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "../components/Avatar";
import Title from "../components/Title";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="Avatar"></Title>
      <div className="p-5">
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default page;
