<template>
    <a-layout>
        <a-layout-header :style="headerStyle">
            <Title title="Pokemon Card Store" />
        </a-layout-header>
        <a-layout-content :style="contentStyle">
            <slot name="content"></slot>
        </a-layout-content>
    </a-layout>
</template>

<script setup lang="ts">
const headerStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
    height: '100px',
};

const contentStyle = {
    backgroundColor: 'white',
};
</script>