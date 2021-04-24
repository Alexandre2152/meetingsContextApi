import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Alert, Button, Form } from 'react-bootstrap';
import './style.css'

import { GlobalContext } from '../context/GlobalState';

export const EditMeetings = (route) => {
  let history = useHistory();

  const { meetings, editMeeting } = useContext(GlobalContext);

  const [selectedItem, setselectedItem] = useState({
    id: null,
    titulo: "",
    hora: "",
    colaboradores: ""
  });

  const currentItemId = route.match.params.id;

  useEffect(() => {
    const meetingId = currentItemId;
    const selectedItem = meetings.find(
      (currentmeetingsTraversal) => currentmeetingsTraversal.id === parseInt(meetingId)
    );
    setselectedItem(selectedItem);
  }, [currentItemId, meetings]);

  const onSubmit = (e) => {
    e.preventDefault();
    editMeeting(selectedItem);
    history.push("/");
  };

  const handleOnChange = (userKey, newValue) =>
    setselectedItem({ ...selectedItem, [userKey]: newValue });

  if (!selectedItem || !selectedItem.id) {
    return <div>ID da Reunião inválido.</div>;
  }

  return (
    <React.Fragment>

<Container fluid>

<Alert variant='primary' className="title">
    <h1>METTING</h1>
</Alert>

<Alert variant='primary' className="title">
    <strong>INSERIR REUNIÃO</strong>
</Alert>

<form onSubmit={onSubmit}>
<Form.Group controlId="titulo">
  <Form.Label>TITULO</Form.Label>
  <Form.Control type="text" value={selectedItem.titulo} placeholder="Digitar titulo" onChange={(e) => handleOnChange("titulo", e.target.value)} />
</Form.Group>

<Form.Group controlId="Foto">
    <Form.Label>HORA</Form.Label>
    <Form.Control type="text" value={selectedItem.hora} placeholder="Digitar o horario da reunião" onChange={(e) => handleOnChange("hora", e.target.value)} />
</Form.Group>

<Form.Group controlId="colaboradores">
    <Form.Label>Colaboradores</Form.Label>
    <Form.Control as="textarea" value={selectedItem.colaboradores} rows={3} placeholder="Nome dos colaboradores" onChange={(e) => handleOnChange("colaboradores", e.target.value)} />
</Form.Group>

<Button variant="primary" type="submit" className="btnEnviar">
    Editar
</Button>
<Link to="/">
  <Button variant="primary" type="submit" className="btnVoltar">
    Voltar
  </Button> 
</Link>
  </form>

</Container>
    </React.Fragment>
  );
};