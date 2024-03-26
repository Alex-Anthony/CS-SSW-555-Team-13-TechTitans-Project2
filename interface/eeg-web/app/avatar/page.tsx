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
        <div className="flex flex-cols-2 p-5 justify-items-stretch">
          <div className="flex basis-1/2 justify-center">
            <Avatar message="hello"></Avatar>
          </div>
          <div className="flex basis-1/2 justify-center">
            <Avatar message="stop"></Avatar>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
