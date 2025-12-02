import Container from "@mui/material/Container";
import TodoTaskAdding from "./TodoTaskAdding";
import TodoTask from "./TodoTask";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

import { useState, useEffect } from "react";
import { TodoContext } from "../Contexts/TodoContext";

export default function TodoCard() {
  const [tasks, setTasks] = useState([]);
  const [alignment, setAlignment] = React.useState("all");

  const handleChange = (event) => {
    setAlignment(event.target.value);
  };

  const doneTasks = tasks.filter((task) => task.isDone);
  const notDoneTasks = tasks.filter((task) => !task.isDone);
  let tasksToBeRender = tasks;

  if (alignment == "done") {
    tasksToBeRender = doneTasks;
  } else if (alignment == "not-done") {
    tasksToBeRender = notDoneTasks;
  } else {
    tasksToBeRender = tasks;
  }

  // useEffect(() => {
  //   const storageTasks = JSON.parse(localStorage.getItem("tasks") || []);
  //   setTasks(storageTasks);
  // }, []);

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
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="done">Done</ToggleButton>
            <ToggleButton value="not-done">not done</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <TodoContext.Provider value={{ setTasks, tasks }}>
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
        </TodoContext.Provider>
      </Card>
    </Container>
  );
}
