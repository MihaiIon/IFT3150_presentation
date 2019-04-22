import React from "react";

// Helpers
import getAsset from "../helpers/getAsset";

// Spectacle
import { Slide } from "spectacle";

// Components
import { H1, H2, H3, UList, ListItem, Accent, Bold, Image } from "./tools";

export default [
  <Slide key="intro-1">
    <H1>
      <span style={{ fontWeight: 300 }}>code</span>
      <b>Boot</b>
    </H1>
    <H3>( version 3 )</H3>
  </Slide>,
  <Slide key="intro-2">
    <H2>Motivations</H2>
    <UList>
      <ListItem>
        Ajouter les nouvelles <Accent>features</Accent> de
        <Bold> JavaScript</Bold>
      </ListItem>
      <ListItem>Mettre à jour la structure de l'application</ListItem>
      <ListItem>
        <Accent>Bonifier</Accent> l'interface utilisateur
      </ListItem>
      <ListItem>
        Augmenter la <Accent>maintenabilité</Accent> de l'application
      </ListItem>
    </UList>
  </Slide>,
  <Slide key="intro-3">
    <H2>Outils et méthodologies utilisés</H2>
    <UList>
      <ListItem>
        Éditeur de code: <Accent>VS Code</Accent>
      </ListItem>
      <ListItem>
        Framework: <Accent>React</Accent>
      </ListItem>
      <ListItem>
        Styles: <Accent>BEM</Accent> + <Accent>ITCSS</Accent> +
        <Accent> SASS</Accent>
      </ListItem>
      <ListItem>
        Système de contrôle de version: <Accent>Github</Accent>
      </ListItem>
      <ListItem>
        <Accent>Trello</Accent>
      </ListItem>
    </UList>
  </Slide>,
  <Slide key="intro-4">
    <Image src={getAsset("trello.jpg")} alt="Trello" />
  </Slide>
];
