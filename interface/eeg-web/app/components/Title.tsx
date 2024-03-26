import React, { ReactNode } from "react";
interface TProps {
  title: string;
  children?: ReactNode;
}

const Title = ({ title, children }: TProps) => {
  return (
    <div>
      <div className="p-5 text-5xl text-center font-bold text-accent">
        {title}
      </div>
      <div className="text-base text-center">{children}</div>
    </div>
  );
};

export default Title;
