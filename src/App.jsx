import "./App.css";
import { TodoWrapperLocalStorage } from "./components/TodoWrapper";

function App() {
  return (
    <div className="flex justify-center h-screen py-20 bg-gradient-to-r from-blue-200 to-cyan-200">
      <TodoWrapperLocalStorage />
    </div>
  );
}

export default App;
