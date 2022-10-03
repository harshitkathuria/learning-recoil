import React from "react";
import { useRecoilValue } from "recoil";
import todoListAtom from "../recoil/atom/todoAtom";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoMain = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div className="parent-container">
      <div>
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
