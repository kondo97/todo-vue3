import { useStore, ref } from "@nuxtjs/composition-api";

interface Item {
  id: string;
  done: boolean;
  content: string;
}

export default function useNewTodo() {
  const store = useStore();
  let newTodo = ref<string>("");
  function addNewTodo() {
    const todo: Item = {
      id: Math.random().toString(32).substring(2),
      done: false,
      content: newTodo.value
    };
    store.dispatch("todos/addNewTodo", todo);
    newTodo.value = "";
  }

  return {
    newTodo,
    addNewTodo
  };
}
