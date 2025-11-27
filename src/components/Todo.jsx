import Container from "@mui/material/Container";
import TodoList from "./TodoList";
import AddTask from "./AddTask";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Todo() {
  return (
    <Container maxWidth="sm">
      <Card>
        <div style={{ textAlign: "center"}}>
          <CardContent>
            <Typography variant="h2">Todo</Typography>
          </CardContent>
          <hr style={{ width: "80%" }} />
          <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
            <ToggleButton value="web">All</ToggleButton>
            <ToggleButton value="android">Done</ToggleButton>
            <ToggleButton value="ios">Current</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div style={{ padding: "10px" }}>
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
        <div style={{ padding: "10px" }}>
          <AddTask />
        </div>
      </Card>
    </Container>
  );
}
