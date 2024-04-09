import React, { ReactNode } from "react";

interface AProps {
  title?: string;
  children?: ReactNode;
  side?: string
}

const Avatar = ({ title, children, side = "start" }: AProps) => {

  return <div className="flex flex-col w-full gap-3 items-center">
    <div className="text text-2xl text-center font-bold text-secondary">
      {title}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
    <div className={"chat min-w-fit chat-" + side}>
      <div className="chat-bubble">{children}</div>
    </div>
  </div>;
};

export default Avatar;
