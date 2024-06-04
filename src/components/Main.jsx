/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledMain = styled.main`
  padding: var(--spacing-lg) var(--spacing-xl);
`;

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
