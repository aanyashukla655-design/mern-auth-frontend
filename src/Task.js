import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_TASKS_URL, CREATE_TASK_URL, DELETE_TASK_URL } from "./api";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(GET_TASKS_URL);
      setTasks(res.data);
    } catch (err) {
      console.log("Failed to fetch tasks:", err);
    }
  };

  const addTask = async () => {
    if (!newTask) return;
    try {
      await axios.post(CREATE_TASK_URL, { task: newTask });
      setNewTask("");
      fetchTasks();
    } catch (err) {
      console.log("Failed to add task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(DELETE_TASK_URL(id));
      fetchTasks();
    } catch (err) {
      console.log("Failed to delete task:", err);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.task}{" "}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
