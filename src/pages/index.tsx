import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Box, Stack } from "@mui/material";
import TitleBar from "@/components/TitleBar";
import InputCard from "@/components/InputCard";
import OutputCard from "@/components/OutputCard";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="Gearing Calculator - Tempus.js"
				description="A simple gearing calculator for Forza Horizon"
			/>
			<TitleBar text="Gearing Calculator for Forza Horzion" />
			<Stack m="auto" maxWidth={900}>
				<Box m={2}>
					<OutputCard />
				</Box>
				<Box ml={2} mr={2} mb={2}>
					<InputCard />
				</Box>
			</Stack>
		</>
	);
};

export default Home;
