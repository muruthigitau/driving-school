import Courses from "@/components/courses";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import Head from "next/head";

const CoursePage = () => {
  const pageUrl = "https://pdxdrivingschool.com/courses";

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Driving Courses | PDX Driving School</title>
        <meta
          name="description"
          content="Explore professional driving courses at PDX Driving School. We offer behind-the-wheel training, in-class driving lessons, defensive driving, and more."
        />
        <meta
          name="keywords"
          content="driving courses, behind the wheel training, driving classes, driver education, Portland driving school"
        />
        <meta name="author" content="PDX Driving School" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / SMO Meta */}
        <meta
          property="og:title"
          content="Driving Courses | PDX Driving School"
        />
        <meta
          property="og:description"
          content="Choose from our top-rated driving courses designed to help you become a confident and responsible driver."
        />
        <meta
          property="og:image"
          content="https://pdxdrivingschool.com/assets/images/meta/course.jpg"
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Driving Courses | PDX Driving School"
        />
        <meta
          name="twitter:description"
          content="Explore our range of driving courses designed to help you become a skilled and confident driver."
        />
        <meta
          name="twitter:image"
          content="https://pdxdrivingschool.com/assets/images/meta/course.jpg"
        />
      </Head>

      <Layout>
        <PageHeader title="Our Courses" />
        <Courses />
      </Layout>
    </>
  );
};

export default CoursePage;
