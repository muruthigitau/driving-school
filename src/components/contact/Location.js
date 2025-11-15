const ContactLocation = () => {
  return (
    <section class="contact-location">
      <div class="container">
        <div class="contact-location__header">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div
                class="sec-title  text-start wow fadeInUp animated"
                data-wow-delay="300ms"
              >
                <h6 class="sec-title__tagline">
                  <i class="icon-left-arrow sec-title__img"></i>
                  Location
                  <i class="icon-right-arrow sec-title__img"></i>
                </h6>

                <h3 class="sec-title__title">
                  See Driving Schools Locations <br /> Near by You
                </h3>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="contact-location__subheading wow fadeInUp animated"
                data-wow-delay="300ms"
              >
                <p class="contact-location__subheading__text">
                  There are many variations of passages of Lorem Ipsum
                  avagtilable, but the majority have suffered alteration in some
                  form, by injected hudfdfmour, or randomised words
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="contact-location__inner tabs-box wow fadeInUp animated"
          data-wow-delay="300ms"
        >
          <div class="tabs-content">
            <div
              class="contact-location__inner__item fadeInUp animated tab active-tab"
              id="netherland"
            >
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="contact-location__inner__item__image">
                    <img
                      src="/assets/images/gallery/contact-b-1-1.jpg"
                      class="image-fluid"
                      alt="contact-location__inner__item__image"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="contact-location__inner__item__content">
                    <div class="contact-location__inner__item__content__info">
                      <a
                        href="tel:+8801775-338747"
                        class="contact-location__inner__item__content__info__btn d-flex align-items-center"
                      >
                        <div class="contact-location__inner__item__content__info__icon">
                          <i class="icon-Call"></i>
                        </div>
                        <div class="content">
                          <span class="contact-location__inner__item__content__info__text">
                            Call to Questions
                          </span>
                          <h6 class="contact-location__inner__item__content__info__call">
                            + 000 000 0000
                          </h6>
                        </div>
                      </a>
                    </div>

                    <div class="contact-location__inner__item__content__info">
                      <a
                        href="mailto:motabbirdev@gmail.com"
                        class="contact-location__inner__item__content__info__btn d-flex align-items-center"
                      >
                        <div class="contact-location__inner__item__content__info__icon">
                          <i class="icon-envelope"></i>
                        </div>
                        <div class="content">
                          <span class="contact-location__inner__item__content__info__text">
                            Send Email
                          </span>
                          <h6 class="contact-location__inner__item__content__info__call">
                            pdxdrivingschool@gmail.com
                          </h6>
                        </div>
                      </a>
                    </div>

                    <div class="contact-location__inner__item__content__info">
                      <a
                        href="https://www.google.com/maps"
                        class="contact-location__inner__item__content__info__btn d-flex align-items-center"
                      >
                        <div class="contact-location__inner__item__content__info__icon">
                          <i class="icon-map-pin"></i>
                        </div>
                        <div class="content">
                          <span class="contact-location__inner__item__content__info__text">
                            Visit Anytime
                          </span>
                          <h6 class="contact-location__inner__item__content__info__call">
                            18055 SE Division Street #201 Portland OR 97236
                          </h6>
                        </div>
                      </a>
                    </div>

                    <div class="contact-location__inner__item__content__right">
                      <div class="contact-location__inner__item__content__right__item">
                        <span class="contact-location__inner__item__content__right__item__day">
                          Mon - Fri
                        </span>
                        <p class="contact-location__inner__item__content__right__item__time">
                          09.00 am - 4.00 pm
                        </p>
                      </div>
                      <div class="contact-location__inner__item__content__right__item">
                        <span class="contact-location__inner__item__content__right__item__day">
                          Saturday
                        </span>
                        <p class="contact-location__inner__item__content__right__item__time">
                          10.00 am - 2.00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
