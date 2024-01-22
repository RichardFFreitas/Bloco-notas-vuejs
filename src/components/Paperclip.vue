<template>
    <div class="container">
        <div class="paperclip">
            <div class="icon-paperclip">
                <i class="pi pi-paperclip"></i>
            </div>
            <div class="text-paperclip">
                Anotações
                <span>by Speedio</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.paperclip {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 12px;
}

.icon-paperclip i {
    color: #B7BBBE;
    font-size: 48px;
    transform: scale(-1);
}

.text-paperclip {
    font-size: 28px;
    font-weight: 800;
    color: #1295FD;
    display: inline-grid;
    justify-items: center;
}

.text-paperclip span {
    font-size: 12px;
    color: grey;
    font-weight: 500;
    margin-bottom: 24px;
}
</style>