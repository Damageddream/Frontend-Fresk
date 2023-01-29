import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Plik(props) {
  // Show - Hide - Modal on WydarzenieOsobno component
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state for Form - form - storing form data, and isLoading - display when data is loading, error - handling errors
  const [form, setForm] = useState({
    file: '',
    wydarzenie: props.wydarzenie,
    file_name:''
  })
  const [errors, setErrors] = useState()
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    let newFile = { ...form };
    newFile['file'] = e.target.files[0];
    setForm(newFile)
    console.log(form, newFile, props.wydarzenie)
  }

  const handleNameChange = (e) => {
    setForm({
      ...form,
      file_name: e.target.value,
    })
  }

  // 
  let formForm = new FormData();
  formForm.append('file', form.file)
  formForm.append('wydarzenie', form.wydarzenie)
  formForm.append('file_name', form.file_name)

  //Submit and add file to download
  const handleSubmit = (event) => {
    props.setAddedFile(false)
    setIsLoading(true);
    event.preventDefault()
    axios({
      method: "POST",
      url: "/api/files/",
      data: formForm,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(()=>{
      setIsLoading(true)
      props.setAddedFile(true)
      handleClose()
    })
    .catch((error) => {
      setErrors(error);
    })
  };

  //Handle change in file name in form
  return (
    <>
      <Button variant="primary" className="mb-3" onClick={handleShow}>
        Dodaj Plik
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Galeria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='addfile'>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Dodaj zdjęcia do galerii</Form.Label>
              <Form.Control
                type="file"
                name='file'
                onChange={(e) => { handleFileChange(e) }}
                isInvalid={!!errors} />
              <Form.Control.Feedback type='invalid'>
                {errors}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tytuł</Form.Label>
              <Form.Control
                type="text"
                placeholder="nazwa..."
                onChange={(e) => {
                  handleNameChange(e);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" form='addfile' type="submit" onClick={handleSubmit}>
            Dodaj pliki
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Plik