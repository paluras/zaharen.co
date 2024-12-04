import { useTransition } from "react";

function Blog({ tittleBlog, media, contact, children }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`the-main-content ${isPending ? "content-transition" : ""}`}
    >
      <div className="container-tittle">{tittleBlog}</div>
      <div className="container-main">
        <div className="container-para">
          <div className="text">{children}</div>
        </div>
      </div>
      {media}
      {contact}
    </div>
  );
}

export default Blog;
