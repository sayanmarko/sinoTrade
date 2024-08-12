import Base from "@/layouts/Baseof";
import Image from "next/image";
import banner from "../../public/project/banner.webp";

import p1 from "../../public/project/project1.png";
import p2 from "../../public/project/project2.png";
import p3 from "../../public/project/project3.png";
import p4 from "../../public/project/project4.png";
import p5 from "../../public/project/project5.png";
import p6 from "../../public/project/project6.png";
import p7 from "../../public/project/project7.png";
import p8 from "../../public/project/project8.png";
import p9 from "../../public/project/project9.png";
import p10 from "../../public/project/project10.png";
import p11 from "../../public/project/project11.png";
import p12 from "../../public/project/project12.png";

const projects = [
  {
    name: "Ritz Carlton Club",
    image: p1,
  },
  {
    name: "Lisbon  Living Room",
    image: p2,
  },
  {
    name: "Barcelona Office",
    image: p3,
  },
  {
    name: "Hilton Club",
    image: p4,
  },
  {
    name: "Double Storeyed Villa",
    image: p5,
  },
  {
    name: "Hilton Guest Bedroom",
    image: p6,
  },
  {
    name: "Zurich Condo",
    image: p7,
  },
  {
    name: "Bali Villa",
    image: p8,
  },
  {
    name: "Bangkok Patio",
    image: p9,
  },
  {
    name: "Instanbul VIlla",
    image: p10,
  },
  {
    name: "Bali Villa",
    image: p11,
  },
  {
    name: "Mumbai Apartment",
    image: p12,
  },
];

function Project() {
  return (
    <Base title="Sinotrade Project Page" class_Name="project-page">
      <section className="banner container-fluid g-0 ">
        <Image src={banner} className=" img-fluid" />
      </section>

      <section className="projects-section">
        <div className=" container">
          <div className="top">
            <h2>OUR RECENT PROJECTS</h2>
          </div>

          <div className="filter-btns d-none">
            <button className="active">ALL</button>
            <button className="">VILLA</button>
            <button className="">APARTMENT</button>
            <button className="">OFFICE</button>
            <button className="">CONDO</button>
          </div>

          <div className="projects-container row g-4 mt-md-5">
            {projects.map((item) => {
              return (
                <div className="col-sm-6 col-md-4">
                  <div className="img-outer">
                    <Image src={item.image} className=" img-fluid" />
                  </div>
                  {/* <h5 className="py-3 py-md-4 m-0">{item.name}</h5> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Base>
  );
}

export default Project;
