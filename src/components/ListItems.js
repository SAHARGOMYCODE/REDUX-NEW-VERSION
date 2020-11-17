import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkTask, deleteTask } from "../Actions/actionTask";
import EditItem from "./EditItems";
const Listitems = () => {
  const Items = useSelector((state) => state.listItems);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {Items.map((item, key) => (
        <ListGroup.Item
          key={key}
          Style={{ display: "flex", alignItems: "flex-end" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(checkTask(item.id))}
            >
              {item.isDone ? "unDone" : "isDone"}
            </Button>
            <EditItem item={item} />

            <Button
              variant="Danger"
              onClick={() => dispatch(deleteTask(item.id))}
            >
              Delete
            </Button>
          </div>
          <p style={{ margin: "0px" }} className={item.isDone ? "check" : ""}>
            {item.description}
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Listitems;
