import Container from "@mui/material/Container";
import TodoTaskAdding from "./TodoTaskAdding";
import TodoTask from "./TodoTask";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function TodoCard() {
  const [tasks, setTasks] = useState([])


  return (
    <Container maxWidth="sm">
      <Card>
        {/* header of the todo card */}
        <div style={{ textAlign: "center"}}>
          <CardContent>
            <Typography variant="h2">Todo</Typography>
          </CardContent>
          <hr style={{ width: "80%" }} />
          <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="done">Done</ToggleButton>
            <ToggleButton value="current">Current</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* task list */}
        <div style={{ padding: "10px" }}>
          {tasks.map((task, index) => {
            return <TodoTask key={index} index={index} title={task.title} setTasks={setTasks} tasks={tasks} isDone={tasks[index].isDone} />
          })}
        </div>
        {/* task add */}
        <div style={{ padding: "10px" }}>
          <TodoTaskAdding setTasks={setTasks} tasks={tasks}/>
        </div>
      </Card>
    </Container>
  );
}
