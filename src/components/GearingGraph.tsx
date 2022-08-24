import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Two from "two.js";

interface GearingGraphProps {
  gears: number[];
}

function handleResize() {
  console.log("resize");
}

function drawGraph(two: Two) {
  const line = two.makeLine(0, 0, 100, 100);
  line.stroke = "#ffffff";
  line.linewidth = 5;
}

function GearingGraph({ gears }: GearingGraphProps) {
  const two = useRef<Two>();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    two.current = new Two({ autostart: true }).appendTo(ref.current!);
    two.current.bind("resize", handleResize);
    drawGraph(two.current);
    return () => two.current?.unbind("resize");
  }, []);

  return <Box ref={ref} height={220} overflow="hidden"></Box>;
}

export default GearingGraph;
