import Base from "@/layouts/Baseof";
import Image from "next/image";
import banner from "../../public/catalogues/banner.webp";

//
import dArrow from "../../public/icons/down-arrow.png";
//
import table from "../../public/catalogues/tables.webp";
import sofa from "../../public/catalogues/sofa.webp";
import bedroom from "../../public/catalogues/bedroom.webp";
import lighting from "../../public/catalogues/lighting.webp";

function Catalouges() {
  return (
    <Base title="Sinotrade Catalouges Page" class_Name="catalogues-page">
      <section className="banner container-fluid g-0 ">
        <Image src={banner} className=" img-fluid" />
      </section>

      <section className="top-section">
        <div className="container">
          <h2>Making Your Space a happy place</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
            bibendum neque egestas congue quisque egestas diam. Placerat orci
            nulla pellentesque
          </p>
        </div>
      </section>

      <section className="catalouge-items">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="catalouge-item">
                <Image src={table} alt="" className="bg-img" />
                <h4 className="black">tables</h4>
                <a href="#">
                  <Image src={dArrow} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="catalouge-item">
                <Image src={sofa} alt="" className="bg-img" />
                <h4>sofa</h4>
                <a href="#">
                  <Image src={dArrow} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="catalouge-item">
                <Image src={bedroom} alt="" className="bg-img" />
                <h4>bedroom</h4>
                <a href="#">
                  <Image src={dArrow} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="catalouge-item">
                <Image src={lighting} alt="" className="bg-img" />
                <h4>lighting</h4>
                <a href="#">
                  <Image src={dArrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default Catalouges;
