/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { css } from "@emotion/react";

const gray50 = "";
const gray100 = "";

const sectionCss = css`
  background: ${gray50};
  border: 1px solid ${gray100};
  padding: 10px;
`;

const sectionTitleCss = css`
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;

const sectionContentCss = css`
  max-height: 200px;
  overflow: auto;
  padding: 10px;
`;

export const Section = ({
  children,
  title
}: {
  children: ReactNode;
  title: string;
}) => {
  console.info("Section render");

  return (
    <section css={sectionCss}>
      <h3 css={sectionTitleCss}>{title}</h3>
      <div css={sectionContentCss}>{children}</div>
    </section>
  );
};
