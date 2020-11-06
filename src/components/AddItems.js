import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { add_Task } from "../JS/Actions/actionTask";

const AddItems = () => {
  const [myinput, setMyinput] = useState("");
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    if (myinput) {
      dispatch(add_Task({ text: myinput, id: Math.random(), isDone: false }));
      setMyinput("");
    } else {
      alert("noooo");
    }
  };
  return (
    <div>
      <h1> TO-DO-APP</h1>
      <Form onSubmit={add}>
        <Form.Group>
          <Form.Control
            onChange={(e) => setMyinput(e.target.value)}
            value={myinput}
          />
          <Button variant="primary" onClick={add}>
            +
          </Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddItems;
