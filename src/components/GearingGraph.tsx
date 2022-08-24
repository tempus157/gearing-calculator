import { inverseLerp, lerp } from "@/libs/math";
import { Box, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import Two from "two.js";

interface GearingGraphProps {
  gears: number[];
  height: number;
}

function GearingGraph({ gears, height }: GearingGraphProps) {
  const ref = useRef<HTMLElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const two = new Two({ autostart: true }).appendTo(ref.current!);
    two.width = ref.current!.clientWidth;
    two.height = height;
    drawGraph(two);
  }, []);

  function drawGraph(two: Two) {
    const lastGear = gears[gears.length - 1];
    let lastX2 = 0;

    gears.forEach((gear) => {
      const x2 = two.width * (lastGear / gear);
      const t = inverseLerp(0, x2, lastX2);
      const y1 = lerp(two.height, 0, t);

      const line = two.makeLine(lastX2, y1, x2, 0);
      line.stroke = theme.palette.primary.main;
      line.linewidth = 2;
      lastX2 = x2;
    });
  }

  return <Box ref={ref} height={height} overflow="hidden"></Box>;
}

export default GearingGraph;
