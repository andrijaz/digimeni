
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

import { ThemeProvider } from "@mui/material/styles"

import theme from "assets/styles/theme"
import { useNavigate } from "react-router-dom"
import { buildEditMealUrl } from "routing/RoutePaths"

const data = [
    {
      id: 1,
      name: "Kajgana",
      description: "399 - Omlet od 3 jaja",
    },
    {
      id: 2,
      name: "Tost",
      description: "250 - Tost sa salatom",
    },
    {
      id: 3,
      name: "Kafa",
      description: "159 - Domaca kuvana kafa",
    },
    {
        id: 4,
        name: "Kajgana",
        description: "399 - Omlet od 3 jaja",
      },
      {
        id: 5,
        name: "Tost",
        description: "250 - Tost sa salatom",
      },
      {
        id: 6,
        name: "Kafa",
        description: "159 - Domaca kuvana kafa",
      },
  ]
export function MealList() {
    const dense = true
    const router = useNavigate()
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
                  <IconButton edge="end" aria-label="edit" onClick={() =>
                    router(buildEditMealUrl(String(item.id)))} >
                    <EditOutlinedIcon  color="primary"/>
                  </IconButton>
                }
                  >

                <ListItemText primary={item.name} secondary={item.description} />
              </ListItem>
            )
          })}
        </List>
      </ThemeProvider>
    )
  }
  