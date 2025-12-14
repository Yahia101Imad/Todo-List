import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import ModalEdit from "./ModalEdit";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import TasksProvider from "../Contexts/TodoContext";

const Item = styled(Paper)(() => ({
  backgroundColor: "#FFFFFF",
  padding: "0px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function TodoTask({ title, index }) {
  const { tasks, dispatch } = useContext(TasksProvider);

  const todoTaskIsDone = () => {
    dispatch({
      type: "todoTaskIsDone",
      payload: {
        index: index
      }
    })
  };

  const todoTaskDelete = () => {
    dispatch({
      type: "todoTaskDelete",
      payload: {
        index: index
      }
    })
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <ModalEdit
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        index={index}
      />
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        <Stack spacing={2}>
          <Item isDone={tasks[index].isDone}>
            <Typography variant="h5">{title}</Typography>
            <div>
              <Button
                variant="outlined"
                color="success"
                onClick={todoTaskIsDone}
              >
                {<DoneIcon />}
              </Button>
              <Button
                variant="outlined"
                style={{ margin: "15px" }}
                onClick={handleOpen}
              >
                {<EditIcon />}
              </Button>
              <Button variant="outlined" color="error" onClick={todoTaskDelete}>
                {<DeleteIcon />}
              </Button>
            </div>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
