<template>
    <div>
        <div class="container" v-if="anotations.length <= 0">
            <Logo />
            <Button text="Criar anotação" icone="pi pi-plus" :onClick="proximaTela" />
        </div>
    </div>

    <div class="anotations" v-if="anotations.length >= 1">
        <Card :anotations="anotations" />
        <div class="noteplus">
            <Button text="Criar anotação" icone="pi pi-plus" :onClick="proximaTela"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Logo from '../components/Logo.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import api from '../services/api';
const route = useRouter();

const proximaTela = () => {
    route.push({ path: '/form' })
}

interface AnotationInterface {
    id: number | string,
    text: string,
    valor?: number,
    categoria?: string,
    data: string
}

const anotations = ref<AnotationInterface[]>([]);


const getAnotation = async () => {
    const response = await api.get('/anotations')
    anotations.value = response.data;
}

onMounted(getAnotation);


</script>


<style scoped>
.container {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
}

.noteplus {
    margin-top: 80px;
}
</style>