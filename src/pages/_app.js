import { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../style/global.scss";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let navbar = document.querySelector("header");
    function handleScroll() {
      if (window.scrollY > 0) {
        navbar.classList.add("fixed-navbar");
      } else {
        navbar.classList.remove("fixed-navbar");
      }
    }
    window.addEventListener("scroll", handleScroll);
    //
    // document.querySelector(
    //   "main"
    // ).style.paddingTop = `${navbar.offsetHeight}px `;
    //

    AOS.init({
      offset: 200,
      duration: 1200,
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}
