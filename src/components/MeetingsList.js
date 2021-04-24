import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Button, Table } from 'react-bootstrap';

import { GlobalContext } from '../context/GlobalState';

export const MeetingsList = () => {
  const { meetings, removeMeeting } = useContext(GlobalContext);
  return (
    <React.Fragment>

      {meetings.length > 0 ? (
        <React.Fragment>
            <Container fluid="md">
            <>

            <Alert variant='primary' className="title">
                    <h1>METTING</h1>
                </Alert>

                <Row>
                    <Col>
                        <Link to="/add">
                            <Button variant="primary">
                                ADICIONAR
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <br/>

               {/* Tabela para exibir os dados */}
               <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                        <tr>
                          <th>ID</th>
                          <th>Reuniões</th>
                          <th>Hora</th>
                          <th>Colaboradores</th>
                          <th colSpan="2" style={{textAlign: 'center'}}>Ação</th>
                        </tr>
                    </thead>
                    {meetings.map((meetings) => (
                    <tbody key={meetings.id}>

                      <>
                        <tr>
                        <td>{meetings.id}</td>
                        <td>{meetings.titulo}</td>
                        <td>{meetings.hora}</td>
                        <td >{meetings.colaboradores}</td>
                        <td>
                          <Link to={`/edit/${meetings.id}`}>
                            <Button type="submit" size="sm" variant="primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Button onClick={() => removeMeeting(meetings.id)} size="sm" variant="danger">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                          </Button>
                        </td>
                        </tr>
                      </>

                    </tbody>
                    ))}
              </Table>
            </>
        </Container>
          

        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}

    </React.Fragment>
  );
};