import "../css/index.css";
import { Header } from "./Header";
import { TodoList } from "./TodoList";

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
    </>
  );
}

export default App;
