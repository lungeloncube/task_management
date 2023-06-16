import logo from './logo.svg';
import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Task task={{ title: "Task 1", description: "Description 1", id: 1 }} />
      </header>
    </div>
  );
}

export default App;
