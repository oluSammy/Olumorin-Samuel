import React from "react";

interface IProp {
  error: string;
}

const PathError: React.FC<IProp> = ({ error }) => {
  return (
    <div className="error">
      <h5>{error} </h5>
    </div>
  );
};

export default PathError;
