import React from "react";
import createTheme from "spectacle/lib/themes/default";

// Components
import { Deck } from "spectacle";
import Introduction from "./Introduction";

// Theme
// ======================================================

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Roboto",
    secondary: "Arial"
  }
);

// Presentation
// ======================================================

function Presentation() {
  return (
    <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
      <Introduction />
    </Deck>
  );
}

export default Presentation;
