import { useState } from "react";
import { useRecoilState } from "recoil";
import todoListAtom from "../recoil/atom/todoAtom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const [_, setTodoList] = useRecoilState(todoListAtom);

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
      <input type="text" value={inputValue} onChange={onChange} />
      <button className="add-btn" onClick={addTodoItem}>
        Add Task
      </button>
    </div>
  );
};

export default TodoItemCreator;
