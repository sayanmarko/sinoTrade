import next from "next";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <div class="logo">
              <Image src="../../public/logo.png" alt="" width="auto" />
            </div>
          </Link>

          <button
            class="btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
          >
            <div class="offcanvas-header d-flex d-lg-none justify-content-end pt-4 pe-4">
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body justify-content-lg-end">
              <ul class="navbar-nav align-items-center">
                <li class="nav-item">
                  <Link class="nav-link active" href="./">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="./">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="./">
                    Our Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="./">
                    Our Client Reviews
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="./">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
