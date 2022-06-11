import React from "react";

interface IProp {
  path: string;
}

const Path: React.FC<IProp> = ({ path }) => {
  return (
    <div className="path-container">
      <h5 className="path-title">{path && "PATH"}</h5>
      <p className="path">{path}</p>
    </div>
  );
};

export default Path;
