import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const fakeResult = [3, 2, 1.5, 1.2, 1, 0.9, 0.82, 0.76, 0.72, 0.68] as const;
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
  marginLeft: "auto",
  transition: theme.transitions.create("transform"),
}));

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

function OutputCard() {
  const [expanded, setExpanded] = useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <FakeGraph />
      <Box m={1}>
        <ExpandMoreButton expand={expanded} onClick={handleExpandClick}>
          <ExpandMore />
        </ExpandMoreButton>
      </Box>
      <Collapse in={expanded}>
        <CardContent>
          <Grid container columns={9}>
            {fakeResult.map((res, i) => (
              <>
                <Grid item xs={1}>
                  {i + 1}
                  {ordinalSuffix[i]}
                </Grid>
                <Grid item xs={2}>
                  <Typography>{res.toFixed(2)}</Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OutputCard;
