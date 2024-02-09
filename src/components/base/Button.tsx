import {
  Button as MUIButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"

import theme from "assets/styles/theme"

export default function Button({ children, ...rest }: MuiButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <MUIButton variant="outlined" {...rest}>
        {children}
      </MUIButton>
    </ThemeProvider>
  )
}
