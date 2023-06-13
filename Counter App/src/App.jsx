import "./App.css";
import Counter from "./components/Count";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Practice</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <Counter />
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
