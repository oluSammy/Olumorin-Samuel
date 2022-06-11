import React from "react";
import data from "../data/data";

interface IProp {
  setPath: React.Dispatch<React.SetStateAction<string>>;
  setPathError: React.Dispatch<React.SetStateAction<string>>;
}

const VARIABLE_NAME = "a."

const Form: React.FC<IProp> = ({ setPath, setPathError }) => {
  const [query, setQuery] = React.useState("");

  const pathGet = (object: Record<string, any>, value: string) => {
    const flattenObj = (obj: Record<string, any>) => {
      const result = {} as Record<string, any>;
      for (const key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          const newObj = flattenObj(obj[key]);
          for (const newKey in newObj) {
            result[`${key}.${newKey}`] = newObj[newKey];
          }
        } else {
          result[key] = obj[key];
        }
      }
      return result;
    };
    const flattenedObject = flattenObj(object);
    for (const key in flattenedObject) {
      if (flattenedObject[key] === value) {
        return key;
      }
    }
  };

  const handleChange = (e: any) => {
    setPath("");
    setPathError("");
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!query) {
        setPathError("Please enter a search query");
      return;
    }

    const path = pathGet(data, query);
    if (!path) {
      setPathError("No Path found!!!!");
      return;
    }
    setPath(VARIABLE_NAME + path);
  };

  return (
    <form className="container-top" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        className="search-input"
        value={query}
        onChange={handleChange}
      />
      <input type="submit" value="search" className="submit-btn" />
    </form>
  );
};

export default Form;
