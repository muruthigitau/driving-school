import Link from "next/link";

const Footer = () => {
  return (
    <footer class="main-footer background-black-2">
      <div class="main-footer__top">
        <div class="container">
          <div class="main-footer__inner">
            <Link href="/" class="main-footer__inner-logo">
              <img
                src="/assets/images/logo-light.png"
                width="174"
                alt="PDX Driving School"
              />
            </Link>
            <div class="main-footer__inner-social">
              {/* <!-- social link--> */}
              <Link href="https://facebook.com">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
              </Link>
              <Link href="https://twitter.com">
                <i class="icon-twitter" aria-hidden="true"></i>
              </Link>
              <Link href="https://instagram.com">
                <i class="icon-Instagram" aria-hidden="true"></i>
              </Link>
            </div>
            {/* <!-- /.footer-widget__social --> */}
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.main-footer__top --> */}

      <div class="main-footer__middle">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-3">
              <div class="footer-widget">
                <div class="footer-widget--links">
                  <h4 class="footer-widget__title">Quick Links</h4>
                  <ul class="list-unstyled footer-widget__links">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled footer-widget__links --> */}
                </div>
                {/* <!-- /.footer-widget --> */}
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>
            {/* <!-- /.col-md-6 --> */}

            {/* <!-- /.col-md-6 --> */}
            <div class="col-md-6 col-xl-4 offset-xl-1">
              <div class="footer-widget footer-widget__right">
                <div class="footer-widget--about">
                  <ul class="list-unstyled footer-widget__info">
                    <li>
                      <i class="icon-map-pin" aria-hidden="true"></i>
                      <a
                        href="https://www.google.com/maps/place/2049+SE+102nd+Ave,+Portland,+OR+97216"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        18055 SE Division Street #201 Portland OR 97236
                      </a>
                    </li>
                    <li>
                      <i class="icon-telephone-call-1" aria-hidden="true"></i>
                      <Link href="tel:+000 000 0000">000 000 0000</Link>
                    </li>
                    <li>
                      <i class="icon-envelope" aria-hidden="true"></i>
                      <Link href="mailto:pdxdrivingschool@gmail.com">
                        pdxdrivingschool@gmail.com
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled --> */}
                </div>
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>

            <div class="col-md-6 col-xl-4">
              <div class="footer-widget">
                <div class="footer-widget--gallry">
                  <div class="footer-widget__grid">
                    <Link
                      href="/assets/images/gallery/gallery-2-1.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-1.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="/assets/images/gallery/gallery-2-2.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-2.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="/assets/images/gallery/gallery-2-3.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-3.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="/assets/images/gallery/gallery-2-4.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-4.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="/assets/images/gallery/gallery-2-5.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-5.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="/assets/images/gallery/gallery-2-6.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-6.jpg)",
                      }}
                    ></Link>
                  </div>
                </div>
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>
            {/* <!-- /.col-md-6 --> */}

            {/* <!-- /.col-md-6 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.main-footer__middle --> */}

      <div class="main-footer__bottom">
        <div class="container">
          <div class="main-footer__bottom__inner">
            <p class="main-footer__copyright">
              &copy; Copyright <span class="dynamic-year"></span> by PDX Driving
              School | All rights reserved. Designed with ❤️ by
              <Link
                href="https://mslabdesigns.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff" }}
              >
                {" "}
                Mslabdesigns
              </Link>
            </p>
          </div>
          {/* <!-- /.main-footer__inner --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.main-footer__bottom --> */}
    </footer>
  );
};
export default Footer;
