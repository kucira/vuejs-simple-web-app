<template>
    <a-alert message="Success!" type="success" v-if="isSuccess" />
    <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed"
        :label-col="{ span: 24 }">
        <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your Username!' }]">
            <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Card Name" name="cardName"
            :rules="[{ required: true, message: 'Please input your Card name!' }]">
            <a-input v-model:value="formState.cardName" />
        </a-form-item>

        <a-form-item label="Price" name="price" :rules="[{ required: true, message: 'Please input your Price' }]">
            <a-input v-model:value="formState.price" />
        </a-form-item>

        <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your Email!' }]">
            <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item label="Picture" name="picture"
            :rules="[{ required: true, message: 'Please input your Picture Card!' }]">
            <a-input v-model:value="formState.picture" />
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit">Post</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { postCardData } from "@/services/index.ts";
import { reactive, ref } from "vue";

interface FormState {
    key?: number;
    username: string;
    cardName: string;
    price: number;
    email: string;
    picture: string;
}

const formState = reactive<FormState>({
    username: "",
    cardName: "",
    price: 0,
    email: "",
    picture: "",
});

const isSuccess = ref<boolean>(false);

const onFinish = (values: FormState) => {
    isSuccess.value = true;
    postCardData({
        ...values,
        key: new Date().getUTCMilliseconds(),
        price: values.price.toString(),
    });
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
    isSuccess.value = false;
    console.log("Failed:", errorInfo);
};
</script>
