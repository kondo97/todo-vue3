import { useStore, ref } from "@nuxtjs/composition-api";

export default function useToggleDone() {
  const store = useStore();
  function toggleDone(index: number) {
    store.dispatch('todos/toggleDone', index)
  }
  return {
    toggleDone
  }
}
