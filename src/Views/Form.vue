<template>
    <div class="container">
        <form @submit.prevent="submit">
            <textarea class="textarea" v-model.trim="anotation.text" rows="7" cols="40"
                placeholder="Exp.: Ao ligar falar com Luiza"></textarea>

            <label for="valor" class="label">Potencial do négocio</label>
            <input id="valor" v-model="anotation.valor" placeholder="R$00,00" type="number" class="input-number input">


            <label for="category" class="label">Categorização</label>
            <select class="input" id="category" v-model="anotation.categorias">
                <option value="" disabled></option>
                <option>Importante</option>
                <option>Irrelevante</option>
                <option>Descartável</option>
            </select>

            <label for="date" class="label">Lembrete</label>
            <input id="date" v-model="anotation.data" placeholder="Selecione uma data" type="text"
                onfocus="this.type='date'" onblur="if (!this.value) this.type='text'" class="input">


            <div class="mt-5">
                <button class="ic-trash" @click.prevent="">
                    <i class="pi pi-trash"></i>
                </button>
                <Button text="Salvar" />
            </div>
        </form>
    </div>
</template>

<style>

.container {
    width: 100%;

}

form {
    margin: 22px;
    display: flex;
    flex-direction: column;
}

.textarea {
    border: none;
    border-radius: 7px;
    padding: 12px;
    font-size: 14px;
    outline: none;
}



.label {
    font-size: 16px;
    color: #0000006e;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
}

.input {
    padding: 18px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
}

.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.select {
    background: #ccc;
    font-size: 10px;
    padding: 4px;
}

.mt-5 {
    margin-top: 100px;
    display: inline-flex;
    justify-content: space-between;
}

.mt-5 .btn {
    width: 80%;
}

.ic-trash {
    background: red;
    width: 15%;
    border: none;
    border-radius: 100px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.ic-trash i {
    font-size: 25px;
}
</style>

<script lang="ts">
import Button from '../components/Button.vue';
import api from '../services/api'


import { defineComponent } from 'vue';
// import { useRouter } from 'vue-router';

// const route = useRouter();



export default defineComponent({
    components:{
        Button,
    },
    data(){
        return {
            anotation:{
                text:'',
                valor:0,
                categorias:'',
                data:'',
            },
        };
    },
    methods: {
        async submit() {
            try {
                await api.post('/notes', this.anotation)

                this.limpar();
            } catch(error) {
                console.log(error)
            }
        },

        limpar() {
        this.anotation.text = '';
        this.anotation.valor = 0;
        this.anotation.categorias = '';
        this.anotation.data = '';
        },
    },
});


</script>


