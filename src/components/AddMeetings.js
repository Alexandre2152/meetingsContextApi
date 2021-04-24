import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Alert, Button, Form } from 'react-bootstrap';
import './style.css'

import { GlobalContext } from '../context/GlobalState';

export const AddMeetings = () => {
  let history = useHistory();

  const { AddMeetings, meetings } = useContext(GlobalContext);

  const [titulo, setTitulo] = useState("");
    const [hora, setHora] = useState("")
    const [colaboradores, setColaboradores] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: meetings.length + 1,
      titulo,
      hora,
      colaboradores,
    };
    AddMeetings(newMeeting);
    history.push("/");
  };

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
        <Form.Control type="text" value={titulo} placeholder="Digitar titulo" onChange={(e) => setTitulo(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="Foto">
          <Form.Label>HORA</Form.Label>
          <Form.Control type="text" value={hora} placeholder="Digitar o horario da reunião" onChange={(e) => setHora(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="colaboradores">
          <Form.Label>Colaboradores</Form.Label>
          <Form.Control as="textarea" value={colaboradores} rows={3} placeholder="Nome dos colaboradores" onChange={(e) => setColaboradores(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" className="btnEnviar">
          Adicionar
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