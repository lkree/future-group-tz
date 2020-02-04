import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container, Row, Col} from "reactstrap";

const WelcomeScreen = () => {
  const buttonData = [
    {
      name: 'Full',
      color: 'danger',
    },
    {
      name: 'Partial',
      color: 'success',
    }
  ];

  return (
    <Container style={{height: '100vh'}} className={'d-flex justify-content-center align-items-center'}>
      <Row>
        <Col className={'d-flex justify-content-center'}>
        {buttonData.map(b => (
            <Button color={b.color} key={b.name} className={'ml-2'}>{b.name}</Button>
        ))}
        </Col>
      </Row>
    </Container>
  )
};

export default WelcomeScreen;