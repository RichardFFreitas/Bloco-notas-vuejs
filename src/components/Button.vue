<template>
    <button class="btn" @click="click">
        <i v-if="icon" :class="icon"></i>
        {{ text }}
    </button>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';


interface ButonIF {
    text: string;
    icon?: string;
    click?: () => void;
}

const props = defineProps<ButonIF>()

const { text, icon, click } = toRefs(props);
</script>

<style scoped>
.btn {
    cursor: pointer;
    background: #1295FD;
    color: #fafafa;
    border: none;
    padding: 15px;
    border-radius: 30px;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
}

.btn i {
    margin-right: 4px;
}
</style>