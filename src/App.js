import {Outlet} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>NFL Team Tracker</h1>
      <Outlet/>
    </div>
  );
}

export default App;
