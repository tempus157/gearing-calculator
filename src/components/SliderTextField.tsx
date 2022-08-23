import { clamp, round } from "@/libs/math";
import { Grid, Slider, TextField, Typography } from "@mui/material";

interface SliderInputProps {
  label: string;
  value: number | null;
  setValue: (newValue: number | null) => void;
  min: number;
  max: number;
  step: number;
  marks?: boolean;
}

function SliderTextField({
  label,
  value,
  setValue,
  min,
  max,
  step,
  marks = false,
}: SliderInputProps) {
  function handleSliderChange(event: Event, newValue: number | number[]) {
    setValue(newValue as number);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      setValue(null);
      return;
    }
    const newValue = Number(event.target.value);
    setValue(clamp(round(newValue, 2), min, max));
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
          />
        </Grid>
        <Grid item width={100}>
          <TextField
            value={value}
            onChange={handleInputChange}
            type="number"
            size="small"
            error={value === null}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SliderTextField;
