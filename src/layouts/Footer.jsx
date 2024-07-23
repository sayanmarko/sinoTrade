import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

//images & icons
import envlop from "../../public/icons/envlop.png";
import phone from "../../public/icons/phone.png";
import mapPin from "../../public/icons/map-pin.png";

import facebook from "../../public/icons/facebook.png";
import instagram from "../../public/icons/instagram.png";
import twitter from "../../public/icons/twitter.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-4">
            <Link href="/">
              <Image src={logo} className=" img-fluid logo" />
            </Link>
            <p className="mt-3 mb-4 pe-md-4">
              Sinotrade Global Ltd is a company registered in Hong Kong and has
              successfully been a sourcing agent and indenting agent for the
              last 13 years.
            </p>
            <ul className=" d-flex gap-2">
              <li>
                <Link href="#">
                  <Image src={facebook} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={twitter} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={instagram} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Help & support</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h3>Product</h3>
            <ul>
              <li>
                <Link href="#">Chair</Link>
              </li>
              <li>
                <Link href="#">Sofa</Link>
              </li>
              <li>
                <Link href="#">Table</Link>
              </li>
              <li>
                <Link href="#">Lamp</Link>
              </li>
              <li>
                <Link href="#">Mirrors</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <ul className="cta">
              <li>
                <Image src={mapPin} />
                <div className="">
                  <h5 className="">Sinotrade Global Ltd</h5>
                  <p className="">
                    Sinotrade Global Ltd HKSuite 1009, Dongshan Plaza, No.69,
                    Xianlie, Road Central, Guangzhou City, Guangdong Province,
                    China 510095
                  </p>
                </div>
              </li>
              <li>
                <Image src={phone} />
                <div className="">
                  <a href="tel:000">+ 86 20 87327751</a>
                  <br />
                  <a href="tel:000">+ 86 20 87326815</a>
                </div>
              </li>
              <li>
                <Image src={envlop} />
                <a href="mailto:info@sinotradeglobal.com">
                  info@sinotradeglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
