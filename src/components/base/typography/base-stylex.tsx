import { ReactNode } from "react"
import { css } from "styled-components"
import { space, SpaceProps } from "styled-system"
import { ifProp, prop } from "styled-tools"

export interface TypographyBaseProps extends SpaceProps {
  children: ReactNode
  color?: string
  lineHeight?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: number
  textAlign?: string
  fontStyle?: string
  textDecoration?: string
  textTransform?: string
}

export const TypographyBaseStyles = css<TypographyBaseProps>`
  color: ${(props) => props.color ?? props.theme.color.text.gray};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.font.weight.regular};
  font-family: ${({ fontFamily, theme }) => fontFamily ?? theme.font.family};
  font-size: ${({ fontSize, theme }) => fontSize ?? theme.font.size.base};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight ?? theme.font.lineHeight.regular};
  text-align: ${ifProp("textAlign", prop("textAlign"), "left")};
  font-style: ${ifProp("fontStyle", prop("fontStyle"))};
  text-decoration: ${ifProp("textDecoration", prop("textDecoration"))};
  text-transform: ${ifProp("textTransform", prop("textTransform"))};
  margin: 0;
  ${space};
`
