import { ReactNode, MouseEvent, cloneElement } from "react"
import MuiIconButton from "@mui/material/IconButton"
import { IconButtonProps } from "@mui/material"

interface MyIconButtonProps extends IconButtonProps {
  onClick?: () => void
  size?: "small" | "medium" | "large"
  icon: ReactNode
}
const IconButton = ({
  onClick,
  size = "large",
  icon,
  color,
  ...rest
}: MyIconButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <MuiIconButton color="primary" onClick={handleClick}>
      {cloneElement(icon as React.ReactElement, { fontSize: size })}
    </MuiIconButton>
  )
}

export default IconButton
