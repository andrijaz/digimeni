import { styled } from "@mui/system"

export const FooterContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "10px",
}))

export const LeftContainer = styled("div")(() => ({}))

export const FooterIcon = styled("img")(() => ({
  height: "30px" /* Adjust the height of the logo as needed */,
}))

export const RightContainer = styled("div")(() => ({
  textAlign: "right",
}))

export const FooterLinks = styled("ul")(() => ({
  listStyleType: "none",
  margin: 0,
  padding: 0,
}))

export const FooterLinkItem = styled("ul")(() => ({
  display: "block",
  marginBottom: "5px",
}))

export const FooterLink = styled("a")(() => ({
  color: "#fff",
  textDecoration: "none",

  // &:hover {
  //   text-decoration: underline;
  // }
}))
