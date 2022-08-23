import React, { useState } from "react";

interface Options {
  min: number;
  max: number;
  step: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function useSliderInput(initialValue: number, options: Options) {
  const [value, setValue] = useState<number | null>(initialValue);

  function onSliderChange(event: Event, newValue: number | number[]) {
    setValue(newValue as number);
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(
      event.target.value === ""
        ? null
        : clamp(Number(event.target.value), options.min, options.max)
    );
  }

  return {
    value,
    setValue,
    sliderProps: {
      value: value ?? options.min,
      onChange: onSliderChange,
      ...options,
      "area-labelledby": "input-slider",
    },
    inputProps: {
      value,
      onChange: onInputChange,
      inputProps: {
        ...options,
        type: "number",
        "aria-labelledby": "input-slider",
      },
    },
  };
}
