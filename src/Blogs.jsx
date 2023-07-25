import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavSecond from "./components/SecondNav";
///taraneala continua si aici ///
function Blog({
  textBlog,
  tittleBlog,
  media,
  contact,
  navItems,
  crt,
  handleClickCRT,
  number,
}) {
  return (
    <div className="App">
      <div>
        <div className="page-main">
          <div className="components-blog">
            <main className={`main-blogs ${crt}`}>
              <div className="blog-top">
                <Nav handleClickCRT={handleClickCRT} startNumber={number} />
                <NavSecond navItems={navItems} />

                <div className="the-main-content">
                  <div className="container-tittle">{tittleBlog}</div>
                  <div className="container-main">
                    <div className="container-para">
                      <div className="text">{textBlog}</div>
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
