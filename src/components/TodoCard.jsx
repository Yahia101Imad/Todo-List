import Container from "@mui/material/Container";
import TodoTaskAdding from "./TodoTaskAdding";
import TodoTask from "./TodoTask";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import TasksProvider from "../Contexts/TodoContext";
import tasksReducer from "../Reducers/TasksReducer";

export default function TodoCard() {
  const [alignment, setAlignment] = useState("all");
  const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const doneTasks = tasks.filter((task) => task.isDone);
  const notDoneTasks = tasks.filter((task) => !task.isDone);
  let tasksToBeRender = tasks;

  if (alignment === "done") {
    tasksToBeRender = doneTasks;
  } else if (alignment === "not-done") {
    tasksToBeRender = notDoneTasks;
  } else {
    tasksToBeRender = tasks;
  }

  return (
    <Container maxWidth="sm">
      <Card>
        {/* header of the todo card */}
        <div style={{ textAlign: "center" }}>
          <CardContent>
            <Typography variant="h2">Todo</Typography>
          </CardContent>
          <hr style={{ width: "80%" }} />
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={(e) => {
              setAlignment(e.target.value);
            }}
            aria-label="Platform"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="done">Done</ToggleButton>
            <ToggleButton value="not-done">not done</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <TasksProvider value={{ tasks, dispatch }}>
          {/* task list */}
          <div style={{ padding: "10px" }}>
            {tasksToBeRender.map((task, index) => {
              return (
                <TodoTask
                  key={index}
                  index={index}
                  title={task.title}
                  isDone={tasks[index].isDone}
                />
              );
            })}
          </div>

          {/* task add */}
          <div style={{ padding: "10px" }}>
            <TodoTaskAdding />
          </div>
        </TasksProvider>
      </Card>
    </Container>
  );
}
