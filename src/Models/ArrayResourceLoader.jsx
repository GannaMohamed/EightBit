import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../Utils/Axios";

export const ArrayResourceLoader = ({
  ItemComponent,
  resourceUrl,
  resourceName,
  ...props
}) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData(resourceUrl); // Fetches an array of resources
        setResources(data);
      } catch (error) {
        console.error("Error loading resources:", error);
      }
    })();
  }, [resourceUrl]);

  return (
    <div {...props}>
      {resources.map((resource, index) => (
        <ItemComponent
          style={{ width: "100%" }}
          key={index}
          {...{ [resourceName]: resource }}
        />
      ))}
    </div>
  );
};
//  React.Children.map(children, (child) => {
//           if (React.isValidElement(child)) {
//             return (
//               <div style={{ margin: "8px" }} key={index}>
//                 {React.cloneElement(child, { [resourceName]: resource })}
//               </div>
//             );
//           }
//           return child;
//         })
