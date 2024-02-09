import { styled } from "@mui/system"

export const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  // background-color: ${({ theme }) => theme.palette.primary.main},
  color: "#fff",
  padding: "10px",
}))

export const LogoContainer = styled("div")(() => ({}))

export const HeaderLogo = styled("img")(() => ({
  height: "30px" /* Adjust the height of the logo as needed */,
}))

export const HomeButtonContainer = styled("div")(() => ({}))

export const HomeIconButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontSize: "20px",
  padding: "5px",
  marginRight: "10px" /* Adjust the margin as needed */,
  // ":focus":
  // &:focus {
  //   outline: none,
  // }

  // &:hover {
  //   opacity: 0.8,
  // }
}))
