import { useSliderInput } from "@/libs/hooks";
import { Card, CardContent, Input, Slider } from "@mui/material";

function InputCard() {
  const speed = useSliderInput(6, { min: 3, max: 10, step: 1 });
  const first = useSliderInput(3, { min: 1.2, max: 6, step: 0.01 });
  const last = useSliderInput(3, { min: 1.2, max: 6, step: 0.01 });
  const magic = useSliderInput(0.5, { min: 0, max: 1, step: 0.1 });

  return (
    <Card>
      <CardContent>
        <div>N Speed, 1st, Last, The Value</div>
        <div>
          <div>N Speed</div>
          <Slider {...speed.sliderProps} marks />
          <Input {...speed.inputProps} />
        </div>
        <div>
          <div>1st Gearing</div>
          <Slider {...first.sliderProps} />
          <Input {...first.inputProps} />
        </div>
        <div>
          <div>Last Gearing</div>
          <Slider {...last.sliderProps} />
          <Input {...last.inputProps} />
        </div>
        <div>
          <div>Magic Value</div>
          <Slider {...magic.sliderProps} marks />
          <Input {...magic.inputProps} />
        </div>
      </CardContent>
    </Card>
  );
}

export default InputCard;
