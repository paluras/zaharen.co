import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavSecond from "./components/SecondNav";
import { useState, useTransition, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Blog({ children, tittleBlog, media, contact, navItems, number }) {
  const [crt, setCrt] = useState(null);
  const [isPending, startTransition] = useTransition();
  const location = useLocation();

  function handleClickCRT() {
    crt === null ? setCrt("crt") : setCrt(null);
  }

  useEffect(() => {
    handleRouteChange();
  }, [location.pathname]);

  const handleRouteChange = () => {
    startTransition(() => {
      document.body.style.overflow = isPending ? "hidden" : "auto";
    });
  };

  return (
    <div className="App">
      <div>
        <div className="page-main">
          <div className="components-blog">
            <main className={`main-blogs ${crt}`}>
              <div className="blog-top">
                <Nav startNumber={number}>
                  {" "}
                  <span className="crt-mode" onClick={() => handleClickCRT()}>
                    CRT
                  </span>
                </Nav>
                <NavSecond navItems={navItems} />

                <div
                  className={`the-main-content ${
                    isPending ? "content-transition" : ""
                  }`}
                >
                  <div className="container-tittle">{tittleBlog}</div>
                  <div className="container-main">
                    <div className="container-para">
                      <div className="text">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
              {media}
              {contact}

              <Footer />
              <div className="place-ex"></div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
