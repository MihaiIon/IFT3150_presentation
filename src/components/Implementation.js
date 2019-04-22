import React from "react";

// Spectacle
import { Slide } from "spectacle";

// Components
import {
  H1,
  H2,
  H3,
  UList,
  ListItem,
  Accent,
  Bold,
  CodePane,
  Link
} from "./tools";

export default [
  <Slide key="implement-1">
    <H1>Implémentation</H1>
    <H3>( React )</H3>
  </Slide>,
  <Slide key="implement-2">
    <H2>Pourquoi React?</H2>
    <UList>
      <ListItem>
        <Accent>Modularité</Accent>
      </ListItem>
      <ListItem>
        <Accent>Évolutif</Accent> (scalable)
      </ListItem>
      <ListItem>Nouveau standard</ListItem>
      <ListItem>
        <Accent>Simplifie</Accent> le développement
      </ListItem>
    </UList>
  </Slide>,
  <Slide key="implement-3">
    <CodePane
      lang="javascript"
      source={[
        'import React from "react";',
        "\n// Components",
        'import Navigation from "./components/Navigation";',
        "\nexport default function App ({ children }) {",
        '\treturn (\n\t\t<div className="c-app>"',
        "\t\t\t<Navigation />",
        "\t\t\t{children}",
        "\t\t</div>\n\t);\n};"
      ].join("\n")}
    />
  </Slide>,
  <Slide key="implement-4">
    <H2>Liens</H2>
    <UList>
      <ListItem>
        <Link
          href="https://www.webdepot.umontreal.ca/Usagers/p1012378/MonDepotPublic/General/IFT3150/builds/2019-03-24/"
          target="_blank"
        >
          Build 1
        </Link>
        {" | "}
        <Bold italic>2019-03-24</Bold>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.webdepot.umontreal.ca/Usagers/p1012378/MonDepotPublic/General/IFT3150/builds/2019-04-09/"
          target="_blank"
        >
          Build 2
        </Link>
        {" | "}
        <Bold italic>2019-04-09</Bold>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.webdepot.umontreal.ca/Usagers/p1012378/MonDepotPublic/General/IFT3150/builds/2019-04-10/"
          target="_blank"
        >
          Build 3
        </Link>
        {" | "}
        <Bold italic>2019-04-10</Bold>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.webdepot.umontreal.ca/Usagers/p1012378/MonDepotPublic/General/IFT3150/"
          target="_blank"
        >
          Site web
        </Link>
        {" | "}
        <Bold>Rapport</Bold>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/MihaiIon/codeboot" target="_blank">
          Github
        </Link>
        {" | "}
        <Bold>Projet</Bold>
      </ListItem>
      <ListItem>
        <Link
          href="https://github.com/MihaiIon/IFT3150_presentation"
          target="_blank"
        >
          Github
        </Link>
        {" | "}
        <Bold>Présentation</Bold>
      </ListItem>
      <ListItem>
        <Link
          href="https://github.com/MihaiIon/website-generator"
          target="_blank"
        >
          Github
        </Link>
        {" | "}
        <Bold>Générateur</Bold>
      </ListItem>
    </UList>
  </Slide>
];
