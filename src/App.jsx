import TodoCard from "./components/TodoCard";
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
      <TodoCard />
    </div>
  );
}

export default App;
