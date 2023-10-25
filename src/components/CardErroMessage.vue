<template>
    <div>
        <div v-for="(message, index) in errorMessageCard.errors" :key="message[index]">

            {{ message }}
        </div>
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