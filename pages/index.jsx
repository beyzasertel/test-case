import { useTranslation } from "next-i18next";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/common/Footer";
import PopularSearch from "../components/home/PopulerSearch";
import FeaturedJobsCarousel from "../components/home/FeaturedJobsCarousel";
import { getFeaturedJobs } from "../services/featuredJobsService";
import { useState, useEffect } from "react";

export default function Home() {
  const { t } = useTranslation("common");

  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    getFeaturedJobs()
      .then((res) => {
        console.log("URL?", res.config?.baseURL, res.config?.url);
        console.log("DATA:", res.data);
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
  return (
    <>
      <HeroSection></HeroSection>
      <PopularSearch></PopularSearch>
      <FeaturedJobsCarousel items={featuredJobs} />
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
