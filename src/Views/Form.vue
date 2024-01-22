<template>
    <div>
        <form @submit.prevent="submit">
            <textarea class="textarea" v-model.trim="anotation.text" rows="7" cols="40"
                placeholder="Exp.: Ao ligar falar com Luiza"></textarea>

            <label for="valor" class="label">Potencial do négocio</label>
            <input id="valor" v-model="anotation.valor" placeholder="R$00,00" type="number" class="input-number input">


            <label for="category" class="label">Categorização</label>
            <select class="input" id="category" v-model="anotation.categoria">
                <option value="" disabled></option>
                <option>importante</option>
                <option>irrelevante</option>
                <option>descartável</option>
            </select>

            <label for="date" class="label">Lembrete</label>
            <input id="date" v-model="anotation.data" placeholder="Selecione uma data" type="date" class="input">


            <div class="mt-5">
                <button class="ic-trash" @click.prevent="limpar">
                    <i class="pi pi-trash"></i>
                </button>
                <Button text="Salvar" />
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue';
import api from '../services/api'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter();

const anotation = ref({
    text: '',
    valor: '',
    categoria: '',
    data: ''
});

const limpar = () => {
    anotation.value.text = '';
    anotation.value.valor = '';
    anotation.value.categoria = '';
    anotation.value.data = '';
};

const submit = async () => {
    try {
        await api.post("/anotations", anotation.value);
        limpar();
        route.push({ path: '/' });
    } catch (error) {
        alert('Falha ao salvar a anotação. Por favor, tente novamente.');
    }
};
</script>


<style>
form {
    display: flex;
    flex-direction: column;
}

.textarea {
    resize: none;
    border: none;
    border-radius: 7px;
    padding: 12px;
    font-size: 14px;
    outline: none;
}

.label {
    font-size: 12px;
    color: #ccc;
    font-weight: 800;
    margin-top: 20px;
    margin-bottom: 20px;
}

.input {
    padding: 12px;
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