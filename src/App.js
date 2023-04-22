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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Days Number:
          <input
            type="number"
            value={daysNumber}
            onChange={event => setDaysNumber(event.target.value)}
          />
        </label>
        <br />
        <label>
          Week Start:
          <input
            type="number"
            value={weekStart}
            onChange={event => setWeekStart(event.target.value)}
          />  Notice : saturday is 0 and Friday is 7.
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default App;
