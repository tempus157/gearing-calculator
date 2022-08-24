import {
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { calculateGearing } from "@/libs/gearingCalculator";
import GearingEditor from "@/components/GearingEditor";

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
  const [gears, setGears] = useState(calculateGearing());

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <FakeGraph />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item m={1}>
          <ExpandMoreButton expand={expanded} onClick={handleExpandClick}>
            <ExpandMore />
          </ExpandMoreButton>
        </Grid>
        <Grid item m={1}>
          <Button>Calculate</Button>
        </Grid>
      </Grid>
      <Collapse in={expanded}>
        <CardContent>
          <GearingEditor gears={gears} setGears={setGears} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OutputCard;
