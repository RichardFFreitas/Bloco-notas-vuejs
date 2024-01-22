<template>
    <div class="title">
        {{ title }}
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
interface TitleInterface {
    title: string,
}

const props = defineProps<TitleInterface>()

const { title } = toRefs(props);
</script>

<style scoped>
.title{
    margin: 20px 12px;
    font-size: 16px;
    font-weight: 500;
}
</style>