import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col, Alert, Button, Table, Form } from 'react-bootstrap';

import api from '../src/api/api'

class Exibir extends Component {
    state = {
        titulos: []
    }

    async componentDidMount() {
        const response = await api.get('meetings')

        //console.log(response.data)

        this.setState({titulos: response.data})
    }

    render(){

        const {titulos} = this.state

        return(
            <>
            <Container fluid>

            <Alert variant='primary' className="title">
                <h1>METTING</h1>
            </Alert>

            <Alert variant='primary' className="title">
                <strong>REUNIÃO</strong>
            </Alert>

                <form>
                {titulos.map(titulo => (
                    <>
                    <Form.Group controlId="titulo">
                        <Form.Label>TITULO</Form.Label>
                        <Form.Control type="text" placeholder={titulo.titulo} disabled />
                            
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group controlId="foto">
                                <Form.Label>FOTO</Form.Label>
                                <Form.Control type="text" placeholder={titulo.Foto} disabled />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="hora">
                                <Form.Label>HORA</Form.Label>
                                <Form.Control type="text" placeholder={titulo.createdAt} disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Form.Group controlId="colaboradores">
                        <Form.Label>Colaboradores</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder={titulo.colaboradores} disabled />
                    </Form.Group>
                    </>
                    ))}
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    
                </form>

            </Container>
            </>
        )
    }
}

export default Exibir