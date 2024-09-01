import React from "react";
import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Page: React.FC<IProps> = ({ title, children }) => {
  return (
    <>
      <Helmet title={title} />
      {children}
    </>
  );
};

export default Page;
