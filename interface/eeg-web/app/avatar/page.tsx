
import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { myOutcomes } from "@/app/components/GetMessage";
import NewAvatar from "../components/NewAvatar";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="Avatar"></Title>
      <div className="p-5">
        <NewAvatar getoutcomes={myOutcomes}></NewAvatar>

      </div>
    </div>
  );
};

export default page;
