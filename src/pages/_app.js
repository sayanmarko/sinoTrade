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
    AOS.init({
      offset: 200,
      duration: 900,
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}
