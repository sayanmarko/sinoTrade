import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

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

      {/* <Header />
      <main className={("", class_Name)}>{children}</main>
      <Footer /> */}
    </>
  );
}
