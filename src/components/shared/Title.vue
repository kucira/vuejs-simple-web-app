<template>
    <a-typography-title>{{ title }}</a-typography-title>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped></style>