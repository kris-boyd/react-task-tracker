import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Wednesday',
        reminder: true,
    },
    {
        id: 2,
        text: 'meeting at school',
        day: 'Feb 6 at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping for food',
        day: 'Feb 7 at 7:30pm',
        reminder: false,
    },
])

// Add Task

const addTask = (task) => {
  console.log(task)
}


// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
     <Header title='Tasks'/>
     <AddTask onAdd={addTask} />
     {tasks.length > 0 ? (<Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/>)
     : ( 'No tasks to show')}
    </div>
  );
}

export default App;
