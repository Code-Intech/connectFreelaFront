<template>
    <div>
        <div v-for="(message, index) in errorMessageCard.errors || errorMessageCard" :key="message[index]"
            class="border border-white rounded m-2 alert alert-danger d-flex align-items-center" role="alert">
            <font-awesome-icon icon="triangle-exclamation" class="" />
            <h5 class="ms-2">
                {{ message || message.message }}

            </h5>
        </div>

        <!-- {{ errorMessageCard }} -->
    </div>
</template>

<script>



export default {
    name: "CardErroMessage",
    props: {
        errorMessageCard: {
            type: Array,
            require: true
        },

    },
    components: {

    },
}

</script>

<style scoped></style>