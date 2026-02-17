import { useTranslation } from "next-i18next";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/common/Footer";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSection></HeroSection>
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
