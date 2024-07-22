import Base from "@/layouts/Baseof";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "../../public/banner-img.png";
import PlayIcon from "../../public/icons/play.svg";
import cIcon1 from "../../public/icons/c-icon1.png";
import cIcon2 from "../../public/icons/c-icon2.png";
import cIcon3 from "../../public/icons/c-icon3.png";

import backgroundelement from "../../public/background-element.png";

export default function Index() {
  return (
    <Base title="Sinotrade Home Page" class_Name="home">
      <section className="home-banner position-relative overflow-hidden">
        <Image
          src={backgroundelement}
          className="position-absolute bottom-0 z-n1"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <Image src={bannerImg} className="img-fluid pe-md-5" />
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <div className="content">
                <h1>
                  We Source <span>Luxury Furniture</span> from Around the Global
                  for Your <span>Home, Office & Hotel</span>
                </h1>
                <p>
                  Transform your space with our exquisite collection of
                  furniture that combines impeccable design with ultimate
                  comfort.
                </p>
                <div className="d-flex gap-3 mb-5">
                  <a href="#" className="btn-a">
                    Learn More
                  </a>
                  <button className="btn-b d-flex align-items-center gap-2">
                    <PlayIcon /> Watch Video
                  </button>
                </div>
                <div className="row gy-4">
                  <div className="col-md-4">
                    <div className="card-a d-flex">
                      <Image src={cIcon1} />
                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-a d-flex">
                      <Image src={cIcon2} />
                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-a d-flex">
                      <Image src={cIcon3} />
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

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Everything is designed. Few things are designed well</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut{" "}
                </p>
                <Link href="#" className="">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-card">
                    <h5>01.</h5>
                    <h4>14 Years of experience</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card">
                    <h5>02.</h5>
                    <h4>20 awards winning</h4>
                    <p>
                      Vulputate ut pharetra sit amet aliquam id diam maecenas
                      ultricies. Elementum nibh tellus molestie nunc non
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card">
                    <h5>03.</h5>
                    <h4>200+ Products</h4>
                    <p>
                      A lacus vestibulum sed arcu non odio euismod lacinia at.
                      Urna neque viverra justo nec ultrices dui sollicitudin.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card">
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

      <section>
        <div className="container-fluid">
          <div className=""></div>
          <h2></h2>
          <div className="row"></div>
        </div>
      </section>

      <section className="">
        <div className="container"></div>
      </section>
    </Base>
  );
}
