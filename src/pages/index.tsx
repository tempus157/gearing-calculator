import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import TitleBar from "@/components/TitleBar";
import InputCard from "@/components/InputCard";
import { Stack } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Gearing Calculator"
        description="A simple gearing calculator for Forza Horizon"
      />
      <TitleBar text="Gearing Calculator" />
      <Stack spacing={2} m={2}>
        <InputCard />
        <InputCard />
      </Stack>
    </>
  );
};

export default Home;
