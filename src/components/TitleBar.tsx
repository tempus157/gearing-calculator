import { AppBar, styled, Toolbar } from "@mui/material";

function TitleBar() {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar>
        <Toolbar>Gearing Calculator</Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default TitleBar;
