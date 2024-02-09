export interface MenuItemDrag {
  id: string
  name: string
  type: "section" | "meal"
}

export function getItems(): { [id: string]: MenuItemDrag } {
  return {
    "1": {
      id: "1",
      name: "Zagrevanje(S)",
      type: "section",
    },
    "2": {
      id: "2",
      name: "Prsuta",
      type: "meal",
    },
    "3": {
      id: "3",
      name: "Sir",
      type: "meal",
    },
    "4": {
      id: "4",
      name: "Supe(S)",
      type: "section",
    },
    "5": {
      id: "5",
      name: "Pileca supa",
      type: "meal",
    },
  }
}

export interface ColumnInter {
  id: string
  title: string
  tasksIds: string[]
}

export interface initialDataInter {
  tasks: { [id: string]: MenuItemDrag }
  columns: { [id: string]: ColumnInter }
  columnOrder: string[]
}
export const initialData: initialDataInter = {
  tasks: getItems(),
  columns: {
    "column-1": {
      id: "column-1",
      title: "Glavna Jela",
      tasksIds: ["1", "2", "3", "4", "5"],
    },
  },
  columnOrder: ["column-1"],
}
export const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

// export const move = (
//   source,
//   destination,
//   droppableSource,
//   droppableDestination,
// ) => {
//   const sourceClone = Array.from(source)
//   const destClone = Array.from(destination)
//   const [removed] = sourceClone.splice(droppableSource.index, 1)

//   destClone.splice(droppableDestination.index, 0, removed)

//   const result = {}
//   result[droppableSource.droppableId] = sourceClone
//   result[droppableDestination.droppableId] = destClone

//   return result
// }

// export const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//   // some basic styles to make the items look a bit nicer
//   // userSelect: "none",
//   padding: '10px',
//   margin: '0 0 10px 0',
//   // padding: grid * 2,
//   // margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging
//   background: isDragging ? 'lightgreen' : 'grey',

//   // styles we need to apply on draggables
//   ...draggableStyle,
// })
// export const getListStyle = (isDraggingOver: boolean) => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: 'grid',
//   width: 250,
// })

export function findMealsAfterSection(
  list: string[],
  index: number,
  tasks: { [id: string]: MenuItemDrag },
) {
  let startIndex = index
  let endIndex = -1

  // Check if the index is valid and if the current item is 'S'
  if (
    index >= 0 &&
    index < list.length &&
    tasks[list[index]].type === "section"
  ) {
    // Iterate over the list starting from the index
    for (let i = index + 1; i < list.length; i++) {
      var curItem = tasks[list[i]]
      // If the current item is 'M', set startIndex if it's not already set
      if (curItem.type === "meal" && startIndex === -1) {
        startIndex = i
      }
      // If the current item is 'S', set endIndex and break the loop
      if (curItem.type === "section") {
        endIndex = i - 1
        break
      }
      // If the loop reaches the end of the list, set endIndex to the last index
      if (i === list.length - 1) {
        endIndex = i
      }
    }
  }

  return { startIndex, endIndex }
}

// const sectionsAndMeals = ['S', 'M', 'M', 'M', 'S', 'M', 'S'];
// const indexOfS = 0; // Index of 'S'

// const { startIndex, endIndex } = findMealsAfterSection(sectionsAndMeals, indexOfS);
// console.log("Start Index:", startIndex); // Output: 1
// console.log("End Index:", endIndex); // Output: 3
