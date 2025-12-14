export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        isDone: false,
      };
      const updatedTasks = [...tasks, newTask];
      return updatedTasks;
    }

    case "submitTaskEdit": {
      const updatedTasks = tasks.map((task, i) =>
        i === action.payload.index
          ? { ...task, title: action.payload.editedTitle }
          : task
      );
      return updatedTasks;
    }

    case "todoTaskIsDone": {
      const updatedTasks = tasks.map((task, i) => {
        if (i === action.payload.index) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      return updatedTasks;
    }

    case "todoTaskDelete": {
      const updatedTasks = tasks.filter((task) => {
        return tasks[action.payload.index].id !== task.id;
      });
      return updatedTasks;
    }

    default:
      return tasks;
  }
}
