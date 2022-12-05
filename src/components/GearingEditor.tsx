import { GEAR_DIGIT, GEAR_MAX, GEAR_MIN } from "@/libs/constant";
import { Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import SliderTextField from "./SliderTextField";

interface GearingEditorProps {
	gears: number[];
	setGears: Dispatch<SetStateAction<number[]>>;
}

const ordinalSuffix = [
	"ST",
	"ND",
	"RD",
	"TH",
	"TH",
	"TH",
	"TH",
	"TH",
	"TH",
	"TH",
] as const;

const GearingEditor = ({ gears, setGears }: GearingEditorProps) => {
	return (
		<>
			{gears.map((gear, i) => (
				<Typography>
					{i + 1}: {gear.toFixed(2)}
				</Typography>
			))}
			{/* {gears.map((gear, i) => (
				<SliderTextField
					key={i}
					label={`${i + 1}${ordinalSuffix[i]}`}
					value={gear}
					setValue={(newValue) => {
						gears[i] = newValue;
						setGears([...gears]);
					}}
					min={GEAR_MIN}
					max={GEAR_MAX}
					limitMin={i === gears.length - 1 ? GEAR_MIN : gears[i + 1]}
					limitMax={i === 0 ? GEAR_MAX : gears[i - 1]}
					digit={GEAR_DIGIT}
				/>
			))} */}
		</>
	);
};

export default GearingEditor;
