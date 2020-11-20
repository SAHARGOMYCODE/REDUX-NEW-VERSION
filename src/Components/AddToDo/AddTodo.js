import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addItem } from "../../JS/Actions/Action";
import { Button } from "reactstrap";
function AddTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input value={item} onChange={(e) => setItem(e.target.value)} size="40" />
      <Button
        color="primary"
        onClick={() => {
          dispatch(addItem({ id: Math.random(), todo: item, done: false }));
          setItem("");
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default connect()(AddTodo);
