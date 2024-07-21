import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { Plus_Jakarta_Sans } from "next/font/google";

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={metaTitle} />
        {description ? <meta name="description" content={description} /> : null}
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
      </Head>
      <Header />
      <main className={class_Name}>{children}</main>
      <Footer />
    </>
  );
}
