
import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { myOutcomes, accuracy } from "@/app/components/GetMessage";
import NewAvatar from "../components/NewAvatar";
import Chat from "../components/Chat";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="Avatar"></Title>
      <div className="p-5">
        <NewAvatar getoutcomes={myOutcomes}></NewAvatar>
        <div className="py-5 text-3xl font-primary font-bold text-center">Current accuracy: {accuracy.toFixed(2)}%</div>
      </div>
      <div className="flex justify-center">
        <div className="relative mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard phone-1 overflow-auto bg-base-100 place-items-start">
              <Chat getoutcomes={myOutcomes}></Chat>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
