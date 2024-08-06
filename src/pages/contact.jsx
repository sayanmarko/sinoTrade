import Base from "@/layouts/Baseof";
import React from "react";

function Contact() {
  return (
    <Base title="Sinotrade Contact Pag" class_Name="contact-page">
      <section className="">
        <div className="container">
          <h1 className="text-center">Contact us</h1>
          <div className="row">
            <div className="col-md-6">
              <h4>China</h4>
              <div className="">
                <h6>Address</h6>
                <p>
                  Sinotrade Global Ltd <br />
                  HKSuite 1009, <br />
                  Dongshan Plaza <br />
                  No.69, Xianlie Road Central <br />
                  Guangzhou City <br />
                  Guangdong Province <br />
                  China 510095 <br />
                </p>
              </div>
              <div className="">
                <h6>Phone Number</h6>
                <a href="">+ 86 20 87327751 </a> <br />
                <a href="">+ 86 20 87326815</a>
              </div>
              <div className="">
                <h6>Email Address</h6>
                <p>info@sinotrade.com.cn</p>
              </div>
            </div>

            <div className="col-md-6">
              <h4>India</h4>
              <div className="">
                <h6>Address</h6>
                <p>
                  Glace Ecosystems Pvt Ltd <br />
                  P 552, Block N, Flat 4A <br />
                  Kunti Building, <br />
                  4th floor, <br />
                  New Alipore <br />
                  Kolkata: 700053 <br />
                  West Bengal, India <br />
                </p>
              </div>
              <div className="">
                <h6>Phone Number</h6>
                <a href="">+ 91 33 24008796</a> <br />
                <a href="">+91 97484 18643</a>
              </div>
              <div className="">
                <h6>Email Address</h6>
                <p>info@sinotrade.com.cn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <form action="#" className="row px-2 px-md-5 g-5">
            <h3>Let’s Talk</h3>
            <div className="col-md-6">
              <input type="text" name="" id="" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <div className="col-md-12">
              <input type="text" name="" id="" placeholder="Email Address" />
            </div>
            <div className="col-md-12">
              <textarea name="message" id="" placeholder="Message"></textarea>
            </div>
            <div className="col-md-12 d-flex pt-md-4">
              <button className="" type="submit">
                send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Base>
  );
}

export default Contact;
