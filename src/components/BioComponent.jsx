import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

const BioComponent = () => {
  const [bioData, setBioData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "bio"][0]{
      content,
      cvLink
    }`;

    client.fetch(query).then((data) => {
      setBioData(data);
    });
  }, []);

  if (!bioData) return <div>Loading...</div>;

  const components = {
    marks: {
      link: ({ value, children }) => {
        return (
          <a style={{ color: "#ff68b4" }} href={value.href}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      <PortableText value={bioData.content} components={components} />
      <a style={{ color: "#ff68b4" }} href={bioData.cvLink}>
        CV
      </a>
    </>
  );
};

export default BioComponent;
