import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Box, Stack } from "@mui/material";
import TitleBar from "@/components/TitleBar";
import InputCard from "@/components/InputCard";
import OutputCard from "@/components/OutputCard";
import { useState } from "react";
import { calculateGearing } from "@/libs/gearingCalculator";

const Home: NextPage = () => {
	const [speed, setSpeed] = useState(6);
	const [heavy, setHeavy] = useState(2);
	const [shape, setShape] = useState(0);
	const [first, setFirst] = useState(3);
	const [gears, setGears] = useState(
		calculateGearing(speed, heavy, shape, first)
	);

	return (
		<>
			<NextSeo
				title="Gearing Calculator - Tempus.js"
				description="A simple gearing calculator for Forza Horizon"
			/>
			<TitleBar text="Gearing Calculator for Forza Horzion" />
			<Stack m="auto" maxWidth={900}>
				<Box m={2}>
					<OutputCard
						gears={gears}
						setGears={setGears}
						speed={speed}
						heavy={heavy}
						shape={shape}
						first={first}
					/>
				</Box>
				<Box ml={2} mr={2} mb={2}>
					<InputCard
						speed={speed}
						setSpeed={setSpeed}
						heavy={heavy}
						setHeavy={setHeavy}
						shape={shape}
						setShape={setShape}
						first={first}
						setFirst={setFirst}
					/>
				</Box>
			</Stack>
		</>
	);
};

export default Home;
