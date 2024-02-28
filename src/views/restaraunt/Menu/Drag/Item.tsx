import { MenuItemDrag } from "./helper"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import IconButton from "components/base/IconButton"
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined"
import Typography from "components/base/typography/Text"
import {
  RoutePaths,
  buildEditMealUrl,
  buildEditSectionlUrl,
} from "routing/RoutePaths"

import { useNavigate } from "react-router-dom"
import { REST_SLUG } from "views/constants"

interface ItemProps {
  item: MenuItemDrag
  index: number
}

function getBgColor(item_type: string, is_drag: boolean) {
  if (item_type == "meal" && is_drag) return "lightgreen"
  if (item_type == "section" && is_drag) return "lightblue"
  return "white"
}
const Container = styled.div<{ item_type: string; is_drag: boolean }>`
  border: 1px solid lightgray;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  margin-left: ${(props) => (props.item_type === "meal" ? "15px" : "0px")};
  background-color: ${(props) => getBgColor(props.item_type, props.is_drag)};
  display: flex;
  justify-content: space-between;
`
function getEditUrl(item: MenuItemDrag) {
  if (item.type === "meal") {
    return buildEditMealUrl(REST_SLUG, item.id)
  }
  return buildEditSectionlUrl(REST_SLUG, item.id)
}
export default function Item({ item, index }: ItemProps) {
  const router = useNavigate()

  function onClickEdit(item: MenuItemDrag) {
    return router(getEditUrl(item))
  }
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Container
          item_type={item.type}
          is_drag={snapshot.isDragging}
          {...provided.draggableProps}
          // Sluzi za nosenje item, moze samo delic item
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            {item.id} - {item.name}
          </div>

          <div>
            <IconButton
              size="small"
              icon={<EditOutlinedIcon />}
              onClick={() => onClickEdit(item)}
            />
            <IconButton size="small" icon={<ClearOutlinedIcon />} />
          </div>
        </Container>
      )}
    </Draggable>
  )
}
