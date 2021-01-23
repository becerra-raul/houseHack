import { useMediaQuery } from "@material-ui/core";
import { maxMobileWidth } from "../style/sizes";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const useIsMobileWidth = () => useMediaQuery(`(max-width: ${maxMobileWidth}px)`);
