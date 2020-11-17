import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { addTask } from "../Actions/actionTask";
const AddItems = () => {
  const [myinput, setMyinput] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    if (myinput) {
      dispatch(addTask({ text: myinput, id: Math.random, isDone: false }));
      setMyinput("");
    } else {
      alert("noooo");
    }
  };
  return (
    <Card bg="primary">
      <Card.Body>
        <h1 className={"text-white"}>To-Do-App!</h1>
        <Form onSubmit={add}>
          <Form.Group
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setMyinput(e.target.value)}
            value={myinput}
          />

          <InputGroup.Append>
            <button variant="sucess" onClick={add}>
              +
            </button>
            {""}
          </InputGroup.Append>
        </Form>
        <button variant="infos" className="mr-3">
          isDone
        </button>
      </Card.Body>
    </Card>
  );
};

export default AddItems;
