import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import TitleBar from "@/components/TitleBar";
import InputCard from "@/components/InputCard";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Gearing Calculator"
        description="A simple gearing calculator for Forza Horizon"
      />
      <TitleBar text="Gearing Calculator" />
      <InputCard />
      <InputCard />
      <InputCard />
    </>
  );
};

export default Home;
