import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";

export default function TodoTaskAdding() {
  const [task, setTask] = useState('')
  const {setTasks, tasks} = useContext(TodoContext)

  const handleInputChange = (event) => {
    setTask(event.target.value)
  }

  const addingTask = () => {
    const newTask = {
      title: task,
      isDone: false
    }
    setTasks([...tasks, newTask])
    setTask('')
  }
  return (
    <Box
      component="form"
      sx={{ display: "flex", justifyContent: "space-between" }}
      noValidate
      autoComplete="off"
    >
      <Button
        variant="contained"
        size="large"
        sx={{ height: "55px", width: "20%" }}
        onClick={addingTask}
      >
        Add
      </Button>
      <TextField
        id="outlined-basic"
        label="Task title"
        variant="outlined"
        onChange={handleInputChange}
        value={task}
        sx={{ width: "78%" }}
      />
    </Box>
  );
}
