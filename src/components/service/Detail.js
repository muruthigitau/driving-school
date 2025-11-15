import services from "@/data/services.json"; // Import the services data
import { useRouter } from "next/router";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the current service based on the slug
  const currentService = services?.find((service) => service.slug === slug);

  // Filter out the current service to display other services? in the sidebar
  const remainingServices = services?.filter(
    (otherService) => otherService.slug !== slug
  );

  return (
    <section className="service-details">
      <div className="container">
        <div className="row gutter-y-30">
          <div className="col-md-12 col-lg-4">
            <div className="service-sidebar">
              <div
                className="service-sidebar__single wow fadeInUp animated"
                data-wow-delay="500ms"
              >
                <h3 className="service-sidebar__title background-black-2">
                  All Services
                </h3>
                <ul className="list-unstyled service-sidebar__nav">
                  {remainingServices.map((otherService) => (
                    <li key={otherService.slug}>
                      <a href={`/services/${otherService.slug}`}>
                        {otherService.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="service-sidebar__single wow fadeInUp animated"
                data-wow-delay="500ms"
              >
                <div className="service-sidebar__contact">
                  <h3 className="service-sidebar__contact-title">
                    Get a Free Quick Solution of Driving
                  </h3>
                  <div className="service-sidebar__contact-btn">
                    <a
                      href="/contact"
                      className="drivschol-btn drivschol-btn--base2"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="service-sidebar__contact-image">
                    <img src="/assets/images/service/service-m-1.jpg" alt="" />
                  </div>
                  <div className="service-sidebar__contact-angle">
                    <svg
                      width="370"
                      height="210"
                      viewBox="0 0 370 210"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M259.647 0L0 210H370L259.647 0Z"
                        fill="#EC2526"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="service-details__content">
              <div className="service-details__single">
                <div
                  className="service-details__thumbnail wow fadeInUp animated"
                  data-wow-delay="300ms"
                >
                  <h3
                    className="service-details__title wow fadeInUp animated"
                    data-wow-delay="300ms"
                  >
                    {currentService?.title}
                  </h3>
                  <p
                    className="service-details__text wow fadeInUp animated"
                    data-wow-delay="350ms"
                  >
                    {currentService?.description}
                  </p>
                  <img
                    src={currentService?.image}
                    alt={currentService?.title}
                  />
                </div>

                <p
                  className="service-details__text wow fadeInUp animated"
                  data-wow-delay="350ms"
                >
                  {currentService?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
