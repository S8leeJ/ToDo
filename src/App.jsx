import { useState } from "react";
import "./styles.css";
//class is reserved this is the class styling for our form\
//htmlfor makes the label bring you to the "item" which is the textbox
//use a fragment (empty tag because you can only have one element)
export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, complete: false },
    ]);
    setNewItem("");

  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return{ ...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteToDo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id!==id)
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            //getting the value and updating useState
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key = {todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}
                onChange={e => toggleTodo(togo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button onClick = {() => deleteToDo(todo.id)}
              className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
