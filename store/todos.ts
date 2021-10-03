import { getterTree, mutationTree, actionTree } from "typed-vuex";

interface Item {
  id: string;
  done: boolean;
  content: string;
}

export const state = () => ({
  todos: [] as Item[]
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  todos: state => state.todos
});

export const mutations = mutationTree(state, {
  addNewTodo(state, todo: Item) {
    state.todos.push(todo);
  },
  toggleDone(state, index: number) {
    state.todos[index].done = !state.todos[index].done;
  },
  deleteTodo(state, index: number) {
    state.todos.splice(index, 1);
  },
  updateTodo(state, { initialValueIndex, editedValue }) {
    state.todos[initialValueIndex].content = editedValue
    state.todos[initialValueIndex].done = false
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    addNewTodo({ commit }, todo: Item) {
      commit("addNewTodo", todo);
    },
    toggleDone({ commit }, index: number) {
      commit("toggleDone", index);
    },
    deleteTodo({ commit }, index: number) {
      commit("deleteTodo", index);
    },
    updateTodo({ commit }, { initialValueIndex, editedValue }) {
      commit("updateTodo", { initialValueIndex, editedValue });
    }
  }
);
