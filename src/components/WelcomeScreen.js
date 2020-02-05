import React, {useState, Suspense, lazy} from "react";
import {Button, Container, Row, Col, Spinner} from "reactstrap";

const WelcomeScreen = () => {
  const [isTableRendered, renderTable] = useState(false);
  const buttonData = [
    {
      name: 'Full',
      color: 'danger',
      key: 'Full',
      onClick: () => renderTable('full'),
    },
    {
      name: 'Partial',
      color: 'success',
      key: 'Partial',
      onClick: () => renderTable('partial'),
    }
  ];
  const DataTable = lazy(() => import('./DataTable'));

  return (
    <Container style={{minHeight: '100vh'}} className={'d-flex justify-content-center align-items-center'}>
      <Row>
        <Col className={'d-flex justify-content-center'}>
        {isTableRendered ?
          <Suspense fallback={<Spinner color={'primary'}/>}>
            <DataTable tableType={isTableRendered}/>
          </Suspense> :
          buttonData.map(b => (
            <Button {...b}>{b.name}</Button>
          ))}
        </Col>
      </Row>
    </Container>
  )
};

export default WelcomeScreen;