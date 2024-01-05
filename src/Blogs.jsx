import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavSecond from "./components/SecondNav";
import { useState } from "react";
///taraneala continua si aici ///
function Blog({
  children,
  tittleBlog,
  media,
  contact,
  navItems,

  number,
}) {
  const [crt, setCrt] = useState(null);
  function handleClickCRT() {
    crt === null ? setCrt("crt") : setCrt(null);
  }
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

                <div className="the-main-content">
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
