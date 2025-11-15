import MainAbout from "@/components/about/mainabout";
import Benefits from "@/components/benefits";
import HomeCourses from "@/components/courses/HomeCourses";
import FunFact from "@/components/funfact";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import Skill from "@/components/skill";
import WorkProcess from "@/components/work-process";
import Head from "next/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        {/* Primary SEO */}
        <title>
          About Us | PDX Driving School – Professional Driving Training in
          Portland
        </title>
        <meta
          name="description"
          content="Learn more about PDX Driving School. We provide expert driving lessons, experienced instructors, modern vehicles, and high success rates for driving test preparation in Portland, Oregon."
        />
        <meta
          name="keywords"
          content="about PDX Driving School, driving instructors Portland, driving school Oregon, driving lessons Portland, learn driving Portland"
        />
        <meta name="author" content="PDX Driving School" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pdxdrivingschool.com/about" />

        {/* Open Graph (SMO) */}
        <meta
          property="og:title"
          content="About PDX Driving School | Trusted Driving Lessons in Portland"
        />
        <meta
          property="og:description"
          content="PDX Driving School provides expert driving education with certified instructors, modern vehicles, and industry-leading success rates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdxdrivingschool.com/about" />
        <meta
          property="og:image"
          content="https://pdxdrivingschool.com/assets/about.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | PDX Driving School – Professional Driving Instructors in Portland"
        />
        <meta
          name="twitter:description"
          content="Get to know PDX Driving School—your trusted driving education partner. Learn about our skilled instructors and comprehensive training programs."
        />
        <meta
          name="twitter:image"
          content="https://pdxdrivingschool.com/assets/about.jpg"
        />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <PageHeader title="About us" />
      <MainAbout />
      <Skill />
      <HomeCourses />
      <FunFact />
      <WorkProcess />
      <Benefits />
    </Layout>
  );
};

export default AboutPage;
