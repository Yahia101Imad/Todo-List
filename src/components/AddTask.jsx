import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddTask() {
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
      >
        Add
      </Button>
      <TextField
        id="outlined-basic"
        label="Task title"
        variant="outlined"
        sx={{ width: "78%" }}
      />
    </Box>
  );
}
