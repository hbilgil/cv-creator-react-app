import React from "react";
import styled from "styled-components";

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
              <p>Copyright © 2022 </p>
              <Link href="https://github.com/hbilgil" target="_blank">
                Halil Bilgil
              </Link>
            </FooterContainer>
        );    
    }
}

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;

const Link = styled.a`
  position: relative;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.linkActive};
  }
`;

export default Footer;