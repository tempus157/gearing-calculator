import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Two from "two.js";

interface GearingGraphProps {
  gears: number[];
  height: number;
}

function handleResize() {
  console.log("resize");
}

function drawGraph(two: Two) {
  const line = two.makeLine(0, 220, 100, 0);
  line.stroke = "#ffffff";
  line.linewidth = 5;
}

function GearingGraph({ gears, height }: GearingGraphProps) {
  const two = useRef<Two>();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    two.current = new Two({ autostart: true }).appendTo(ref.current!);
    two.current.bind("resize", handleResize);
    drawGraph(two.current);
    return () => two.current?.unbind("resize");
  }, []);

  return <Box ref={ref} height={height} overflow="hidden"></Box>;
}

export default GearingGraph;
