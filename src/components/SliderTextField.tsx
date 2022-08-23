import { Grid, Input, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface SliderInputProps {
  label: string;
  value: number | null;
  setValue: (newValue: number | null) => void;
  min: number;
  max: number;
  step: number;
  marks?: boolean;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function SliderTextField({
  label,
  value,
  setValue,
  min,
  max,
  step,
  marks,
}: SliderInputProps) {
  function onSliderChange(event: Event, newValue: number | number[]) {
    setValue(newValue as number);
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      setValue(null);
      return;
    }
    const newValue = Number(event.target.value);
    setValue(clamp(round(newValue), min, max));
  }

  return (
    <>
      <Typography>{label}</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value ?? min}
            onChange={onSliderChange}
            min={min}
            max={max}
            step={step}
            marks={marks}
          />
        </Grid>
        <Grid item width={100}>
          <TextField
            value={value}
            onChange={onInputChange}
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
