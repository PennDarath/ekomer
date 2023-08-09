import { type } from "os";
import React from "react";

type SpacerProps = {
  x?: number;
  y?: number;
};
export default function Spacer({ x, y }: SpacerProps) {
  return (
    <>
      <div
        style={{
          width: x,
          height: y,
        }}
      />
    </>
  );
}
