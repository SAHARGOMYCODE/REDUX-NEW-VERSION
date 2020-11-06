import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit_Task } from "../JS/Actions/actionTask";

const EditItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(item.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form.Control
          type="text"
          placeholder="Entrer posterurl"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />{" "}
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(
                edit_Task({ id: item.id, text: edit, isDone: item.isDone })
              );
            }}
          >
            Save change
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setEdit(item.text);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditItem;
