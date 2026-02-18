import { useTranslation } from "next-i18next";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/common/Footer";
import PopularSearch from "../components/home/PopulerSearch";
import FeaturedJobsCarousel from "../components/home/FeaturedJobsCarousel";

export default function Home() {
  const { t } = useTranslation("common");
  const items = [
    { id: "1", title: "IT Müdürü", company: "Bosch", logoText: "B/S/H/" },
    {
      id: "2",
      title: "Front-end Developer",
      company: "Aktif Bank",
      logoText: "aktifbank",
    },
    {
      id: "3",
      title: "Back-end Developer",
      company: "Akbank",
      logoText: "AKBANK",
    },
    {
      id: "4",
      title: ".NET Developer",
      company: "Arçelik",
      logoText: "arçelik",
    },
    {
      id: "5",
      title: "Junior .NET Developer",
      company: "Allianz",
      logoText: "Allianz",
    },
    {
      id: "6",
      title: "Sales Manager",
      company: "Bezmialem Vakıf Üniv.",
      logoText: "BVU",
    },
  ];
  return (
    <>
      <HeroSection></HeroSection>
      <PopularSearch></PopularSearch>
      <FeaturedJobsCarousel items={items} />
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
