import Base from "@/layouts/Baseof";
import Link from "next/link";

export default function Index() {
  return (
    <Base title="Sinotrade Home Page">
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
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
                <div className="d-flex"></div>
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex">
                      {/* <Image src={} /> */}
                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex">
                      {/* <Image src={} /> */}
                      <div className="">
                        <h4>Quality Craftsmanship</h4>
                        <p>
                          We commitment to delivering furniture of the highest
                          quality
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex">
                      {/* <Image src={} /> */}
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
            <div className="colmd-6">
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
            <div className="colmd-6">
              <div className="row">
                <div className="col-md-6">
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container"></div>
      </section>
    </Base>
  );
}
