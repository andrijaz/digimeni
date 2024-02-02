import {
  TextField as MUITextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'assets/styles/theme'

export default function TextField({ children, ...rest }: MuiTextFieldProps) {
  return (
    <ThemeProvider theme={theme}>
      <MUITextField variant="outlined">{children}</MUITextField>
    </ThemeProvider>
  )
}
