import Holberton from "./Holberton.jpg";
import "./App.css";
import Notifications from "./Notifications.js";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={Holberton} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div class="App-footer">
        <p>
          Copyright {getFullYear()}- {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;


