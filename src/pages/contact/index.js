import HomeContact from "@/components/contact/homecontact";
import ContactLocation from "@/components/contact/Location";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import Head from "next/head";

const ContactPage = () => {
  const pageUrl = "https://pdxdrivingschool.com/contact";

  return (
    <>
      <Head>
        {/* SEO Meta */}
        <title>Contact Us | PDX Driving School</title>
        <meta
          name="description"
          content="Get in touch with PDX Driving School for driving lessons, course inquiries, or general questions. We are here to help you learn to drive safely."
        />
        <meta
          name="keywords"
          content="contact PDX Driving School, driving school Portland contact, driving lessons inquiry, Portland driving school"
        />
        <meta name="author" content="PDX Driving School" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / SMO */}
        <meta property="og:title" content="Contact Us | PDX Driving School" />
        <meta
          property="og:description"
          content="Reach out to PDX Driving School for driving lessons, guidance, or questions about our courses."
        />
        <meta
          property="og:image"
          content="https://pdxdrivingschool.com/assets/contact.jpg"
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | PDX Driving School" />
        <meta
          name="twitter:description"
          content="Contact PDX Driving School for driving lessons and course inquiries in Portland."
        />
        <meta
          name="twitter:image"
          content="https://pdxdrivingschool.com/assets/contact.jpg"
        />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <PageHeader title="Contact us" />
        <HomeContact />
        <ContactLocation />
      </Layout>
    </>
  );
};

export default ContactPage;
