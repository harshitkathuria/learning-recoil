import { selector } from "recoil";
import { todoListFilterState, todoListState } from "../atom/todoAtom";

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todoList = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return todoList.filter(todoitem => todoitem.isComplete);
      case "Show Uncompleted":
        return todoList.filter(todoitem => !todoitem.isComplete);
      default:
        return todoList;
    }
  }
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    };
  }
});
