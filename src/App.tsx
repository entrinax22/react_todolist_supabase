import { useEffect, useState } from 'react'
import supabase from './Supabase-client'
import './App.css'


function App() {
  const [name, setName] = useState('')
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([{ id: 0, name: '', task: '', isCompleted: false }])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setTask(event.target.value)
    }
  }

  async function handleSubmit() {
    if (!name || !task) return
    const { data, error } = await supabase.from('TodoList').insert([{ name, task }]).select()
    if (error) {
      setMessage('Error inserting task')
    } else {
      setTasks([...tasks, ...data])
      setName('')
      setTask('')
      setMessage('Task inserted successfully')
    }
  }
  
  async function fetchTasks() {
    setLoading(true)
    setError('')
    const { data, error } = await supabase.from('TodoList').select()
    if (error) {
      setError('Error fetching tasks')
      setMessage('Error fetching tasks')
    } else {
      setTasks(data)
      setMessage('Tasks fetched successfully')
    }
    setLoading(false)
  }
  
  async function handleClickComplete(id: number) {
    const {error } = await supabase.from('TodoList').update({ isCompleted: true }).match({ id })
    if (error) {
      setMessage(message)
    } else {
      setMessage(message)
      setTasks(tasks.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: true }
        }
        return task
      }))
    }
  }

  async function handleClickUndo(id: number) {
    const {error } = await supabase.from('TodoList').update({ isCompleted: false }).match({ id })
    if (error) {
      setMessage(message)
    } else {
      setMessage(message)
      setTasks(tasks.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: false }
        }
        return task
      }))
    }
  }
  
  async function handleClickDelete(id: number) {
    const { error } = await supabase.from('TodoList').delete().match({ id })
    if (error) {
      setMessage('Error deleting task')
    } else {
      setTasks(tasks.filter(task => task.id !== id))
      setMessage('Task deleted successfully')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">TODO List</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Add Task</h2>
          <input 
            type="text" 
            name="name" 
            value={name} 
            placeholder="Write your name here..." 
            onChange={onChange} 
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          />
          <input 
            type="text" 
            name='task' 
            value={task} 
            placeholder="Write a task here..." 
            onChange={onChange} 
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          />
          <button 
            type='button' 
            onClick={handleSubmit} 
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div>
          {loading ? <p className="text-center text-gray-500">Loading...</p> : null}
          {error ? <p className="text-center text-red-500">{error}</p> : null}
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li key={index} className="p-4 bg-gray-100 border border-gray-200 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900">{task.name}</h3>
                <p className="text-gray-700">{task.task}</p>
                <div className="flex space-x-2 mt-2">
                  {task.isCompleted ? 
                    <button 
                      onClick={() => handleClickUndo(task.id)} 
                      className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Undo Task
                    </button> 
                    : 
                    <button 
                      onClick={() => handleClickComplete(task.id)} 
                      className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Complete Task
                    </button>
                  }
                  <button 
                    onClick={() => handleClickDelete(task.id)} 
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-900">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default App
