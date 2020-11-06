import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { check_Task, delete_Task } from "../JS/Actions/actionTask";
import EditItem from "../components/EditItem";

const ListItems = () => {
  const Items = useSelector((state) => state.listItems);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {Items.map((item, key) => (
        <ListGroup.Item
          ket={key}
          style={{ display: "flex", alignItems: "flex-end" }}
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
              onClick={() => dispatch(check_Task(item.id))}
            >
              {item.isDone ? "unDone" : "isDone"}
            </Button>
            <EditItem item={item} />
            <Button
              variant="danger"
              onClick={() => dispatch(delete_Task(item.id))}
            >
              Delete
            </Button>
          </div>

          <p style={{ margin: "0px" }} className={item.isDone ? "check" : ""}>
            {item.text}
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListItems;
