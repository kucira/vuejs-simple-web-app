<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count  = ref<number>(0);

const handleOnClick = (event: Event) => {
  console.log(event);
  count.value++;
}

</script>

<template>
  <a-space wrap>
    <a-button @click="handleOnClick" type="primary">
      {{ msg }} {{ count }}
    </a-button>
  </a-space>
</template>