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
      {gears.map((gear, i) => (
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
          limitMin={i === gears.length - 1 ? 0.48 : gears[i + 1]}
          limitMax={i === 0 ? 6 : gears[i - 1]}
          digit={2}
        />
      ))}
    </>
  );
}

export default GearingEditor;
