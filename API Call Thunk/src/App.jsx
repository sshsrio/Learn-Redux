import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  if (state.todo.isLoading) return <h1>Loading ...</h1>;
  return (
    <>
      <h1>API Call Using Redux Thunk</h1>
      <div className="card">
        <button onClick={() => dispatch(fetchTodos())}>fetch todo</button>
        {state.todo.data?.map((e) => (
          <li>{e.title}</li>
        ))}
      </div>
    </>
  );
}

export default App;
