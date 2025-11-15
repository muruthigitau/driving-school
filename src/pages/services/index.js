import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import HomeServices from "@/components/service/homeservices";
import Head from "next/head";

const ServicePage = () => {
  return (
    <Layout>
      <Head>
        {/* Primary SEO Meta */}
        <title>Our Driving School Services | PDX Driving School</title>
        <meta
          name="description"
          content="Explore professional driving school services at PDX Driving School. We offer beginner driving lessons, refresher courses, test preparation, defensive driving training, and more."
        />
        <meta
          name="keywords"
          content="driving school services, driving lessons, defensive driving, driving test preparation, PDX Driving School"
        />
        <meta name="author" content="PDX Driving School" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pdxdrivingschool.com/services" />

        {/* Open Graph / SMO */}
        <meta
          property="og:title"
          content="Our Driving School Services | PDX Driving School"
        />
        <meta
          property="og:description"
          content="Learn about the wide range of driving services we offer — from beginner lessons to advanced driver training."
        />
        <meta
          property="og:image"
          content="https://pdxdrivingschool.com/assets/service.jpg"
        />
        <meta
          property="og:url"
          content="https://pdxdrivingschool.com/services"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Driving School Services | PDX Driving School"
        />
        <meta
          name="twitter:description"
          content="Discover all our professional driving services at PDX Driving School."
        />
        <meta
          name="twitter:image"
          content="https://pdxdrivingschool.com/assets/service.jpg"
        />
      </Head>

      <PageHeader title="Our Services" />
      <HomeServices />
    </Layout>
  );
};
export default ServicePage;
