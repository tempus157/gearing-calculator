import { clamp, round } from "@/libs/math";
import { Grid, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface SliderInputProps {
  label: string;
  value: number;
  setValue: (newValue: number) => void;
  min: number;
  max: number;
  digit: number;
  marks?: boolean;
  disabled?: boolean;
}

function SliderTextField({
  label,
  value,
  setValue,
  min,
  max,
  digit,
  marks = false,
  disabled = false,
}: SliderInputProps) {
  const [text, setText] = useState(value.toFixed(digit));
  const step = 1 / 10 ** digit;

  function handleSliderChange(event: Event, newValue: number | number[]) {
    if (typeof newValue !== "number") {
      return;
    }
    setValue(newValue);
    setText(newValue.toFixed(digit));
  }

  function handleTextFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value === "" ? min : Number(event.target.value));
    setText(event.target.value);
  }

  function handleTextFieldBlur() {
    const newValue = clamp(round(value, digit), min, max);
    setValue(newValue);
    setText(newValue.toFixed(digit));
  }

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
            disabled={disabled}
          />
        </Grid>
        <Grid item width={100}>
          <TextField
            value={text}
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            type="number"
            size="small"
            disabled={disabled}
            inputProps={{ step }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SliderTextField;
