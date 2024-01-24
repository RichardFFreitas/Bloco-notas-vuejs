<template>
    <div>
        <div class="card" v-for="anotation in props.anotations" :key="anotation.id">
            <Modal :show="isOpen" :deletenote="anotation.id" @close="isOpen = !isOpen" />
            <i class="pi pi-paperclip paperClip"></i>
            <div class="text-card">
                <p>{{ anotation.text }}</p>
                <span>{{ anotation.data }}</span>
            </div>
            <i class="pi pi-trash card-del" @click="openModal"></i>
        </div>
    </div>
</template>

<script setup lang="ts">

import Modal from './Modal.vue';
import { defineProps, PropType, ref } from 'vue';

const isOpen = ref(false);

const openModal = () => {
    isOpen.value = !isOpen.value;
}



interface AnotationIF {
    id: number | string,
    text: string,
    valor?: number,
    categoria?: string,
    data: string
}

const props = defineProps({
    anotations: {
        type: Array as PropType<AnotationIF[]>
    }
})

</script>

<style scoped>
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
}

.paperClip {
    transform: scale(-1);
}

.text-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
    width: 250px;
    margin-right: 55px;
}

.text-card p {
    text-decoration: underline;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.text-card>span {
    font-size: 12px;
    color: #ccc;
}

.card-del {
    cursor: pointer;
    color: red;
}
</style>