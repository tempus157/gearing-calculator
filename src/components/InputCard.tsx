import { Card, CardContent } from "@mui/material";
import SliderTextField from "@/components/SliderTextField";
import { useState } from "react";

function InputCard() {
  const [speed, setSpeed] = useState(6);
  const [first, setFirst] = useState(3);
  const [last, setLast] = useState(1);
  const [shape, setShape] = useState(0);

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
          label="First Gearing"
          value={first}
          setValue={setFirst}
          min={0.48}
          max={6}
          digit={2}
        />
        <SliderTextField
          label="Last Gearing"
          value={last}
          setValue={setLast}
          min={0.48}
          max={6}
          digit={2}
        />
        <SliderTextField
          label="Gearing Shape"
          value={shape}
          setValue={setShape}
          min={-5}
          max={5}
          digit={0}
          marks
        />
      </CardContent>
    </Card>
  );
}

export default InputCard;
