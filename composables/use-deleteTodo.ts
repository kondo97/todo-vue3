import { useStore, ref } from "@nuxtjs/composition-api";

export default function useDeleteTodo() {
  const store = useStore();
  function deleteTodo(index: number) {
    store.dispatch('todos/deleteTodo', index)
  }
  return {
    deleteTodo
  }
}
