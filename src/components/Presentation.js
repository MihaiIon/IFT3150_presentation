import React from "react";
import createTheme from "spectacle/lib/themes/default";

// Components
import { Deck } from "spectacle";
import Introduction from "./Introduction";
import Design from "./Design";
import Implementation from "./Implementation";
import Conclusion from "./Conclusion";

// Theme
// ======================================================

const theme = createTheme(
  {
    primary: "white",
    secondary: "#139daf",
    tertiary: "139daf",
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
      {Introduction}
      {Design}
      {Implementation}
      {Conclusion}
    </Deck>
  );
}

export default Presentation;
