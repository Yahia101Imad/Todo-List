export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
        const newTask = {
        id: Date.now(),
        title: action.payload.title,
        isDone: false
      }
      const updatedTasks = [...tasks, newTask]
      return updatedTasks
    }
    default:
      return tasks;
  }
}