import React from "react";

type CardProps = React.PropsWithChildren<{
  title: string;
}>;

const CardOuter: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="cardOuter">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default CardOuter;
