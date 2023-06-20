import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';


function App() {

  
  const task = {id: '123', title: 'Mrs', description: 'Female'};
  return (
    <div className="App">
      <header className="App-header">

      <TaskList />

      </header>
    </div>
  );
}

export default App;
