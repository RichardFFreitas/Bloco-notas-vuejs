<template>
    <div>
        <div class="card">
            <Modal :show="isOpen"  @close="isOpen = !isOpen" />
            <i class="pi pi-paperclip paperClip"></i>
            <div class="text-card">
                <p>Exp:. Ao ligar falar com Luiza</p>
                <span>11/10/2023 - 13:37h</span>
            </div>
            <i class="pi pi-trash card-del" @click="openModal"></i>
        </div>
    </div>
</template>

<script setup lang="ts">

import Modal from './Modal.vue';
import { ref } from 'vue';

const isOpen = ref(false);

const openModal = () => {
    isOpen.value = !isOpen.value;
}


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
    width: 85%;
    margin-left: 12px;
}

.paperClip {
    transform: scale(-1);
    margin-right: 12px;
    color: #797979;
}

.text-card {
    display: flex;
    flex-direction: column;
    color: #797979;
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