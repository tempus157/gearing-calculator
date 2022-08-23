import { AppBar, styled, Toolbar, Typography } from "@mui/material";

interface TitleBarProps {
  text: string;
}

function TitleBar({ text }: TitleBarProps) {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{text}</Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default TitleBar;
