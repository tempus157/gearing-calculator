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
    drawGraph(two, ref.current!.clientWidth, height);
  }, []);

  function drawGraph(two: Two, width: number, height: number) {
    const lastGear = gears[gears.length - 1];
    gears.reverse().forEach((gear, i) => {
      const ratio = lastGear / gear;
      const line = two.makeLine(0, height, width * ratio, 0);
      line.stroke = theme.palette.primary.main;
      line.linewidth = 2;
    });
  }

  return <Box ref={ref} height={height} overflow="hidden"></Box>;
}

export default GearingGraph;
