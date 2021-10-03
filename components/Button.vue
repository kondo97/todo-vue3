<template>
  <button>{{ name }}</button>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
</script>

<style>
  button {
    color: #fff;
    background: grey;
  }
</style>