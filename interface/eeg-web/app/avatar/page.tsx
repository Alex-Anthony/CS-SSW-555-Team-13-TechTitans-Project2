
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
      <div className="flex flex-col w-full items-center">
        <div className="card w-4/6 bg-base-100">
          <div className="card-body items-center">
            <h2 className="card-title text-center">First iteration</h2>
            <p>Our initial implementation, developed for our second sprint,
              prioritized usability and functionality. The UI was kept simple,
              focusing on making the website functional. On the left the correct
              output is assigned to the EEG data input, while on the right,
              the avatar represents the machine learning algorithm&apos;s guess for the word.</p>
          </div>
        </div>
        <div className="p-5 w-full">
          <NewAvatar getoutcomes={myOutcomes}></NewAvatar>
          <div className="py-5 text-3xl font-primary font-bold text-center">Current accuracy: {accuracy.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};

export default page;
