// components/StaticShell.jsx
import Nav from "./Nav";
import Footer from "./Footer";
import NavSecond from "./SecondNav";
import { memo } from "react";

const StaticShell = memo(
  ({ navItems, startNumber, crt, onCrtToggle, children }) => {
    return (
      <div className="App">
        <div className="page-main">
          <div className="blog-top">
            <Nav startNumber={startNumber}>
              <span className="crt-mode" onClick={onCrtToggle}>
                CRT
              </span>
            </Nav>
            <NavSecond navItems={navItems} />

            <div className="components-blog">
              <main className={`main-blogs ${crt}`}>
                {children}
                <Footer />
                <div className="place-ex"></div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default StaticShell;
