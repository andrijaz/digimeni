import { createTheme, responsiveFontSizes } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: "#4e2828", // Adjust the primary color as needed
    },
    secondary: {
      main: "#3a2f2f", // Adjust the secondary color as needed
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme
