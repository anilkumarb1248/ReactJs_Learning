import React from "react";

type PageProps = {
  children: React.ReactNode;
};

export const Page = (props: PageProps) => {
  return <div> {props.children}</div>;
};
