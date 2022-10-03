import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atom/todoAtom";
import "./todo.css";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const addTodoItem = () => {
    if (inputValue) {
      setTodoList(oldTodoList => [
        ...oldTodoList,
        {
          id: oldTodoList.length + 1,
          text: inputValue,
          isComplete: false
        }
      ]);

      setInputValue("");
    }
  };

  return (
    <div className="todo-creator">
      <input
        placeholder="Add Todo Item"
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button className="add-btn" onClick={addTodoItem}>
        Add Task
      </button>
    </div>
  );
};

export default TodoItemCreator;
