import React from "react"
import {
  FooterContainer,
  LeftContainer,
  RightContainer,
  FooterIcon,
  FooterLinks,
} from "./styles"
import { ThemeProvider } from "@mui/system"
import theme from "assets/styles/theme"
interface FooterProps {
  aboutLink: string
  contactLink: string
}

const Footer: React.FC<FooterProps> = ({ aboutLink, contactLink }) => {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <LeftContainer>
          <FooterIcon src="/path/to/your/icon.png" alt="Icon" />
        </LeftContainer>
        <RightContainer>
          <FooterLinks>
            <li>
              <a href={aboutLink}>About</a>
            </li>
            <li>
              <a href={contactLink}>Contact</a>
            </li>
          </FooterLinks>
        </RightContainer>
      </FooterContainer>
    </ThemeProvider>
  )
}

export default Footer
