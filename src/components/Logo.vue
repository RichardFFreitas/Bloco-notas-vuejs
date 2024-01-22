<template>
    <div>
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
.paperclip {
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 12px;
}

.icon-paperclip i {
    color: #B7BBBE;
    font-size: 45px;
    transform: scale(-1);
}

.text-paperclip {
    font-size: 22px;
    font-weight: 800;
    color: #1295FD;
    display: inline-grid;
    justify-items: center;
    gap: 5px;

}

.text-paperclip span {
    font-size: 12px;
    color: #B7BBBE;
    font-weight: 500;
}
</style>