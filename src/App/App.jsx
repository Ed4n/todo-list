import { TodoProvider } from "../context/TodoContext.jsx";
import AppUI from "./AppUI.JSX";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
