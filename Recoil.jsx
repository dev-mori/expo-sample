import { nanoid } from "nanoid/non-secure";
import { atom, selector } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: [],
});

export const todosList = selector({
  key: "todosList",
  get: ({ get }) => {
    const text = get(todosState);
    return text;
  },
});
