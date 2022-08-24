import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { calculateGearing } from "@/libs/gearingCalculator";
import GearingEditor from "@/components/GearingEditor";
import GearingGraph from "./GearingGraph";

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
      <CardContent>
        <GearingGraph gears={gears} height={220} />
      </CardContent>
      <Divider />
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
          <Box mt={-1}>
            <GearingEditor gears={gears} setGears={setGears} />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OutputCard;
