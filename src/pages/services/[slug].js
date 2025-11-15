import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import ServiceDetail from "@/components/service/Detail";
import services from "@/data/services.json"; // Import the services data
import Head from "next/head";
import { useRouter } from "next/router";

const ServiceDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  // Find the current service based on the slug
  const currentService = services?.find((service) => service.slug === slug);

  const pageUrl = `https://pdxdrivingschool.com/services/${currentService.slug}`;
  return (
    <Layout>
      <Head>
        {/* Primary SEO */}
        <title>{currentService.title} | PDX Driving School</title>
        <meta name="description" content={currentService.description} />
        <meta
          name="keywords"
          content="driving services, driving lessons, PDX driving school, driver training"
        />
        <meta name="author" content="PDX Driving School" />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / SMO */}
        <meta
          property="og:title"
          content={`${currentService.title} | PDX Driving School`}
        />
        <meta property="og:description" content={currentService.description} />
        <meta
          property="og:image"
          content={`https://pdxdrivingschool.com${currentService.image}`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${currentService.title} | PDX Driving School`}
        />
        <meta name="twitter:description" content={currentService.description} />
        <meta
          name="twitter:image"
          content={`https://pdxdrivingschool.com${currentService.image}`}
        />
      </Head>

      <PageHeader title="Our Services" />
      <ServiceDetail />
    </Layout>
  );
};
export default ServiceDetailPage;
