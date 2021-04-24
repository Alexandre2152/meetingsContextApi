import React from "react";
import { Heading } from "./Heading";
import { MeetingsList } from "./MeetingsList";
import { Container, Alert } from 'react-bootstrap';
import './style.css'

export const Home = () => {
  return (
    <React.Fragment>
      <Container fluid>
          <Alert variant='primary' className="title">
              <h1>METTING</h1>
          </Alert>
        <Heading />
        <MeetingsList />
      </Container>
      
    </React.Fragment>
  );
};