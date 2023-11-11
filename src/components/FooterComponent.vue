<template>
    <footer class="text-center text-md-start bg-light text-muted">

        <section class="backGroundFooter text-white">

            <div class="container text-center text-md-start">
                <div class="d-flex">

                    <div class="d-flex align-content-center justify-content-center col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src="../assets/img/Logo.jpeg" class="img-fluid logo mt-3" alt="Imagem responsiva"
                            style="height: 50px;">
                    </div>

                    <div class=" mx-auto mt-1 mb-5 fs-6 mt-3">

                        <h6 class="text-uppercase fw-bold mb-2">Fale conosco</h6>
                        <p>
                            <a @click="$router.push({ path: '/FAQ' })"
                                class="text-reset link-underline link-underline-opacity-0">Tire suas
                                Dúvidas</a>
                        </p>
                        <a href="https://www.instagram.com/code_intech/"
                            class="me-4 text-reset link-underline link-underline-opacity-0">
                            <i class="fab fa-instagram"></i> code_intech
                        </a>
                    </div>

                </div>

            </div>
        </section>
        <div class="text-center text-white p-2" style="background-color: #331556;">
            <p>© 2023 Copyright:<span class="text-reset fw-bold">Code Intech</span></p>
        </div>

    </footer>
</template>

<script >
export default {
    name: "FooterComponent",
    methods: {
    },
    components: {
    },
}
</script>

<style scoped>
.backGroundFooter {
    background-color: #5d299a;
}

@media screen and (max-width: 750px) {
    .logo {
        max-width: 250px;
        width: 100%;
    }
}
</style>
