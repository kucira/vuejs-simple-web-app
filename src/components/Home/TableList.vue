<template>
    <a-input-search style="margin-bottom: 24px;" placeholder="input card namne" enter-button @search="handleOnSearch" />
    <a-table :dataSource="stateTable.dataSearch" :columns="columns">
        <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'cardName'">
                <router-link :to="`/detail/${text}`">{{ text }}</router-link>
            </template>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { CardType, getCardList } from '@/services/index.ts';
import { reactive, onBeforeMount } from 'vue';

const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Card Name',
        dataIndex: 'cardName',
        key: 'cardName',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
];

const stateTable = reactive<{
    dataSearch: CardType[]
}>({
    dataSearch: [],
});

onBeforeMount(() => {
    const cardList: CardType[] = getCardList();
    stateTable.dataSearch = cardList;
});

const handleOnSearch = (searchValue: string) => {
    const filteredSearch = getCardList().filter((data) => {
        return data.cardName.toLowerCase().includes(searchValue.toLowerCase());
    });

    stateTable.dataSearch = filteredSearch;
}
</script>

<style scoped></style>