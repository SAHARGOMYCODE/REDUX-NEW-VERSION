import React, { useState } from "react";
import "./ListTodo.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { deleteItem, checkItem } from "../../JS/Actions/Action";
import { Button, ButtonToggle } from "reactstrap";
import Edit from "../Edit/Edit";
function ListTodo() {
  const Items = useSelector((state) => state.todo.todo);
  console.log(Items);
  const [all, setAll] = useState(true);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "2% 20%" }}>
      <ButtonToggle color="primary" onClick={() => setAll(!all)}>
        {all ? "All" : "done"}
      </ButtonToggle>
      {all
        ? Items.map((el) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "baseline",
                padding: "2%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  outline
                  color="primary"
                  onClick={() => dispatch(checkItem(el.id))}
                  className={el.done ? "done" : null}
                >
                  {el.done ? "Done" : "Undo"}
                </Button>
                <Button
                  outline
                  color="primary"
                  onClick={() => dispatch(deleteItem(el.id))}
                >
                  Delete
                </Button>

                <Edit item={el} />
              </div>
              <p className={el.done ? "doneItem" : null}>{el.todo}</p>
            </div>
          ))
        : Items.map((el) =>
            el.done ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "baseline",
                  padding: "2%",
                  border: "2px solid black",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    outline
                    color="primary"
                    className={el.done ? "done" : null}
                    onClick={() => dispatch(checkItem(el.id))}
                  >
                    {el.done ? "Done" : "Undo"}
                  </Button>
                  <Button
                    outline
                    color="success"
                    onClick={() => dispatch(deleteItem(el.id))}
                  >
                    Delete
                  </Button>

                  <Edit item={el} />
                </div>
                <p className={el.done ? "doneItem" : null}>{el.todo}</p>
              </div>
            ) : null
          )}
    </div>
  );
}

export default connect()(ListTodo);
