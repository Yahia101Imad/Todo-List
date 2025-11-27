import Todo from "./components/Todo";
import "./style.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
