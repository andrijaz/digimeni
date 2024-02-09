import { useEffect, useState } from "react"
import Item from "./Item"
import { ColumnInter, MenuItemDrag } from "./helper"
import { Droppable } from "react-beautiful-dnd"

import styled from "styled-components"

interface ColumnProps {
  column: ColumnInter
  tasks: MenuItemDrag[]
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`
const Title = styled.div`
  padding: 8px;
`
const ItemList = styled.div`
  padding: 8px;
`

export default function Column({ column, tasks }: ColumnProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => {
          return (
            <ItemList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((item, index) => {
                return <Item key={item.id} item={item} index={index} />
              })}
              {provided.placeholder}
            </ItemList>
          )
        }}
      </Droppable>
    </Container>
  )
}
