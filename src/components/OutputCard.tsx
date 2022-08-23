import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const FakeGraph = styled("div")({
  backgroundColor: "#9cc8f5",
  height: 220,
});

function OutputCard() {
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <FakeGraph />
      <Box m={1}>
        <IconButton onClick={handleExpandClick}>
          <ExpandMore />
        </IconButton>
      </Box>
      <Collapse in={expanded}>
        <CardContent>
          <Typography>The calculation results will appear here...</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OutputCard;
