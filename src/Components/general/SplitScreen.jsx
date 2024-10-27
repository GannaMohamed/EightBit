import React from "react";
import styled from "styled-components";
import "./SplitScreen.css";

export default function SplitScreen({
  children,
  firstWidth = 1,
  secondWidth = 1,
}) {
  const [first, second] = children;
  const Container = styled.div`
    display: flex;
  `;
  const Panel = styled.div`
    flex: ${(p) => p.flex};
  `;
  return (
    <Container className="SplitScreen">
      {/* problem flex=  [object object] */}
      <Panel flex={firstWidth}>{first}</Panel>
      <Panel flex={secondWidth}>{second}</Panel>
    </Container>
  );
}
