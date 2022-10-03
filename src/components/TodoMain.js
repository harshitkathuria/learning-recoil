import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/selectors/todoSelector";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoItemFilter from "./TodoItemFilter";
import "./todo.css";
import TodoListStats from "./TodoListStats";

const TodoMain = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="parent-container">
      <div>
        <TodoItemFilter />
        <TodoListStats />
        <TodoItemCreator />
        {todoList.length > 0 && <h3>Todo List</h3>}
        {todoList.length > 0 && (
          <div className="todos-list">
            {todoList.map(todoItem => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoMain;
