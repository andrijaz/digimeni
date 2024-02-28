import { Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from "assets/styles/theme";

interface TagData {
    id: string,
    name: string,
    local: string,
}
const data: TagData[] = [
    {
        id:"1",
        name:"lunch",
        local:"rucak"
    },
    {
        id:"2",
        name:"vegan",
        local:"rucak"
    },
    {
        id:"3",
        name:"takeway",
        local:"rucak"
    },
]
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
export function TagsList(){
    const [chipData, setChipData] = useState<readonly TagData[]>(data)

    const handleDelete = (chipToDelete: TagData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
      };
    return (
        <ThemeProvider theme={theme}

        >
          {chipData.map((item) => {
            let icon;
            return (
              <ListItem key={item.id}
              
              sx={{
                display: 'flex',
                flexDirection: 'row', // Display chips horizontally
                flexWrap: 'wrap',
                listStyle: 'none',
                padding: theme.spacing(0.5),
                margin: 0,
                flexGrow: '0 1 auto'
              }}
              >
                <Chip
                  color="primary"
                  icon={icon}
                  label={item.name}
                  onDelete={handleDelete(item)}
                />
              </ListItem>
            );
          })}
        </ThemeProvider>
      );
}