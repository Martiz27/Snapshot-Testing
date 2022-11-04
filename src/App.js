import './App.css';
import GitHub from './Components/GitHub';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <GitHub/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
