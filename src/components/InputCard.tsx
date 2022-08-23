import { Card, CardContent } from "@mui/material";
import SliderTextField from "@/components/SliderTextField";

function InputCard() {
  return (
    <Card>
      <CardContent>
        <SliderTextField
          label="N Speed"
          initialValue={6}
          min={3}
          max={10}
          step={1}
          marks
        />
        <SliderTextField
          label="First Gearing"
          initialValue={3}
          min={0.48}
          max={6}
          step={0.01}
        />
        <SliderTextField
          label="Last Gearing"
          initialValue={3}
          min={0.48}
          max={6}
          step={0.01}
        />
        <SliderTextField
          label="Gearing Shape"
          initialValue={0.5}
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
