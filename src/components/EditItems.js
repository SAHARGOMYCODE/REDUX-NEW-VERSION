import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { editTask } from "../Actions/actionTask";
const EditItems = ({ item }) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(item.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={item.text}
            onChange={(e) => setEdit(e.target.value)}
          />
          {""}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              dispatch(
                editTask({ id: item.id, text: edit, isDone: item.isDone })
              );
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              setEdit(item.text);
            }}
          >
            SaveChanges
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default EditItems;
