// ======================================================
// Components / Tools / List
// ======================================================

import React from "react";

// Spectacle
import styled from "react-emotion";
import { Appear, List as list, ListItem as listitem } from "spectacle";

export const UList = styled(list)`
  width: 42rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  font-weight: 300;
  color: #333;
`;

const Item = styled(listitem)`
  font-size: 2rem;
  margin-bottom: 0.6rem;
`;

export const ListItem = function({ children }) {
  return (
    <Appear>
      <Item>{children}</Item>
    </Appear>
  );
};
