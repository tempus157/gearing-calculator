import { clamp, round } from "@/libs/math";
import { Grid, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface SliderInputProps {
	label: string;
	value: number;
	setValue: (newValue: number) => void;
	min: number;
	max: number;
	limitMin?: number;
	limitMax?: number;
	digit: number;
	marks?: boolean;
}

const SliderTextField = ({
	label,
	value,
	setValue,
	min,
	max,
	limitMin = min,
	limitMax = max,
	digit,
	marks = false,
}: SliderInputProps) => {
	const [text, setText] = useState(value.toFixed(digit));
	const step = 1 / 10 ** digit;

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		if (typeof newValue !== "number") {
			return;
		}

		newValue = clamp(newValue, limitMin, limitMax);
		setValue(newValue);
		setText(newValue.toFixed(digit));
	};

	const handleTextFieldChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setValue(
			event.target.value === "" ? limitMin : Number(event.target.value)
		);
		setText(event.target.value);
	};

	const handleTextFieldBlur = () => {
		const newValue = clamp(round(value, digit), limitMin, limitMax);
		setValue(newValue);
		setText(newValue.toFixed(digit));
	};

	return (
		<>
			<Typography>{label}</Typography>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs>
					<Slider
						value={value ?? min}
						onChange={handleSliderChange}
						min={min}
						max={max}
						step={step}
						marks={marks}
					/>
				</Grid>
				<Grid item width={100}>
					<TextField
						value={text}
						onChange={handleTextFieldChange}
						onBlur={handleTextFieldBlur}
						type="number"
						size="small"
						inputProps={{ step }}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default SliderTextField;
