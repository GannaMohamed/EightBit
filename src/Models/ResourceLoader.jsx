import React, { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../Utils/Axios";

export const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData(resourceUrl);
        setResource(data);
      } catch (error) {
        console.error("Error loading resource:", error);
      }
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        // check if child is a valid react element or a non-element child (ex. text)
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource }); //Prop Injection: pass the response data with its props to the user info
        }
        return child;
      })}
    </>
  );
};
