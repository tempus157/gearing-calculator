import { clamp, round } from "@/libs/math";
import { Grid, Slider, TextField, Typography } from "@mui/material";

interface SliderInputProps {
  label: string;
  value: number | null;
  setValue: (newValue: number | null) => void;
  min: number;
  max: number;
  step: number;
  digit?: number;
  marks?: boolean;
}

function SliderTextField({
  label,
  value,
  setValue,
  min,
  max,
  step,
  digit = 0,
  marks = false,
}: SliderInputProps) {
  function handleSliderChange(event: Event, newValue: number | number[]) {
    setValue(newValue as number);
  }

  function handleTextFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value === "" ? null : Number(event.target.value));
  }

  function handleTextFieldBlur() {
    if (value === null) {
      return;
    }
    setValue(clamp(round(value, digit), min, max));
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
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            type="number"
            size="small"
            error={value === null}
            inputProps={{ step }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SliderTextField;
