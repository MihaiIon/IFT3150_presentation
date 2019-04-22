import React from "react";

// Spectacle
import { Slide } from "spectacle";

// Components
import { H1, H2, H3, UList, ListItem, Accent, Bold } from "./tools";

export default [
  <Slide key="end-1">
    <H1>Conclusion</H1>
    <H3>( presque fini )</H3>
  </Slide>,
  <Slide key="end-2">
    <H2>Difficultés</H2>
    <UList>
      <ListItem>Restructuration du code</ListItem>
      <ListItem>
        Mise à jour de <Accent>React</Accent> (v16 + hooks)
      </ListItem>
    </UList>
  </Slide>,
  <Slide key="end-3">
    <H2>Apprentissage</H2>
    <UList>
      <ListItem>
        <Accent>React</Accent> | Hooks
      </ListItem>
      <ListItem>
        <Accent>JS</Accent> | Parseur et évaluateur
      </ListItem>
      <ListItem>
        <Accent>JS</Accent> | <Bold>CodeMirror</Bold> (1 et 2)
      </ListItem>
      <ListItem>
        <Bold>
          code<Accent>Boot</Accent>
        </Bold>
      </ListItem>
    </UList>
  </Slide>,
  <Slide key="end-4">
    <H2>Questions?</H2>
  </Slide>
];
