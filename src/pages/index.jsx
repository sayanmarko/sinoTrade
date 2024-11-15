import Base from "@/layouts/Baseof";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import bannerImg from "../../public/banner-img.png";
import aboutBG from "../../public/about-background.png";
import vThumb from "../../public/video-thumbnail.png";

import p1 from "../../public/p-card1.png";
import p2 from "../../public/p-card2.png";
import p3 from "../../public/p-card3.png";
import p4 from "../../public/p-card4.png";
import p5 from "../../public/p-card5.png";

import s1 from "../../public/service-img1.png";
import s2 from "../../public/service-img2.png";
import s3 from "../../public/service-img3.png";
import s4 from "../../public/service-img4.png";
import s5 from "../../public/service-img5.png";
import s6 from "../../public/service-img6.png";

import PlayIcon from "../../public/icons/play.svg";
import playBtn from "../../public/icons/Play-icon.png";
import cIcon1 from "../../public/icons/c-icon1.png";
import cIcon2 from "../../public/icons/c-icon2.png";
import cIcon3 from "../../public/icons/c-icon3.png";

import RightArrrow1 from "../../public/icons/arrow-right1.svg";
import LeftArrrow1 from "../../public/icons/arrow-left1.svg";

import RightArrrowBig from "../../public/icons/right-arrow-big.svg";

import backgroundelement from "../../public/background-element.png";

