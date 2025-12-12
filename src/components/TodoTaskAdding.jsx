import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useReducer } from "react";
import tasksReducer from '../Reducers/TasksReducer'
// import { TodoContext } from "../Contexts/TodoContext";



export default function TodoTaskAdding() {
  const [taskInput, setTaskInput] = useState('')
  // const {setTasks, tasks} = useContext(TodoContext)

  const [tasks, dispatch] = useReducer(tasksReducer, [])

  const handleInputChange = (event) => {
    setTaskInput(event.target.value)
  }

  const addingTask = () => {
    dispatch({type: 'add', payload: {title: taskInput}})
    setTaskInput('')
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
        value={taskInput}
        sx={{ width: "78%" }}
      />
    </Box>
  );
}
