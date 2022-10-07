import { useEffect, useMemo, useState } from "react"

import { Form } from './components/Form'
import { Input } from "./components/Input"
import { Tasks } from './components/Tasks'

import styles from './styles/app.module.css'

const LOCALSTORAGE_TASKS_KEY = 'todolist-tasks'

export function App() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTaskName, setSearchTaskName] = useState('')

  const onAddTask = (newTask) => {
    setTasks(currentState => [...currentState, newTask])
    setSearchTaskName('')
  }

  const onRemoveTask = (taskId) => {
    setTasks(currentState => currentState.filter(task => task.id !== taskId))
  }

  const onChangeCompleted = (taskId) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    const updatedTask = [...tasks]
    updatedTask[taskIndex].completed = !updatedTask[taskIndex].completed
    
    setTasks(updatedTask)
  }

  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(tasks))
    }
  }, [tasks])

  useEffect(() => {
    const tasksLocal = localStorage.getItem(LOCALSTORAGE_TASKS_KEY)
    tasksLocal && setTasks(JSON.parse(tasksLocal))
    setIsLoading(false)
  }, [])

  const handleTermSearch = (e) => {
    const valueTerm = e.target.value.toLocaleLowerCase()
    setSearchTaskName(valueTerm)
  }

  const totalTasks = useMemo(() => {
    return tasks.length
  }, [tasks])

  const totalCompletedTasks = useMemo(() => {
    return tasks.filter(task => task.completed).length
  })

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>TO DO LIST</h1>

        <Form onSubmit={onAddTask} />

        <hr />

        <Input
          type="text"
          value={searchTaskName}
          onChange={handleTermSearch}
          placeholder="Поиск..."
        />

        <Tasks
          tasks={tasks}
          searchTaskName={searchTaskName}
          onRemoveTask={onRemoveTask}
          onChangeCompletedTask={onChangeCompleted}
        />

        <footer className={styles.footer}>
          <h6>
            Всего дел:
            <span>{totalTasks}</span>
          </h6>

          <h6>
            Выполненых дел:
            <span>{totalCompletedTasks}</span>
          </h6>
        </footer>
      </div>

    </div>
  )
}