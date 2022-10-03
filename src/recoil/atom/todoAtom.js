import { atom } from "recoil";

export const todoListState = atom({
  key: "TodoListState",
  default: []
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All"
});
