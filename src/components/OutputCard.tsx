import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
} from "@mui/material";
import { useState } from "react";
import GearingEditor from "./GearingEditor";

const FakeGraph = styled("div")({
  backgroundColor: "#9cc8f5",
  height: 220,
});

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMoreButton = styled(({ expand, ...other }: ExpandMoreProps) => (
  <IconButton {...other} />
))(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform"),
}));

function OutputCard() {
  const [expanded, setExpanded] = useState(false);
  const [gears, setGears] = useState([
    3, 2, 1.5, 1.2, 1, 0.9, 0.82, 0.76, 0.72, 0.68,
  ]);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <FakeGraph />
      <Box m={1} display="grid" justifyContent="center">
        <ExpandMoreButton expand={expanded} onClick={handleExpandClick}>
          <ExpandMore />
        </ExpandMoreButton>
      </Box>
      <Collapse in={expanded}>
        <CardContent>
          <GearingEditor gears={gears} setGears={setGears} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OutputCard;
