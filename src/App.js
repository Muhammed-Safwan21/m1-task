import { Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Row className='m-0 '>
        <Col md={2} className='p-0'>
          <Sidebar/>
        </Col>
        <Col md={10} className='p-0'>
        <Home/>
        </Col>
      
      </Row>
      
      
    </div>
    </>
  );
}

export default App;
