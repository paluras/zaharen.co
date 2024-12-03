import { useEffect, useState } from "react";
import { getLatestLandingPost } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

const LandingPagePost = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestLandingPost()
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading)
    return (
      <div
        style={{
          minHeight: "500px",
        }}
      >
        Loading...
      </div>
    );

  return (
    <PortableText
      value={post.body}
      components={{
        marks: {
          link: ({ value, children }) => (
            <a
              style={{ color: "#ff68b4" }}
              href={value.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        },
        block: {
          normal: ({ children }) => <p>{children}</p>,
        },
      }}
    />
  );
};

export default LandingPagePost;
