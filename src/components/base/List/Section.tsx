import Avatar from "@mui/material/Avatar"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"

import EditOutlinedIcon from "@mui/icons-material/EditOutlined"

import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined"
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined"
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined"
import IconButton from "@mui/material/IconButton"

import { ThemeProvider } from "@mui/material/styles"

import theme from "assets/styles/theme"
const data = [
  {
    id: 1,
    name: "Drinks",
    description: "Ne gazirana pica",
    icon: <LiquorOutlinedIcon color="primary"/>,
  },
  {
    id: 2,
    name: "Breakfast",
    description: "Sluzi se do 12",
    icon: <EggAltOutlinedIcon color="primary"/>,
  },
  {
    id: 3,
    name: "Rucak",
    description: "Domaca i strana kuhinja",
    icon: <LunchDiningOutlinedIcon color="primary"/>,
  },
]
export function SectionList() {
  const dense = true
  return (
    <ThemeProvider theme={theme}>
      <List dense={dense}>
        {data.map((item) => {
          return (
            <ListItem
            style={{
                border:"1px solid lightgray",
                borderRadius:"5px",
                marginBottom:"5px",
            }}
            secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditOutlinedIcon  color="primary"/>
                </IconButton>
              }
                >
              <ListItemAvatar>
                <Avatar >{item.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.description} />
            </ListItem>
          )
        })}
      </List>
    </ThemeProvider>
  )
}
