import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Button from "./components/Button";
import Trial from "./components/Trial";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Interview",
      day: "Feb 7th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 6th at 5:30pm",
      reminder: false,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="main-container">
      <div className="container">
        <Header />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks to show"
        )}
      </div>
      <Button text="hello" />
      <Trial name="Lindsey" color="red" />
      <br />
      <Trial name="Linda" color="blue" />
    </div>
  );
}

export default App;
