import {
  HeaderContainer,
  LogoContainer,
  HomeButtonContainer,
  HeaderLogo,
  HomeIconButton,
} from "./styles"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"

import { ThemeProvider } from "@mui/system"
import { useNavigate } from "react-router-dom"
import { buildResAdminUrl } from "routing/RoutePaths"
import theme from "assets/styles/theme"


const Header: React.FC = () => {
  const router = useNavigate()
  function handleButtonClick(url: string) {
    router(url)
  }
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <LogoContainer>
          <HeaderLogo src="/path/to/your/logo.png" alt="Logo" />
        </LogoContainer>
        <HomeButtonContainer>
          <HomeIconButton
            onClick={() => handleButtonClick(buildResAdminUrl())}
          >
            <HomeOutlinedIcon />
          </HomeIconButton>
        </HomeButtonContainer>
      </HeaderContainer>
    </ThemeProvider>
  )
}

export default Header
