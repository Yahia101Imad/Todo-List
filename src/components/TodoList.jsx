import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(() => ({
  backgroundColor: "#FFFFFF",
  padding: "0px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function TodoList() {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        <Stack spacing={2}>
          <Item>
            <Typography variant="h5">My task here</Typography>
            <div>
              <Button variant="outlined" color="success">
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
    </>
  );
}
