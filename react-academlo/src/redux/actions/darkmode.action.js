import { darkmodeTypes } from "../types/darkmode.types";

export const handleDarkModeAction = color => {
  return {
    type: darkmodeTypes.HEADER_COLOR,
    payload: color
  };
};
