import React from "react";
import { useRecoilState } from "recoil";
import todoListAtom from "../recoil/atom/todoAtom";
import "./todo.css";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex(listItem => listItem === item);

  const replaceItemAtIndex = (index, newTodo) => {
    return [...todoList.slice(0, index), newTodo, ...todoList.slice(index + 1)];
  };

  const deleteItemAtIndex = index => {
    return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
  };

  const editTodo = e => {
    const newList = replaceItemAtIndex(index, {
      ...item,
      text: e.target.value
    });
    setTodoList(newList);
  };

  const deleteTodo = () => {
    const newList = deleteItemAtIndex(index);
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(index, {
      ...item,
      isComplete: !item.isComplete
    });
    setTodoList(newList);
  };

  return (
    <div className="todo-item-container">
      <input
        className={
          item.isComplete.toString() === "true" ? "complete" : "not-complete"
        }
        type="text"
        value={item.text}
        onChange={editTodo}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button className="del-btn" onClick={deleteTodo}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
