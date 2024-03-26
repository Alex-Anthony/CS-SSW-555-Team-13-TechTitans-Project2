import React, { ReactNode } from "react";

interface JCProps {
  name: string;
  svg: string;
  children?: ReactNode;
}

const Jobcard = ({ name, svg, children }: JCProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-12 h-12 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d={svg}
          />
        </svg>
      </div>
      <div className="text-center text-secondary font-xl font-bold">{name}</div>
      <div className="text-center font-base">{children}</div>
    </div>
  );
};

export default Jobcard;
