import { useState } from 'react';
import './App.css';
import Planner from './planner'

function App() {
    const [daysNumber, setDaysNumber] = useState('');
    const [weekStart, setWeekStart] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      setFormSubmitted(true);
    }
  
    if (formSubmitted) {
      return <Planner daysNumber={daysNumber} weekStart={weekStart}/>;
    }
  return (
    <div className="App container mt-2">
      <p className='mt-2'> A planner for your next days or hours </p>
      <form className='p-5 gap-3 d-flex' onSubmit={handleSubmit}>
          <input
          className='form-control'
            type="number"
            placeholder='Days Number:'
            value={daysNumber}
            onChange={event => setDaysNumber(event.target.value)}
          />
        <br />
    
          
          <input
            className='form-control'
            type="date"
            placeholder='Week Start:'
            value={weekStart}
            onChange={event => setWeekStart(event.target.value)}
          />  
        
        <br />
        <input className="btn btn-outline-success" type="submit"  value="Submit" />
      </form>

    </div>
  );
}

export default App;
