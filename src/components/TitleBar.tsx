import { AppBar, styled, Toolbar } from "@mui/material";

interface TitleBarProps {
  text: string;
}

function TitleBar({ text }: TitleBarProps) {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar>
        <Toolbar>{text}</Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default TitleBar;
