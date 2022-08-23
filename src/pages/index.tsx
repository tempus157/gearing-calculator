import type { NextPage } from "next";
import { useResponsive } from "../libs/responsive";

const Home: NextPage = () => {
  const mobile = <>Mobile</>;
  const tablet = <>Tablet</>;
  const desktop = <>Desktop</>;

  return useResponsive({ mobile, tablet, desktop });
};

export default Home;
