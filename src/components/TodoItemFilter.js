import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/atom/todoAtom";

const TodoItemFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoItemFilter;
