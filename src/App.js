import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      taskName: 'Study and review Javascript DOM',
      remarks: 'Very Easy'
    },
    {
      id: 2,
      checked: false,
      taskName: 'Study react router',
      remarks: 'A bit challenging but fun'
    },
    {
      id: 3,
      checked: false,
      taskName: 'Disect and Javascript Data Structure and Algorithm',
      remarks: 'It was challenging at first'
    }
  ]);

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskRemarks, setNewTaskRemarks] = useState('');

  const handleNewTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleNewTaskRemarksChange = (event) => {
    setNewTaskRemarks(event.target.value);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() === '') {
      alert('Please enter a task name');
      return;
    }
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        checked: false,
        taskName: newTaskName,
        remarks: newTaskRemarks
      }
    ]);
    setNewTaskName('');
    setNewTaskRemarks('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTaskChecked = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            checked: !task.checked
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="container my-4">
      <h1>My Todo List</h1>
      <div className="mb-3">
  <label htmlFor="new-task-name" className="form-label">
    Task Name
  </label>
  <input
    type="text"
    className="form-control"
    id="new-task-name"
    value={newTaskName}
    onChange={handleNewTaskNameChange}
  />
</div>

      <div className="mb-3">
        <label htmlFor="new-task-remarks" className="form-label">
          Remarks
        </label>
        <textarea
          className="form-control"
          id="new-task-remarks"
          rows="3"
          value={newTaskRemarks}
          onChange={handleNewTaskRemarksChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
      <table className="table mt-3">
      <thead>
  <tr>
    <th></th>
    <th>Task Name</th>
    <th>Remarks</th>
    <th></th>
  </tr>
</thead>

    <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleToggleTaskChecked(task.id)}
            />
          </td>
          <td>{task.taskName}</td>
          <td>{task.remarks}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(task.id)}
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
}

export default App;
