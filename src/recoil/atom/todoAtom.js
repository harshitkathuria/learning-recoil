import { atom } from "recoil";

const todoListAtom = atom({
  key: "todoListState",
  default: []
});

export default todoListAtom;
