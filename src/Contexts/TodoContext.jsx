import { useReducer} from 'react'
import tasksReducer from '../Reducers/TasksReducer'

export default function TasksProvider({children}) {
    const [tasks, dispatch] = useReducer(tasksReducer, [])
    return (
        <TodoContext.Provider value={{tasks, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}