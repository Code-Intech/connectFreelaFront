<template>
    <!-- Modal -->
    <div class="modal fade" id="Avaliar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>Avaliação de Prestador de Serviço</h4>

                    <!-- Avatar e Nome -->
                    <div class="d-flex">
                        <div class="">
                            <Avatar class="mt-4 img-fluid p-3" height="6rem" width="6rem" />
                        </div>
                        <div class="d-flex align-items-center ms-4">
                            <h3>Nome da Pessoa</h3>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <label for="customRange2" class="form-label">Limpeza:</label>
                        <input type="range" class="form-range" min="0" max="5" id="customRange2">
                    </div>
                    <div class="form-group">
                        <label for="organizacao">Organização:</label>
                        <input id="organizacao" type="range" class="form-range" min="0" max="5">
                    </div>
                    <div class="form-group">
                        <label for="compromisso">Compromisso:</label>
                        <input id="compromisso" type="range" class="form-range" min="0" max="5">
                    </div>
                    <div class="form-group">
                        <label for="qualidade">Qualidade de Serviço:</label>
                        <input id="qualidade" type="range" class="form-range" min="0" max="5">
                    </div>
                    <div class="form-group">
                        <label for="velocidade">Velocidade de Entrega do Serviço:</label>
                        <input id="velocidade" type="range" class="form-range" min="0" max="5">
                    </div>
                    <div class="form-group">
                        <label for="comentario">Comentário:</label>
                        <textarea class="form-control" id="comentario" name="comentario" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Enviar Avaliação</button>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@/components/AvatarComponent.vue";
// import { mapActions, mapGetters } from 'vuex'
// import loading from "@/components/Loading.vue"



export default {
    name: "CardAvaliar",
    props: {

    },
    data() {
        return {

        }
    },
    components: {
        Avatar,
    },


}
</script>

<style scoped></style>