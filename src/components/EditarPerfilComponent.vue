<template>
    <PerfilComponent/>
    <Form>
        <Field name="field" :rules="isRequired" />
        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
        
        <ErrorMessage name="field" />
    </Form>
</template>

<script>
import PerfilComponent from './PerfilComponent.vue';



export default {
    name: "TesteComponent",
    methods: {
        isRequired(value) {
            if (value && value.trim() && value.length > 5) {
                return true;
            }
            return 'This is required';
        }
    },
    components: { PerfilComponent }
}
</script>

<style scoped></style>