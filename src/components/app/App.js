import './App.css';
import { Form } from '../form/form';
import { useState } from 'react';
function App() {
  const [results, setResults] = useState([])
  const handleFormResults = (res) => {
    console.log(results)
    setResults([...results, res])
  }
  const resultsMap = results.map((el)=>{
    return(<>
      <h2>Zadanie : {el.task}</h2>
      <p> Osoba :  {el.person}</p>
    </>)
  })
  return (
    <div className="App">
      <div className='banner'><h2>Banner</h2></div>
      <div className='container'>
        <div className='form-main'>
          <p>Formularz</p>
          <Form send={handleFormResults}></Form>
        </div>
        <div className='form-results'>
              {resultsMap}
        </div>
      </div>
      <div className='footer'><h3>Footer</h3></div>
    </div>
  );
}

export default App;
