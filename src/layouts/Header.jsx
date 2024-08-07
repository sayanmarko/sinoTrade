import next from "next";
import Image from "next/image";
import Link from "next/link";

// import Nav from "react-bootstrap/Nav";
// import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

//
import logo from "../../public/logo.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header class="">
      <nav class="navbar navbar-expand-lg p-0">
        <div class="container py-1 py-md-2">
          <Navbar.Brand href="/">
            <div class="logo">
              <Image src={logo} alt="" className="img-fluid" />
            </div>
          </Navbar.Brand>
          <Button variant="" onClick={handleShow} className="d-block d-lg-none">
            <span class="navbar-toggler-icon"></span>
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <ul class="navbar-nav align-items-center">
                <li class="nav-item">
                  <Link class="nav-link active" href="/about-us">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/project">
                    Project
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/our-products">
                    Our Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/our-services">
                    Our Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/catalogues">
                    Catalogues
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>

          {/*  */}

          <ul class="navbar-nav align-items-center d-none d-lg-flex">
            <li class="nav-item">
              <Link class="nav-link active" href="/about-us">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/project">
                Project
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/our-products">
                Our Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/our-services">
                Our Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/catalogues">
                Catalogues
              </Link>
            </li>
            <li class="nav-item">
              <Link class="cta-btn" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
