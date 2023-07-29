<template>
    <a-space direction="vertical" align="center" style="width: 100%">
        <a-image :width="200" :src="stateDetail.data.picture" />
        <a-typography-text>card name: {{ stateDetail.data.cardName }}</a-typography-text>
        <a-typography-text>price: {{ stateDetail.data.price }}</a-typography-text>
        <a-typography-text>email: {{ stateDetail.data.email }} </a-typography-text>
    </a-space>
</template>

<script setup lang="ts">
import { CardType, getCardListByCardName } from '@/services/index.ts';
import { onBeforeMount, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

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

onBeforeMount(() => {
    const card: CardType = getCardListByCardName(route.params.id as string);
    if (!card) {
        router.push({ name: 'not-found' });
        return;
    }
    stateDetail.data = {
        ...card,
    }

});
</script>

<style scoped></style>
