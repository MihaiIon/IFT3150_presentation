import React from "react";

// Helpers
import getAsset from "../helpers/getAsset";

// Spectacle
import { Slide } from "spectacle";

// Components
import { H1, H2, H3, UList, ListItem, Accent, Image } from "./tools";

export default [
  <Slide key="design-1">
    <H1>Design</H1>
    <H3>( maquettes visuelles )</H3>
  </Slide>,
  <Slide key="design-2">
    <Image src={getAsset("codeboot2.jpg")} alt="Codeboot version 2" />
  </Slide>,
  <Slide key="design-3">
    <Image src={getAsset("codeboot3.png")} alt="Codeboot version 3" />
  </Slide>,
  <Slide key="design-4">
    <H2>Changements</H2>
    <UList>
      <ListItem>
        <Accent>Optimisation</Accent> de l'espace de travail
      </ListItem>
      <ListItem>Zones redimensionnable</ListItem>
      <ListItem>
        Layout <Accent>flexible</Accent>
      </ListItem>
      <ListItem>
        <Accent>Refonte</Accent> du système de fichiers
      </ListItem>
    </UList>
  </Slide>
];
