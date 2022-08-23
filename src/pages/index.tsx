import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Stack } from "@mui/material";
import TitleBar from "@/components/TitleBar";
import InputCard from "@/components/InputCard";
import OutputCard from "@/components/OutputCard";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Gearing Calculator"
        description="A simple gearing calculator for Forza Horizon"
      />
      <TitleBar text="Gearing Calculator" />
      <Stack spacing={2} m={2}>
        <OutputCard />
        <InputCard />
      </Stack>
    </>
  );
};

export default Home;
