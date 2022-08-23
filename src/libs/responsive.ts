import { useMediaQuery } from "@mui/material";

interface Pages {
  mobile: JSX.Element | null;
  tablet: JSX.Element | null;
  desktop: JSX.Element | null;
}

export function useResponsive(pages: Pages) {
  const matchMobile = useMediaQuery("(max-width: 599px)");
  const matchTabletMin = useMediaQuery("(min-width: 600px)");
  const matchTabletMax = useMediaQuery("(max-width: 899px)");
  const matchDesktop = useMediaQuery("(min-width: 900px)");

  if (matchMobile) {
    return pages.mobile;
  } else if (matchTabletMin && matchTabletMax) {
    return pages.tablet;
  } else if (matchDesktop) {
    return pages.desktop;
  } else {
    return null;
  }
}
