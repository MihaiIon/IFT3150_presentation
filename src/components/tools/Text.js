// ======================================================
// Components / Tools / Text
// ======================================================

import React from "react";

// Spectacle
import styled from "react-emotion";
import { Text, Link as link } from "spectacle";

export default styled(Text)`
  font-size: 2rem;
  font-weight: 300;
`;

export const Link = styled(link)`
  color: #45935f;
  text-decoration: underline;
  font-weight: 900;
`;

export const Accent = function({ children }) {
  return <span style={{ color: "#af138d", fontWeight: 900 }}>{children}</span>;
};

export const Bold = function({ children, italic = false }) {
  return (
    <span style={{ fontWeight: 900, fontStyle: italic ? "italic" : "normal" }}>
      {children}
    </span>
  );
};
