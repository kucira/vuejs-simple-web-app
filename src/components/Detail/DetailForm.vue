<template>
    <a-space direction="vertical" align="center" style="width: 100%">
        <a-image :width="200" :src="stateDetail.data.picture" />
        <a-typography-text>card name: {{ stateDetail.data.cardName }}</a-typography-text>
        <a-typography-text>price: {{ stateDetail.data.price }}</a-typography-text>
        <a-typography-text>email: {{ stateDetail.data.email }} </a-typography-text>
    </a-space>
</template>

<script setup lang="ts">
import { CardType } from '@/services/index.ts';
import { reactive } from 'vue';

const stateDetail = reactive<{
    data: CardType
}>({
    data: {
        cardName: "",
        email: "",
        key: new Date().getMilliseconds(),
        price: "",
        username: "",
        picture: "",
    }
});

</script>

<style scoped></style>