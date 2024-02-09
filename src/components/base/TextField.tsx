import { forwardRef, useState } from "react"
import {
  TextField as MUITextField,
  TextFieldProps as MuiTextFieldProps,
  InputLabelProps,
  OutlinedTextFieldProps,
} from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"

import theme from "assets/styles/theme"

// export default function TextField({ children, ...rest }: MuiTextFieldProps) {
//   return (
//     <ThemeProvider theme={theme}>
//       <MUITextField variant="outlined">{children}</MUITextField>
//     </ThemeProvider>
//   )
// }

export interface CustomTextFieldProps
  extends Omit<OutlinedTextFieldProps, "error" | "variant"> {
  // I couldn't find a solution for typescript to recognize classes type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes?: any
  error?: string
  inputLabelProps?: InputLabelProps
}
export interface TextFieldProps
  extends Omit<OutlinedTextFieldProps, "error" | "ref" | "variant"> {
  error?: string
}
export function CustomTextField({ error, ...props }: CustomTextFieldProps) {
  return (
    // @ts-ignore
    <MUITextField
      fullWidth
      variant="outlined"
      {...props}
      error={Boolean(error)}
      helperText={error}
      // @ts-ignore
      InputProps={{
        ...props.InputProps,
        fullWidth: true,
        classes: {
          ...props.InputProps?.classes,
        },
      }}
    />
  )
}

const TextField = forwardRef(({ InputProps, ...rest }: TextFieldProps, ref) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomTextField
        {...rest}
        inputRef={ref}
        InputProps={{ ...InputProps }}
      />
    </ThemeProvider>
  )
})

export default TextField
