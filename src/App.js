import "./App.css";
import AddToForm from "./components/AddToForm/AddToForm";
import TodoList from "./components/TodoList/TodoList";
import Container from "./Container/Container";
import Modal from "./components/Modal/Modal";
import UpdateModal from "./components/UpdateModal/UpdateModal";
import CreateModal from "./components/CreateModal/CreateModal";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddToForm />
        <TodoList />
      </Container>
      <Modal />
      <UpdateModal />
      <CreateModal />
      <div
        style={{
          backgroundColor: "rgb(245, 245, 245)",
          padding: " 3px 0",
          textAlign: "center",
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
        }}
      >
        <p>React Todo-App by @Abeer Sabry</p>
      </div>
    </div>
  );
}

export default App;
