<template>
    <!-- Conteúdo com barra lateral -->
    <div>
        <div class="container" v-if="anotations.length <= 0 && isDesktopRef">
            <PaperClip />
            <Button text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
        </div>
    </div>

    <div class="anotations" v-if="anotations.length >= 1 && isDesktopRef">
        <aside>
            <Card :anotations="anotations" />
            <div class="noteplus">
                <Button text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
            </div>
        </aside>
    </div>
    <!-- Conteúdo sem barra lateral -->
    <div>
        <div class="container" v-if="anotations.length <= 0 && !isDesktopRef">
            <PaperClip />
            <Button text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
        </div>
    </div>

    <div class="anotations" v-if="anotations.length >= 1 && !isDesktopRef">
        <Card />
        <div class="noteplus">
            <Button text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
        </div>
    </div>
</template>


<style scoped>
.container {
    width: 100%;

}



@media (max-width: 767px) {
    .container {
        width: 100%;
        margin-top: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .noteplus {
        margin-top: 80px;
    }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

import PaperClip from '../components/Paperclip.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import api from '../services/api';

const route = useRouter();
const anotations = ref([]);

const proximaTela = () => {
    route.push({ path: '/form' });
};

const fetchAnotations = async () => {
    try {
        const response = await api.get('/anotations');
        anotations.value = response.data;
    } catch (error) {
        console.error('Erro ao buscar anotações:', error);
    }
};

const setupResizeListener = () => {
    const isDesktop = () => window.innerWidth >= 768;
    const isDesktopRef = ref(isDesktop());

    const handleResize = () => {
        isDesktopRef.value = isDesktop();
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });

    return isDesktopRef;
};

const isDesktopRef = setupResizeListener();

onMounted(fetchAnotations);
</script>