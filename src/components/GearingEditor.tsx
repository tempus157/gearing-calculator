import SliderTextField from "./SliderTextField";

interface GearingEditorProps {
  gears: number[];
  setGears: (newValue: number[]) => void;
}

const ordinalSuffix = [
  "ST",
  "ND",
  "RD",
  "TH",
  "TH",
  "TH",
  "TH",
  "TH",
  "TH",
  "TH",
] as const;

function GearingEditor({ gears, setGears }: GearingEditorProps) {
  return (
    <>
      {gears.map((gear, i) => {
        return (
          <SliderTextField
            key={i}
            label={`${i + 1}${ordinalSuffix[i]}`}
            value={gear}
            setValue={(newValue) => {
              gears[i] = newValue;
              setGears([...gears]);
            }}
            min={0.48}
            max={6}
            step={0.01}
            digit={2}
          />
        );
      })}
    </>
  );
}

export default GearingEditor;
