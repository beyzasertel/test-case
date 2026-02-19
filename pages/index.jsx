import { useTranslation } from "next-i18next";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/common/Footer";
import PopularSearch from "../components/home/PopulerSearch";
import FeaturedJobsCarousel from "../components/home/FeaturedJobsCarousel";
import {
  getFeaturedJobs,
  getJobSolutions,
} from "../services/featuredJobsService";
import { useState, useEffect } from "react";
import JobSolutionsCard from "../components/home/JobSolutionsCards";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation("common");

  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [jobSolutions, setJobSolutions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getFeaturedJobs()
      .then((res) => {
        setFeaturedJobs(res.data);
      })
      .catch((err) =>
        console.log(
          "ERR:",
          err?.message,
          err?.response?.status,
          err?.response?.data,
        ),
      );
  }, []);

  useEffect(() => {
    getJobSolutions()
      .then((res) => {
        setJobSolutions(res.data);
      })
      .catch((err) =>
        console.log(
          "ERR:",
          err?.message,
          err?.response?.status,
          err?.response?.data,
        ),
      );
  }, []);

  return (
    <>
      <HeroSection></HeroSection>
      <PopularSearch></PopularSearch>
      <FeaturedJobsCarousel items={featuredJobs} />
      <JobSolutionsCard
        bgSrc="/images/search-job.png"
        onLeft={() => router.push("/jobs")}
        onRight={() => router.push("/profile/create")}
      ></JobSolutionsCard>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { serverSideTranslations } =
    await import("next-i18next/serverSideTranslations");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
