<template>
    <div class="container">
        <header>
            <div class="title">
                {{ title }}
            </div>
            <i class="pi pi-times button-close" @click="$emit('close')"></i>
        </header>
    </div>
</template>


<style scoped>
.container{
    width: 100%;
}
header{
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 14px;
}

.button-close {
    color: #000000a9;
    cursor: pointer;
}

.title {
    color: #000000a9;
    font-size: 28px;
    font-weight: 700;
}
</style>



<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
interface TitleInterface {
    title: string,
}

const props = defineProps<TitleInterface>()

const { title } = toRefs(props);
</script>

