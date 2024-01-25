<template>
    <!-- Conteúdo com barra lateral -->
    <div v-if="isDesktopRef">
        <div class="container">
            <PaperClip />
        </div>


        <div class="notes">
            <aside class="barra-lateral">
                <div class="cards">
                    <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                    <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                    <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                </div>
                <div class="noteplus">
                    <Button class="lateral-button" text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
                </div>
            </aside>
        </div>
    </div>
    <!-- Conteúdo sem barra lateral -->
    <div>
        <div class="container" v-if="!isDesktopRef">
            <div class="notes">
                <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                <Card text="Exp:. Ao ligar falar com luiza" data="20/08/2001" />
                <div class="noteplus">
                    <Button text="Criar anotação" icon="pi pi-plus" :onClick="proximaTela" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    color: black;
    width: 100%;
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.barra-lateral {
    z-index: -1;
    position: absolute;
    top: 0;
    width: 350px;
    height: 100%;
    background-color: #797979;
}

.cards {
    margin-top: 55px;
}

.noteplus {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35rem;
}

@media (max-width: 767px) {
    .container {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .noteplus {
        position: absolute;
        bottom: 14px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .btn {
        width: 380px;
    }


}
</style>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

import PaperClip from '../components/Paperclip.vue';
import Card from '../components/Card.vue';
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