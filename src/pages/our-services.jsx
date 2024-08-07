import Base from "@/layouts/Baseof";
import Image from "next/image";
import React from "react";

import banner from "../../public/our-services/banner.png";

import sf1 from "../../public/icons/service-feature-icon1.png";
import sf2 from "../../public/icons/service-feature-icon2.png";
import sf3 from "../../public/icons/service-feature-icon3.png";
import sf4 from "../../public/icons/service-feature-icon4.png";

import sv1 from "../../public/our-services/service-img1.png";
import sv2 from "../../public/our-services/service-img2.png";
import sv3 from "../../public/our-services/service-img3.png";

import videoThumbnail from "../../public/our-services/video-thumbnail.webp";
import playIcon from "../../public/icons/Play-icon.png";

function OurServices() {
  return (
    <Base title="Sinotrade Our Services Page" class_Name="our-services">
      <section className="banner">
        <div className="container-fluid g-0 position-relative">
          <Image src={banner} />
          <h1>our services</h1>
        </div>
      </section>

      <section className="service-feature">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="feature">
                <div className="d-flex mb-3 gap-3 align-items-center">
                  <Image src={sf1} />
                  <h4>CURATE YOUR SPACE</h4>
                </div>
                <p>
                  Id donec ultrices tincidunt arcu non sodales neque sodales
                  habitasse.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature">
                <div className="d-flex mb-3 gap-3 align-items-center">
                  <Image src={sf2} />
                  <h4>IMPORT FINEST PIECES</h4>
                </div>
                <p>
                  Id donec ultrices tincidunt arcu non sodales neque sodales
                  habitasse.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature">
                <div className="d-flex mb-3 gap-3 align-items-center">
                  <Image src={sf3} />
                  <h4>UNCOMPROMISED QUALITY</h4>
                </div>
                <p>
                  Id donec ultrices tincidunt arcu non sodales neque sodales
                  habitasse.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature">
                <div className="d-flex mb-3 gap-3 align-items-center">
                  <Image src={sf4} />
                  <h4>NO HASSLE, EASY SHIPPING</h4>
                </div>
                <p>
                  Id donec ultrices tincidunt arcu non sodales neque sodales
                  habitasse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="row g-0 details details-1">
            <div className="col-md-6">
              <div className="content">
                <h2>Interior Design Consultation</h2>
                <p>
                  Cursus vitae congue mauris rhoncus. Amet est placerat in
                  egestas erat. Pharetra magna ac placerat vestibulum lectus.
                  Felis eget velit aliquet sagittis id consectetur.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Image src={sv1} className="img-fluid" />
            </div>
          </div>

          <div className="row g-0 details details-2">
            <div className="col-md-6 order-2 order-md-1">
              <Image src={sv2} className="img-fluid" />
            </div>
            <div className="col-md-6 order-1 order-md-2 d-flex justify-content-md-end">
              <div className="content">
                <h2>Space Planning</h2>
                <p>
                  Cursus eget nunc scelerisque viverra mauris. Sit amet justo
                  donec enim diam vulputate. Laoreet sit amet cursus sit amet
                  dictum sit amet justo. Sed vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-0 details details-3">
            <div className="col-md-6">
              <div className="content">
                <h2>Material and Furniture Sourcing</h2>
                <p>
                  Volutpat est velit egestas dui id. Arcu felis bibendum ut
                  tristique et egestas quis ipsum. Sed risus pretium quam
                  vulputate. Aliquam id diam maecenas.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Image src={sv3} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className=" container-fluid g-0">
          <h2>space planners & designers</h2>
          <div className="video position-relative">
            <Image src={videoThumbnail} className=" img-fluid thumb" />
            <button className="play">
              <Image src={playIcon} className="" />
            </button>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default OurServices;
