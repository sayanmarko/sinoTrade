import Base from "@/layouts/Baseof";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import React from "react";

import banner from "../../public/about-us/banner.webp";

import furnitureImg from "../../public/about-us/furniture-img1.webp";

import f1 from "../../public/about-us/feature-img1.webp";
import f2 from "../../public/about-us/feature-img2.webp";
import f3 from "../../public/about-us/feature-img3.webp";

import w1 from "../../public/about-us/workflow-img1.png";
import w2 from "../../public/about-us/workflow-img2.png";
import w3 from "../../public/about-us/workflow-img3.png";

import tm1 from "../../public/team-member1.jpg";
import tm2 from "../../public/team-member2.jpg";
import tm3 from "../../public/team-member3.jpg";
import tm4 from "../../public/team-member4.jpg";

import box from "../../public/icons/package.png";
import thumbsup from "../../public/icons/thumbs-up.png";
import quote from "../../public/icons/quote.png";

function AboutUs() {
  const reviewSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
  const workflowSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    <Base title="Sinotrade about us Page" class_Name="about-us">
      <section className="banner ">
        <div className="container position-relative h-100">
          <Image
            src={banner}
            height={700}
            alt=""
            data-aos="fade-left"
            className=" position-absolute end-0 top-0 img-fluid d-none d-lg-block"
          />
          <div className="row align-items-center h-100">
            <div
              className="col-12 col-lg-8 col-xl-6 position-relative"
              data-aos="fade-right"
            >
              <h5 className="mb-4">FURNITURE SOURCING SOLUTION FOR ALL</h5>
              <h1>
                SINOTRADE <span>GLOBAL</span>
              </h1>
              <p className="mb-4">
                Stay informed about the market with real furniture news and
                insights provided by furniture professionals and EXIM agencies.
              </p>

              <Link href="#" className="btn-a">
                See Our Completed Projects
              </Link>
            </div>
            {/* <div className="col-xl-6">
              <Image src={banner} height={800} className="img-fluid" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="furniture overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-5" data-aos="fade-up">
                Magnificent Furniture
              </h2>
              <p className="mb-md-5 pb-5 fw-light" data-aos="fade-up">
                Donec bibendum, dui id ultrices molestie, neque neque porta
                felis, id viverra ligula justo interdum mi. Dummy content lorem
                ispum nunc malesuada, risus eu maximus consequat, purus enim
                ultricies nisi, elit ante et turpis.{" "}
              </p>
              <div className="counter-box">
                <div className="icon">
                  <Image src={thumbsup} alt="" />
                </div>
                <div className="">
                  <VisibilitySensor partialVisibility offset={{ bottom: 80 }}>
                    {({ isVisible }) => (
                      <div className="counter-height">
                        {isVisible ? (
                          <h4>
                            <CountUp end={875} />+
                          </h4>
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                  <p>Projects Done</p>
                </div>
              </div>
              <div className="counter-box">
                <div className="icon">
                  <Image src={box} alt="" />
                </div>
                <div className="">
                  <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                    {({ isVisible }) => (
                      <div className="counter-height">
                        {isVisible ? (
                          <h4>
                            <CountUp end={320} />
                          </h4>
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                  <p>Products Created</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <Image
                src={furnitureImg}
                alt=""
                data-aos="fade-left"
                className="main-img"
              />{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="mb-4 mb-md-4">THE COMFORT INTERIOR</h2>
              <p className="mb-4">
                Finally an article that won't rehash the same old information!
                Here are 5 tips from realtors all over the world on how to
                choose the best property agent for you
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-down">
              <Image src={f1} className=" img-fluid" />
            </div>
            <div className="col-md-8 pt-3 pt-md-5" data-aos="fade-up">
              <Image src={f2} className=" img-fluid" />
            </div>
          </div>

          <div className="row pt-2 pt-md-5  g-md-5 align-items-end">
            <div className="col-md-6 order-2 order-md-1">
              <Image src={f3} className=" img-fluid" alt="" />
            </div>
            <div
              className="col-md-6 ps-md-4 order-1 order-md-2 mb-4 mb-md-4"
              data-aos="fade-down"
            >
              <h2 className=" mb-4 mb-md-4">
                We bring you The best PIECES to decorate your home & work
              </h2>
              <p className="pb-3 pb-md-0">
                It's one of the most exciting moments in your life – but it can
                also be overwhelming. As you start furniture hunting, there are
                a few easy things you should look out for to make sure you'll be
                happy in your next home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow overflow-hidden">
        <div className="container ">
          <div className="top position-relative">
            <Image src={w1} className="w1" alt="" data-aos="fade-down-right" />
            <Image src={w2} className="w2" alt="" data-aos="fade-down" />
            <Image src={w3} className="w3" alt="" data-aos="fade-down-left" />
            <h2>We’d like to share our workflow</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="slider-container mt-md-5">
            <Slider {...workflowSliderSettings}>
              <div className="workflow-card">
                <h4>01</h4>
                <h3>Research & Plan</h3>
                <p>
                  Design process is critical for gathering information,
                  requirements, and other data you need in order to make
                  informed decisions later.
                </p>
              </div>
              <div className="workflow-card">
                <h4>02</h4>
                <h3>connect with vendors</h3>
                <p>
                  Creating a mock up is the step of the design process most
                  people recognize — it’s the most visual part of the process
                  In-depth sketching and brainstorming.
                </p>
              </div>
              <div className="workflow-card">
                <h4>03</h4>
                <h3>FINALISE</h3>
                <p>
                  Implement the solution (often with the help of other
                  professionals like programmers, printers, or
                  manufacturers)Revise the solution
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="container">
          <div className="top">
            <h2 data-aos="fade-right">Customer is Our Priority</h2>
            <p data-aos="fade-right">
              Our clients are very satisfied with our service which can be
              understood by looking at their feedback
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="slider-container mt-md-5">
            <Slider {...reviewSliderSettings}>
              <div className="review-card">
                <Image src={quote} className="quote" />
                <h4>very professional & fair</h4>
                <p>
                  So far we are enjoy to stay in this house. Also amazing
                  experience working together Coca Team. They are very
                  passionate.{" "}
                </p>
                <div className="customer">
                  <div className="profile-img"></div>
                  <div className="">
                    <h5 className="name">Jhonatan Albert</h5>
                    <p className="type">Student</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <Image src={quote} className="quote" />
                <h4>very professional & fair</h4>
                <p>
                  So far we are enjoy to stay in this house. Also amazing
                  experience working together Coca Team. They are very
                  passionate.{" "}
                </p>
                <div className="customer">
                  <div className="profile-img"></div>
                  <div className="">
                    <h5 className="name">Jhonatan Albert</h5>
                    <p className="type">Student</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <Image src={quote} className="quote" />
                <h4>really reLIABLE for sourcing</h4>
                <p>
                  “They are able to help a startup like mine scale and are very
                  responsive to all our unique needs”
                </p>
                <div className="customer">
                  <div className="profile-img"></div>
                  <div className="">
                    <h5 className="name">Jhonatan Albert</h5>
                    <p className="type">Student</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <Image src={quote} className="quote" />
                <h4>very professional & fair</h4>
                <p>
                  So far we are enjoy to stay in this house. Also amazing
                  experience working together Coca Team. They are very
                  passionate.{" "}
                </p>
                <div className="customer">
                  <div className="profile-img"></div>
                  <div className="">
                    <h5 className="name">Jhonatan Albert</h5>
                    <p className="type">Student</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <div className="top">
            <h2>Meet our team</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <Image src={tm1} />
                <h4>Siddharth Bhartiya</h4>
                <h6>MD & CEO</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <Image src={tm2} />
                <h4>Irina</h4>
                <h6>Marketing Head</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <Image src={tm3} />
                <h4>Michal Brink</h4>
                <h6>Art director</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <Image src={tm4} />
                <h4>Guy Mccoy</h4>
                <h6> Art director</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default AboutUs;
