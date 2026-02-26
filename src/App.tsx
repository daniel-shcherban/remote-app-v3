import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="/todos">Go to Todos</Link>
      </nav>
    </>
  );
}

export default App;
