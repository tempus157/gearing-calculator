import { Card, CardContent } from "@mui/material";
import SliderTextField from "@/components/SliderTextField";
import { useState } from "react";

function InputCard() {
  const [speed, setSpeed] = useState<number | null>(6);
  const [first, setFirst] = useState<number | null>(3);
  const [last, setLast] = useState<number | null>(3);
  const [shape, setShape] = useState<number | null>(0.5);

  return (
    <Card>
      <CardContent>
        <SliderTextField
          label="N Speed"
          value={speed}
          setValue={setSpeed}
          min={3}
          max={10}
          step={1}
          marks
        />
        <SliderTextField
          label="First Gearing"
          value={first}
          setValue={setFirst}
          min={0.48}
          max={6}
          step={0.01}
        />
        <SliderTextField
          label="Last Gearing"
          value={last}
          setValue={setLast}
          min={0.48}
          max={6}
          step={0.01}
        />
        <SliderTextField
          label="Gearing Shape"
          value={shape}
          setValue={setShape}
          min={0}
          max={1}
          step={0.1}
          marks
        />
      </CardContent>
    </Card>
  );
}

export default InputCard;
