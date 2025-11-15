import MainAbout from "@/components/about/mainabout";
import CourseCategory from "@/components/category";
import Cta from "@/components/cta";
import FunFact from "@/components/funfact";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import HomeServices from "@/components/service/homeservices";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        {/* Primary SEO */}
        <title>PDX Driving School | Best Driving Lessons in Portland, OR</title>
        <meta
          name="description"
          content="PDX Driving School offers expert driving lessons, behind-the-wheel training, in-class theory, and professional driving test preparation in Portland, Oregon. Learn to drive safely and confidently with certified instructors."
        />
        <meta
          name="keywords"
          content="driving school Portland, driving lessons Portland, behind the wheel training, driving test preparation, driving course Oregon, learn to drive Portland"
        />
        <meta name="author" content="PDX Driving School" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pdxdrivingschool.com/" />

        {/* Open Graph / SMO */}
        <meta
          property="og:title"
          content="PDX Driving School | Learn to Drive Safely in Portland"
        />
        <meta
          property="og:description"
          content="Join PDX Driving School and learn driving with professional instructors, modern vehicles, and flexible courses. Become a confident and responsible driver today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdxdrivingschool.com/" />
        <meta
          property="og:image"
          content="https://pdxdrivingschool.com/assets/pdx.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PDX Driving School | Best Driving Lessons in Portland"
        />
        <meta
          name="twitter:description"
          content="Professional driving lessons, behind-the-wheel training, and driving test preparation at PDX Driving School, Portland."
        />
        <meta
          name="twitter:image"
          content="https://pdxdrivingschool.com/assets/pdx.jpg"
        />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Hero />
      <CourseCategory />
      <MainAbout />
      <FunFact />
      <HomeServices />
      <Cta />
    </Layout>
  );
};

export default Home;
