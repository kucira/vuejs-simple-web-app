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
import { CardType } from '@/services/index.ts';
import { reactive } from 'vue';

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


const handleOnSearch = (searchValue: string) => {
    console.log(searchValue);
}
</script>

<style scoped></style>