export default function Index() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const projrctSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    // initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Base title="Sinotrade Home Page" class_Name="home">
      <section className="home-banner position-relative overflow-hidden">
        <Image
          src={backgroundelement}
          className="position-absolute bottom-0 z-n1 w-100"
        />
        <div className="container">
          <div className="row overflow-hidden">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <Image src={bannerImg} className="img-fluid pe-md-5" />
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <div className="content">
                <h1 data-aos="fade-up" data-aos-offset="0" data-aos-delay="0">
                  We Source <span>Luxury Furniture</span> from Around the Global
                  for Your <span>Home, Office & Hotel</span>
                </h1>
                <p data-aos="fade-up" data-aos-offset="0" data-aos-delay="400">
                  Transform your space with our exquisite collection of
                  furniture that combines impeccable design with ultimate
                  comfort.
                </p>
                <div
                  className="d-flex gap-3 mb-5"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="800"
                >
                  <a href="#" className="btn-a">
                    Learn More
                  </a>
                  <button className="btn-b d-flex align-items-center gap-3">
                    <PlayIcon />
                    Watch Video
                  </button>
                </div>
                <div className="row gy-4">
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="1200"
                  >
                    <div className="card-a d-flex">
                      <div className="icon">
                        <Image src={cIcon1} />
                      </div>
                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="1400"
                  >
                    <div className="card-a d-flex">
                      <div className="icon">
                        <Image src={cIcon2} />
                      </div>

                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="1600"
                  >
                    <div className="card-a d-flex">
                      <div className="icon">
                        <Image src={cIcon3} />
                      </div>

                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 position-relative d-flex align-items-center ">
              <div className="mb-5 mb-lg-0">
                <Image
                  src={aboutBG}
                  className="bg-img position-absolute end-0 bottom-0 z-n1"
                />
                <h2 className="mb-3">
                  Everything is designed. Few things are designed well
                </h2>
                <p className="mb-5 mt-4 mt-md-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
                <Link href="#" className="btn-b">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 g-md-5 px-md-5 overflow-hidden">
                <div className="col-md-6">
                  <div className="about-card" data-aos="fade-left">
                    <h5>01.</h5>
                    <h4>14 Years of experience</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card" data-aos="fade-left">
                    <h5>02.</h5>
                    <h4>20 awards winning</h4>
                    <p>
                      Vulputate ut pharetra sit amet aliquam id diam maecenas
                      ultricies. Elementum nibh tellus molestie nunc non
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card" data-aos="fade-left">
                    <h5>03.</h5>
                    <h4>
                      200+ <br className="d-none d-md-block" />
                      Products
                    </h4>
                    <p>
                      A lacus vestibulum sed arcu non odio euismod lacinia at.
                      Urna neque viverra justo nec ultrices dui sollicitudin.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card" data-aos="fade-left">
                    <h5>04.</h5>
                    <h4>100+ Happy Clients</h4>
                    <p>
                      Quis blandit turpis cursus in hac habitasse. Dolor sit
                      amet consectetur adipiscing elit duis tristique cursus in
                      hac.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-service overflow-hidden">
        <div className="container-fluid g-0">
          <div className="top">
            <h6 className="section-label mb-3" data-aos="fade-right">
              OUR SERVICES
            </h6>
            <h2 className="mb-5" data-aos="fade-left">
              Your comfort & aesthetic design suitable{" "}
              <span>for your Space</span>
            </h2>
          </div>
          <div className="row g-0">
            <div className="col-md-6 col-lg-4">
              <div className="service-card ">
                <Image src={s1} className="img-fluid" />
                <div className="content">
                  <div className="">
                    <h5 data-aos="fade-right">OFFICE &</h5>
                    <h6 data-aos="fade-left">INSTITUTIONAL SPACE</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card ">
                <Image src={s2} className="img-fluid" />
                <div className="content">
                  <div className="">
                    <h5 data-aos="fade-right">HOME &</h5>
                    <h6 data-aos="fade-left">GARDEN</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card ">
                <Image src={s3} className="img-fluid" />
                <div className="content">
                  <div className="">
                    <h5 data-aos="fade-right">HOTEL</h5>
                    <h6 data-aos="fade-left">& RESORT</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card ">
                <Image src={s4} className="img-fluid" />
                <div className="content">
                  <div className="">
                    <h5 data-aos="fade-right">ACCESORIES</h5>
                    <h6 data-aos="fade-left">& DECOR</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card ">
                <Image src={s5} className="img-fluid" />
                <div className="content">
                  <div className="">
                    <h5 data-aos="fade-right">LIGHTS</h5>
                    <h6 data-aos="fade-left">& LAMPS</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card ">
                <Image src={s6} className="img-fluid" />
                <div className="content">
                  <div className="">
                    <h5 data-aos="fade-right">FINISHING</h5>
                    <h6 data-aos="fade-left">MATERIAL</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects">
        <div className="container">
          <div className="top">
            <h2>
              SNEAK PEAK INTO <br /> OUR <span>PROJECTS</span>
            </h2>
            <div className=" d-flex gap-3 align-items-center">
              <button className="p-btn-a" onClick={() => previous()}>
                <LeftArrrow1 />
              </button>
              <button className="p-btn-b" onClick={() => next()}>
                <RightArrrow1 />
              </button>
            </div>
          </div>
        </div>
        <div className=" container-fluid g-0 w-100">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...projrctSliderSettings}
            >
              <div className="card-outer">
                <div className="project-card">
                  <Image src={p1} className=" img-fluid" />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-outer">
                <div className="project-card">
                  <Image src={p2} className=" img-fluid" />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-outer">
                <div className="project-card">
                  <Image src={p3} className=" img-fluid" />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-outer">
                <div className="project-card">
                  <Image src={p4} className=" img-fluid" />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-outer">
                <div className="project-card">
                  <Image src={p5} className=" img-fluid" />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="home-video">
        <div className="container-fluid g-0">
          <div className="video position-relative">
            <div className="overlay"></div>
            <Image src={vThumb} className=" img-fluid thumb" />
            {/* <button className="play">
              <Image src={playBtn} className="" />
            </button> */}
            <button class="p-btn position-absolute">
              <div class="position-relative">
                <Image src={playBtn} className=" play-img" />
                <div class="circle c1 position-absolute"></div>
                <div class="circle c2 position-absolute"></div>
              </div>
            </button>
          </div>
          {/* <Image src={vThumb} className=" img-fluid" /> */}
        </div>
      </section>

      {/* <section className="home-blog">
        <div className="container">
          <div className="top">
            <h2>
              Bringing Global Elegance to <span>Your Doorstep</span>
            </h2>
          </div>
        </div>
      </section> */}

      <section className="home-gtc">
        <div className="container d-flex justify-content-center ">
          <Link href="/contact">
            Get In Touch{" "}
            <span
              className=" d-flex align align-items-center"
              data-aos="fade-right"
            >
              <RightArrrowBig />
            </span>
          </Link>
        </div>
      </section>
    </Base>
  );
}
