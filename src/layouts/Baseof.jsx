import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import starIcon from "../../public/icons/star.png";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Base({
  children,
  title,
  description,
  metaTitle,
  keywords,
  class_Name,
}) {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });

  useEffect(() => {
    const star = document.querySelector(".cursor-ball");
    const smallStar = document.querySelector(".cursor-ball-small");

    let [mouseX, mouseY] = [0, 0];
    let [ballX, ballY] = [0, 0];
    let speed = 0.04;

    function animate() {
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;

      ballX = ballX + distX * speed;
      ballY = ballY + distY * speed;

      // star.style.left = ballX + 30 + "px";
      // star.style.top = ballY + 40 + "px";
      star.style.left = ballX + "px";
      star.style.top = ballY + "px";

      requestAnimationFrame(animate);
    }
    animate();

    let [smallBallX, smallBallY] = [0, 0];
    let speed2 = 0.07;

    function animate_small() {
      let distX = mouseX - smallBallX;
      let distY = mouseY - smallBallY;

      smallBallX = smallBallX + distX * speed2;
      smallBallY = smallBallY + distY * speed2;

      // smallStar.style.left = smallBallX + 15 + "px";
      // smallStar.style.top = smallBallY + 25 + "px";

      smallStar.style.left = smallBallX + "px";
      smallStar.style.top = smallBallY + "px";

      requestAnimationFrame(animate_small);
    }
    animate_small();

    document.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={metaTitle} />
        {description ? <meta name="description" content={description} /> : null}
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
      </Head>

      <ReactLenis root options={{ duration: 2 }}>
        <Header />
        <main className={("", class_Name)}>{children}</main>
        <Footer />
      </ReactLenis>

      <div class="cursor-ball">
        <Image src={starIcon}></Image>
      </div>
      <div class="cursor-ball-small">
        <Image src={starIcon}></Image>
      </div>
    </>
  );
}
