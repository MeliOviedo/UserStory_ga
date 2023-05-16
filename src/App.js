import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <label for="start" >Start</label>
      <Form.Control className= "form" type="date" 
       min="2023-01-01" max="2023-12-31"/>

       <label for="end" >End</label>
      <Form.Control className= "form" type="date" 
       min="2023-01-01" max="2023-12-31"/>

      <Form.Select className= "form" aria-label="Default select example">
      <option>Door</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>

      </Form.Select>
      <Button variant="primary">Show</Button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
