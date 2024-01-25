<template>
    <!-- Conteúdo com barra lateral -->
    <div v-if="isDesktopRef">
        <div class="container">
            <PaperClip />
        </div>


        <div class="notes">
            <aside class="barra-lateral">
                <div class="noteplus">
                    <Button class="lateral-button" text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
                </div>
            </aside>
        </div>
    </div>
    <!-- Conteúdo sem barra lateral -->
    <div v-if="!isDesktopRef">
        <div class="container">
            <PaperClip />
            <Button text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
        </div>
    </div>
</template>


<style scoped>
.container {
    width: 100%;
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.noteplus{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50rem;
}


.barra-lateral{
    z-index: -1;
    position: absolute;
    top: 0;
    width: 350px;
    height: 100%;
    background-color: #797979;
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
import Button from '../components/Button.vue';



const route = useRouter();


const proximaTela = () => {
    route.push({ path: '/form' });
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


</script>