<template>
  <div class="container">
    <h1>CompositionAPIを用いて作成しました。</h1>
    <p>試したこと</p>
    <ul>
      <li>ロジックと状態の切り出し</li>
      <li>vuexの使用</li>
      <li>typescriptの使用</li>
      <li>コンポーネントとprops</li>
    </ul>
    <input v-model="newTodo" type="text" />
    <span @click="addNewTodo">
      <Button :name="registration" />
    </span>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.index">
        <input @change="toggleDone(index)" type="checkbox" />
        <p :class="{ done: todo.done }">{{ todo.content }}</p>
        <div>
          <span @click="deleteTodo(index)">
            <Button :name="deletion" />
          </span>
          <span @click="editTodo(todo.id)">
            <Button :name="edit" />
          </span>         
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  computed,
  useStore,
  defineComponent,
  useRouter,
  ref,
} from "@nuxtjs/composition-api";
import useNewTodo from "@/composables/use-newTodo";
import useToggleDone from "@/composables/use-toggleDone";
import useDeleteTodo from "@/composables/use-deleteTodo";
import Button from "@/components/Button.vue";
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    //storeを参照
    const store = useStore();
    const router = useRouter();
    // todo追加の処理
    const { newTodo, addNewTodo } = useNewTodo();
    // todoの完了未完了を切り替え
    const { toggleDone } = useToggleDone();
    //todoを削除
    const { deleteTodo } = useDeleteTodo();
    //todoの編集画面へ遷移
    function editTodo(id: string) {
      router.push(`/${id}`);
    }
    //todosのデータを返す。
    const todos = computed(() => store.getters["todos/todos"]);
    //Buttonコンポーネントに値を渡す。
    const registration = ref("登録");
    const deletion = ref("削除")
    const edit = ref("編集")
    return {
      newTodo,
      addNewTodo,
      todos,
      toggleDone,
      deleteTodo,
      editTodo,
      registration,
      deletion,
      edit
    };
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 60%;
}

li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
}

li p {
  width: 60%;
}

.done {
  text-decoration: line-through;
}

button {
  cursor: pointer;
}
</style>
