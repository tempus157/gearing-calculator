import { Card, CardContent } from "@mui/material";
import { GEAR_DIGIT, GEAR_MAX, GEAR_MIN } from "@/libs/constant";
import SliderTextField from "@/components/SliderTextField";
import { Dispatch, SetStateAction } from "react";

interface InputCardProps {
	speed: number;
	setSpeed: Dispatch<SetStateAction<number>>;
	heavy: number;
	setHeavy: Dispatch<SetStateAction<number>>;
	shape: number;
	setShape: Dispatch<SetStateAction<number>>;
	first: number;
	setFirst: Dispatch<SetStateAction<number>>;
}

const InputCard = ({
	speed,
	setSpeed,
	heavy,
	setHeavy,
	shape,
	setShape,
	first,
	setFirst,
}: InputCardProps) => {
	return (
		<Card>
			<CardContent>
				<SliderTextField
					label="N Speed"
					value={speed}
					setValue={setSpeed}
					min={3}
					max={10}
					digit={0}
					marks
				/>
				<SliderTextField
					label="Gearing Heavy"
					value={heavy}
					setValue={setHeavy}
					min={0}
					max={10}
					digit={2}
				/>
				<SliderTextField
					label="Gearing Shape"
					value={shape}
					setValue={setShape}
					min={-10}
					max={10}
					digit={0}
					marks
				/>
				<SliderTextField
					label="1ST Gear"
					value={first}
					setValue={setFirst}
					min={GEAR_MIN}
					max={GEAR_MAX}
					digit={GEAR_DIGIT}
				/>
			</CardContent>
		</Card>
	);
};

export default InputCard;
