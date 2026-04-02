import "./App.css";
import Header from "./Header.jsx";
import TaskList from "./TaskList.jsx";

function App() {
  const tasks = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Read React docs" },
    { id: 3, title: "Build Taskify" },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
