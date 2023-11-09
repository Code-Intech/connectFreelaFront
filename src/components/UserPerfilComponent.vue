<template>
    <div class="mt-3 ms-3 d-block border rounded">
        <div class="m-3 d-flex" v-for="(valores) in prestadorInfo" :key="(valores)">
            <div class="me-5">
                <h2>

                    {{ valores.Nome_completo }}
                </h2>
                <h5>
                    {{ valores.Nome_Empresa }} - (CNPJ: {{ valores.CNPJ }})
                </h5>
            </div>

            <div class="ms-5">
                <h5>
                    Hora: R$ {{ valores.Valor_Da_Hora }}
                </h5>
                <h5>
                    Diária: R$ {{ valores.Valor_diaria }}
                </h5>
            </div>
        </div>


        <div class="border rounded m-2 overflow-y-auto" style="height: 25vh; ">
            <div class="border-bottom">
                <h4 class="m-3 h4 ">
                    Sobre
                </h4>
            </div>



            <div class="m-3" v-for="(valores) in sobre" :key="(valores)">
                <p class="">
                    {{ valores.Apresentacao }}
                </p>

            </div>



        </div>






        <div class="border rounded m-2 overflow-y-auto">


            <div class="border-bottom">
                <h4 class="m-3 h4 ">
                    Habilidades
                </h4>
            </div>

            <div class="m-3 d-flex">

                <ul class="me-5" v-for="(valor) in prestado.prestadorSkills" :key="(valor)" style="height: 25vh; ">
                    <li>{{ valor.Habilidade }}</li>
                </ul>

            </div>



        </div>


        <div class="border rounded m-2 overflow-y-auto ">


            <div class="border-bottom">
                <h4 class="m-3 h4 ">
                    Profissões
                </h4>
            </div>

            <div class="m-3 d-flex">

                <ul class="me-5" v-for="(valor) in prestado.prestadorProfessions" :key="(valor)" style="height: 25vh; ">
                    <li>
                        {{ valor.Profissao }} - Experiência: {{ valor.Experiencia }} anos
                    </li>

                </ul>


            </div>



        </div>





        <div class="border rounded m-2">

            <div class="border-bottom ">
                <h4 class="m-3">
                    Avaliações
                </h4>
            </div>


            <div class="border border-black rounded m-2" style="background-color: rgba(199, 194, 194, 0.671);">

                <div class="m-2 d-flex">
                    <Star class="flex-grow-1" />

                    <h6 class="m-1">
                        Valor do Serviço
                    </h6>

                    <h6 class="m-1">
                        $900,00
                    </h6>
                </div>

                <div class="m-2">
                    <p>
                        Landing Page WorldPress
                    </p>
                </div>



                <div class="m-2">
                    <p>
                        Otimo Profíssional!
                    </p>
                </div>






                <div class="d-flex m-2">
                    <Avatar />
                    <h6 class="d-flex align-content-center flex-wrap ms-3">
                        Larissa Santos
                    </h6>
                </div>


            </div>


        </div>





















    </div>
</template>
    
<script>
import Avatar from "@/components/AvatarComponent.vue";
import Star from "@/components/StarComponent.vue";
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "UserPerfilComponent",
    data() {
        return {
            prestado: [],
            prestadorInfo: [],
            sobre: [],
            skills: [],
        }
    },
    components: {
        Avatar,
        Star


    },
    computed: {
        store() {
            return store
        },
    },

    created() {
        this.getSobreUser()

    },

    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getInfoPrestador"]),
        ...mapGetters(["GetToken"]),

        async getSobreUser() {
            const infoPayLoad = {
                token: this.GetToken(),
            }
            try {
                console.log(infoPayLoad, "loading");
                await this.getInfoPrestador(infoPayLoad)
                this.prestado = store.getters.StatePrestador
                console.log(this.prestado)
                this.prestadorInfo.push(this.prestado.prestadorInfo)
                this.sobre.push(this.prestado.prestadorGrettings)
                this.skills.push(this.prestado.prestadorSkills)
            } catch (error) {
                this.prestador = null
            }
        },

    }

}


</script>
    
<style scoped></style>