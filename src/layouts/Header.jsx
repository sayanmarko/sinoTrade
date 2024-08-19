import next from "next";
import Image from "next/image";
import Link from "next/link";

// import Nav from "react-bootstrap/Nav";
// import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

//
import logo from "../../public/logo.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let navbar = document.querySelector("header");
    function handleScroll() {
      if (window.scrollY > 0) {
        navbar.classList.add("fixed-navbar");
      } else {
        navbar.classList.remove("fixed-navbar");
      }
    }
    window.addEventListener("scroll", handleScroll);
    //
    document.querySelector(
      "main"
    ).style.paddingTop = `${navbar.offsetHeight}px `;
  });
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container py-2">
          <Navbar.Brand href="/">
            <div className="logo">
              <Image src={logo} alt="" className="img-fluid" />
            </div>
          </Navbar.Brand>
          <Button variant="" onClick={handleShow} className="d-block d-lg-none">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton className="me-2 border-bottom">
              <Link href={"/"}>
                <Image src={logo} alt="" className="img-fluid" />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav align-items-start ps-4">
                <li className="nav-item">
                  <Link className="nav-link link link1" href="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link link1" href="/project">
                    Project
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link link link1" href="/our-products">
                    Our Products
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link link link1" href="/our-services">
                    Our Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link link1" href="/catalogues">
                    Catalogues
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link link1" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>

          {/*  */}

          <ul className="navbar-nav align-items-center d-none d-lg-flex">
            <li className="nav-item">
              <Link className="nav-link link link1" href="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link link1" href="/project">
                Project
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link link link1" href="/our-products">
                Our Products
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link link link1" href="/our-services">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link link1" href="/catalogues">
                Catalogues
              </Link>
            </li>
            <li className="nav-item">
              <Link className="cta-btn" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
