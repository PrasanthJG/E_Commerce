import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './page/Navbar';
import Sidebar from './page/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
