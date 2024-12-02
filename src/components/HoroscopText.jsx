import { useEffect, useState } from "react";
import { getPosts } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

const Horoscope = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <article key={index} className="post-article">
          <h2 className="post-title">{post.title}</h2>
          <time className="post-date">{formatDate(post.publishedAt)}</time>
          <div className="post-content">
            <PortableText
              value={post.body}
              components={{
                marks: {
                  link: ({ value, children }) => (
                    <a
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
                types: {
                  image: ({ value }) => {
                    return (
                      <div className="post-body-image">
                        <img src={value.asset.url} alt={value.alt || ""} />
                      </div>
                    );
                  },
                },
              }}
            />
          </div>
        </article>
      ))}
    </div>
  );
};

export default Horoscope;
