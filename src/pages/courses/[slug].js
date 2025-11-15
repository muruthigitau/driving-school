import CourseDetail from "@/components/courses/Detail";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import courses from "@/data/courses.json"; // Import your courses data
import Head from "next/head";
import { useRouter } from "next/router";

const CourseDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the current course
  const course = courses?.find((c) => c.slug === slug);

  if (!course) return null; // Wait until course is loaded

  const pageUrl = `https://pdxdrivingschool.com/courses/${course.slug}`;

  return (
    <>
      <Head>
        {/* SEO Meta */}
        <title>{course.title} | PDX Driving School</title>
        <meta name="description" content={course.description} />
        <meta
          name="keywords"
          content="driving courses, driving lessons, behind the wheel training, driver education, Portland driving school"
        />
        <meta name="author" content="PDX Driving School" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / SMO */}
        <meta
          property="og:title"
          content={`${course.title} | PDX Driving School`}
        />
        <meta property="og:description" content={course.description} />
        <meta
          property="og:image"
          content={`https://pdxdrivingschool.com${course.image}`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${course.title} | PDX Driving School`}
        />
        <meta name="twitter:description" content={course.description} />
        <meta
          name="twitter:image"
          content={`https://pdxdrivingschool.com${course.image}`}
        />
      </Head>

      <Layout>
        <PageHeader title="Our Courses" />
        <CourseDetail course={course} />
      </Layout>
    </>
  );
};

export default CourseDetailPage;
