<template>
    <div>
      <div class="Modal" v-show="props.show">
        <div class="header-modal">
          Deseja excluir esta anotação
          <i class="pi pi-times" @click="$emit('close')"></i>
        </div>
  
        <div class="body-pop">
          <p>Você está preste a deletar uma anotação e esta ação não poderá ser desfeita.<br />
            Tem certeza que deseja excluí-la?
          </p>
        </div>
  
        <div class="pop-foo">
          <button class="outline" @click="$emit('close')">
            Cancelar
          </button>
          <button class="btn-delete" >
            Excluir
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  

  
  
  
  const props = defineProps({
    show: Boolean,
    deletenote: {
      required: true,
      type: [Number, String,]
    }
  });
  
  </script>
  
  <style scoped>
  .Modal{
    position: fixed;
    background: #fff;
    width: 50%;
    top: 30%;
    left: 30%;
    z-index: 9;
  }
  
  .header-modal {
    display: flex;
    color: black;
    justify-content: space-between;
    border-bottom: 1px solid #797979;
    padding: 20px 12px;
  }
  
  .header-pop i {
    color: #797979;
    cursor: pointer;
  }
  
  .body-pop {
    padding: 12px;
    color: #797979;
    font-size: 14px;
  }
  
  .pop-foo {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 15px;
    padding: 12px;
    margin-top: 18px;
  }

  .btn-delete{
    color: #fff;
    background: red;
    padding: 15px;
    border-radius: 30px;
    font-size: 14px;
    cursor: pointer;
    border: none;
  }
  
  .outline {
    color: #797979;
    background: #fff;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 30px;
    font-size: 14px;
    cursor: pointer;
  }
  
  
  </style>