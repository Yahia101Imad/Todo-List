import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import TasksProvider from "../Contexts/TodoContext";

export default function TodoTaskAdding() {
  const [taskInput, setTaskInput] = useState("");
  const { dispatch } = useContext(TasksProvider);

  const addingTask = () => {
    dispatch({ type: "add", payload: { title: taskInput } });
    setTaskInput("");
  };

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
        onChange={(e) => {
          setTaskInput(e.target.value);
        }}
        value={taskInput}
        sx={{ width: "78%" }}
      />
    </Box>
  );
}
