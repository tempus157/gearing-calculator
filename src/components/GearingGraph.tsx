import { inverseLerp, lerp } from "@/libs/math";
import { Box, useTheme } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import Two from "two.js";

interface GearingGraphProps {
  gears: number[];
  height: number;
}

function GearingGraph({ gears, height }: GearingGraphProps) {
  const ref = useRef<HTMLElement>(null);
  const two = useRef<Two>();
  const theme = useTheme();

  const drawGraph = useCallback(() => {
    const lastGear = gears[gears.length - 1];
    let lastX2 = 0;

    gears.forEach((gear) => {
      const x2 = two.current!.width * (lastGear / gear);
      const t = inverseLerp(0, x2, lastX2);
      const y1 = lerp(two.current!.height, 0, t);

      const line = two.current!.makeLine(lastX2, y1, x2, 0);
      line.stroke = theme.palette.primary.main;
      line.linewidth = 2;
      lastX2 = x2;
    });
  }, [gears]);

  const handleResize = () => {
    two.current!.clear();
    two.current!.width = ref.current!.clientWidth;
    two.current!.height = height;
    drawGraph();
  };

  useEffect(() => {
    two.current = new Two({ autostart: true }).appendTo(ref.current!);
    handleResize();
  }, []);

  useEffect(() => {
    two.current!.clear();
    drawGraph();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gears]);

  return <Box ref={ref} height={height} overflow="hidden"></Box>;
}

export default GearingGraph;
