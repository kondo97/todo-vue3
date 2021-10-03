<template>
  <div>
    <input type="text" v-model="initialValue" />
    <button @click="updateTodo">保存</button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ref,
  useStore,
  defineComponent,
  useRouter,
  useRoute,
  onMounted
} from "@nuxtjs/composition-api";
interface Item {
  id: string;
  done: boolean;
  content: string;
}
export default defineComponent({
  setup() {
    //storeを参照
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    //パラメーターを取得
    const id = computed(() => route.value.params.id);
    //初期値を取得
    let initialValue = ref<string>("");
    let initialValueIndex: number = store.getters["todos/todos"].findIndex((v: Item) => v.id === id.value)
    onMounted(() => {
      initialValue.value = store.getters["todos/todos"][initialValueIndex].content
    })
    //変更を保存
    function updateTodo() {
      const editedValue = initialValue.value
      store.dispatch('todos/updateTodo', {initialValueIndex, editedValue})
      router.push('/')
    }
    return {
      initialValue,
      updateTodo
    };
  },
});
</script>