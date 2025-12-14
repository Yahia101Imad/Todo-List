import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import TasksProvider from "../Contexts/TodoContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "5px solid #317bd5ff",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit({ open, handleClose, index }) {
  const { tasks, dispatch } = useContext(TasksProvider);
  const [editedTitle, setEditedTitle] = useState(tasks[index].title);

  const submitTaskEdit = () => {
    dispatch({
      type: "submitTaskEdit",
      payload: {
        index: index,
        editedTitle: editedTitle,
      },
    });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "5px" }}
          >
            Edit the task title
          </Typography>
          <TextField
            id="standard-basic"
            label="Task title"
            variant="standard"
            sx={{ width: "100%", marginTop: "10px" }}
            value={editedTitle}
            onChange={(e) => {
              setEditedTitle(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onClick={submitTaskEdit}
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
