import {
  Typography as MuiTypography,
  TypographyProps as MuiTypograpyProps,
} from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"

import theme from "assets/styles/theme"

export default function Typography({ children, ...rest }: MuiTypograpyProps) {
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography {...rest}>{children}</MuiTypography>
    </ThemeProvider>
  )
}
