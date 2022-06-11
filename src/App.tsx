import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Path from "./components/Path";
import PathError from "./components/PathError";

function App() {
  const [path, setPath] = useState("");
  const [pathError, setPathError] = useState("");

  return (
    <>
      <h1 className="title" >Quick Search Engine</h1>
      <PathError error={pathError} />
      <div className="container">
        <Form setPath={setPath} setPathError={setPathError} />
        <Path path={path} />
      </div>
    </>
  );
}

export default App;
