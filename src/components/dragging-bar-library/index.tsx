/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

const B100 = "#C3E0FE";
const B300 = "#4BA3FB";

const handleCss = css`
  height: 20px;
  width: 10px;
  cursor: pointer;
  background: ${B100};
  border-radius: 2px;
  position: absolute;
  right: 0;
`;

const barCss = css`
  position: relative;
  height: 20px;
  background: ${B300};
  border-radius: 2px;
`;

const containerCss = css`
  width: 300px;
`;

export const DraggingBar = ({
  onChange
}: {
  onChange: (val: number) => void;
}) => {
  const [width, setWidth] = useState(40);
  const [startMoving, setStartMoving] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const changeWidth = (e: MouseEvent) => {
      if (!startMoving) return;
      if (!ref.current) return;

      const left = ref.current.getBoundingClientRect().left;
      const wi = e.clientX - left;

      if (wi > 300) {
        setWidth(300);
        onChange(300);
      } else {
        setWidth(wi);
        onChange(wi);
      }
    };

    ref.current.addEventListener("mousemove", changeWidth);

    return () => ref.current?.removeEventListener("mousemove", changeWidth);
  }, [startMoving, ref]);

  const onStartMoving = () => {
    setStartMoving(true);
  };

  const onEndMoving = () => {
    setStartMoving(false);
  };
  return (
    <div css={containerCss} ref={ref} onMouseLeave={onEndMoving}>
      <div css={barCss} style={{ width: `${width}px` }}>
        <div
          css={handleCss}
          onMouseDown={onStartMoving}
          onMouseUp={onEndMoving}
        />
      </div>
    </div>
  );
};
