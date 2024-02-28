import { useEffect, useState } from "react"
import { DragDropContext, DropResult, DragStart } from "react-beautiful-dnd"

import {
  getItems,
  reorder,
  // // move,
  // getItemStyle,
  // getListStyle,
  MenuItemDrag,
  initialData,
  ColumnInter,
  initialDataInter,
  findMealsAfterSection,
} from "./helper"
import Column from "./Column"
import Typography from "components/base/typography/Text"
import TextField from "components/base/TextField"

const resultObj = {
  draggableId: "1",
  type: "TYPE",
  reason: "DROP",
  source: {
    droppableId: "column-1",
    index: 0,
  },
  // Dest can be null
  destination: {
    droppableId: "column-1",
    index: 1,
  },
}

export function MenuDrag() {
  const [state, setState] = useState<initialDataInter>(initialData)

  function onDragStart(result: DragStart) {
    const { source: src, draggableId: id } = result

    const col = state.columns[src.droppableId]
    const fetechedItem = state.tasks[id]
    const { startIndex, endIndex } = findMealsAfterSection(
      Array.from(col.tasksIds),
      src.index,
      state.tasks,
    )
    const newTaskIds = Array.from(col.tasksIds)
    var howManyToMove = endIndex - startIndex
    newTaskIds.splice(src.index, howManyToMove)
    const itemsToMove = col.tasksIds.slice(startIndex, endIndex)
    newTaskIds.splice(src.index, 0, ...itemsToMove)

    console.log("on start", newTaskIds)
    // if (fetechedItem.type !== "section" || !src) return;
    // var start_index = src.index;
    // var end_location = 0;
    // for(var i=start_index;i++;i<Object.keys(state.tasks).length){
    //     var cur_obj = state.tasks[i]
    //     // cur_obj undefined
    //     if (cur_obj.type === "section"){
    //       console.log("pomeri do ovde", i)
    //       end_location = i
    //     }
    // }
    // if (!end_location){
    //   end_location = Object.keys(state.tasks).length
    // }
  }
  function moveMeal(result: DropResult) {
    const { source: src, destination: dest, draggableId: id } = result
    if (!dest) return
    const col = state.columns[src.droppableId]
    const newTaskIds = Array.from(col.tasksIds)
    // na poziciji obrisi 1
    newTaskIds.splice(src.index, 1)
    // na poziciji ne brisi nista i dodaj id
    newTaskIds.splice(dest.index, 0, id)

    const newCol = {
      ...col,
      tasksIds: newTaskIds,
    }
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newCol.id]: newCol,
      },
    }

    setState(newState)
  }
  function onDragEnd(result: DropResult) {
    const { source: src, destination: dest, draggableId: id } = result
    if (!dest) return
    if (src.droppableId === dest.droppableId && src.index === dest.index) return
    const col = state.columns[src.droppableId]

    const draggingItem = state.tasks[col.tasksIds[src.index]]
    if (draggingItem.type === "meal") {
      moveMeal(result)
      return
    }
    console.log(">>>", state.tasks[col.tasksIds[src.index]])

    // const col = state.columns[src.droppableId]
    // const newTaskIds = Array.from(col.tasksIds)
    // // na poziciji obrisi 1
    // newTaskIds.splice(src.index, 1)
    // // na poziciji ne brisi nista i dodaj id
    // newTaskIds.splice(dest.index, 0, id)

    // const col = state.columns[src.droppableId]
    const { startIndex, endIndex } = findMealsAfterSection(
      Array.from(col.tasksIds),
      src.index,
      state.tasks,
    )
    const newTaskIds = Array.from(col.tasksIds)
    var howManyToMove = endIndex - startIndex
    newTaskIds.splice(src.index, howManyToMove + 1)
    const itemsToMove = col.tasksIds.slice(startIndex, endIndex + 1)
    newTaskIds.splice(dest.index, 0, ...itemsToMove)

    const newCol = {
      ...col,
      tasksIds: newTaskIds,
    }
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newCol.id]: newCol,
      },
    }

    setState(newState)
  }
  useEffect(() => {
    console.log(state.columns["column-1"].tasksIds)
  }, [state])
  return (
    <div>
      <Typography variant="body1">
        Pretrazi jela i sekcije da ih dodas
      </Typography>
      <TextField id="search-icon" />
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        {state.columnOrder.map((columnId: string) => {
          const column = state.columns[columnId]
          const tasks = column.tasksIds.map(
            (taskId: string, index) => state.tasks[taskId],
          )

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    </div>
  )
}
