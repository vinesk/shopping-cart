import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-primary);
  color: var(--white);
  padding: var(--spacing-md) var(--spacing-xl);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

function Footer() {
  return (
    <StyledFooter>
      <StyleAnchor
        href="https://github.com/vinesk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> vinesk
      </StyleAnchor>
    </StyledFooter>
  );
}

export default Footer;
