import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "../components/Avatar";
import Title from "../components/Title";
import NewDataButton from "../components/NewDataButton";
import GetMessage from "../components/GetMessage";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="Avatar"></Title>
      <div className="p-5">
        <div className="flex flex-cols-2 p-5 justify-items-stretch">
          <div className="flex basis-1/2 justify-center items-stretch">
            <Avatar>
              <GetMessage></GetMessage>
            </Avatar>
          </div>
          <div className="flex basis-1/2 justify-center">
            <Avatar>
              stop
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <NewDataButton></NewDataButton>
      </div>

    </div>
  );
};

export default page;
