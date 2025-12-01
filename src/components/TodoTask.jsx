import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import {TodoContext} from '../Contexts/TodoContext'

const Item = styled(Paper)(({isDone}) => ({
  backgroundColor: isDone ? "#e7fde4ff" : "#FFFFFF",
  padding: "0px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function TodoTask({ task, index }) {
  const {setTasks, tasks} = useContext(TodoContext)
  const todoTaskIsDone = () => {
    const updatedTasks = tasks.map((task, i) => {
    if (i === index) {
      return { ...task, isDone: !task.isDone };
    }
    return task;
  });

  setTasks(updatedTasks);
  }
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <Stack spacing={2}>
        <Item isDone={tasks[index].isDone}>
          <Typography variant="h5">{task.title}</Typography>
          <div>
            <Button variant="outlined" color="success" onClick={todoTaskIsDone}>
              {<DoneIcon />}
            </Button>
            <Button variant="outlined" style={{ margin: "15px" }}>
              {<EditIcon />}
            </Button>
            <Button variant="outlined" color="error">
              {<DeleteIcon />}
            </Button>
          </div>
        </Item>
      </Stack>
    </Box>
  );
}
