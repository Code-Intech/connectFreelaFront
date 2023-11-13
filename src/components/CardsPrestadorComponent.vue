<template>
    <div class="col-10">
        <div class="d-flex flex-wrap" style="overflow-y: auto; height: auto;">
            <div class="   m-auto mt-4" v-for="(valores, index) in valor" :key="valores[index]">
                <div class="card" style="width: 440px;">
                    <div class="card-body">
                        <div class="d-flex flex-row mb-3 ">
                            <Avatar class="" :source="avatar[index]"
                                @click="VerPerfilUser(valores.prestadorInfo.tb_user_idtb_user, valores.prestadorInfo.idtb_prestador)" />
                            <h6 class="card-title d-flex align-content-center flex-wrap ms-3">
                                {{ valores.prestadorInfo.Nome_completo }}</h6>

                            <Star class="ms-2" stars="4.5" />
                        </div>

                        <div class="d-flex justify-content-between border-top border-black">

                            <p class="">
                                Valor da Hora de Serviço
                            </p>
                            <p class="">
                                {{ valores.prestadorInfo.Valor_Da_Hora }}
                            </p>
                        </div>

                        <div class="d-flex justify-content-between border-bottom border-black">

                            <p class="">
                                Valor da diaria
                            </p>
                            <p class="">
                                {{ valores.prestadorInfo.Valor_diaria }}
                            </p>
                        </div>


                        <div class="border-top border-black  ">
                            <div class="d-flex flex-row mt-1 overflow-y-auto border-bottom border-black"
                                style="height: 110px;">
                                <h6>
                                    Profissões:
                                </h6>
                                <h6 class="text-info ms-2">
                                    <div v-for="(val, index2) in valores.prestadorProfessions" :key="val[index2]">
                                        {{ val.Profissao }};<br>
                                    </div>
                                </h6>

                            </div>
                            <div class="d-flex overflow-y-auto " style="height: 110px;">

                                <ul>
                                    <li v-for="(val2, index3)    in valores.prestadorSkills" :key="val2[index3]">
                                        <p class="m-0 text-success">
                                            {{ val2.Habilidade }}
                                        </p>
                                    </li>
                                </ul>



                            </div>
                        </div>
                        <div class="mt-2 mb-2 border-top border-bottom border-black overflow-y-auto" style="height: 150px;">
                            <p class="card-text">{{ valores.prestadorGrettings.Apresentacao }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div href="" class="text-decoration-none text-black btn btn-outline-secondary"
                                @click="VerPerfilUser(valores.prestadorInfo.tb_user_idtb_user, valores.prestadorInfo.idtb_prestador)">
                                Comentários<font-awesome-icon class="ms-2" icon="comments" />
                            </div>




                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
    
<script>
import Avatar from "@/components/AvatarComponent.vue";
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import Star from "@/components/StarComponent.vue"

export default {
    name: "CardsPrestadorComponent",
    components: {
        Avatar,
        Star


    },

    data() {
        return {
            valor: [],
            prestadoresInfos: {
                posicao: [],
                Nome_Empresa: store.getters.StatePrestador.Nome_Empresa,
                CNPJ: store.getters.StatePrestador.CNPJ,
                idtb_prestador: store.getters.StatePrestador.idtb_prestador,
                Valor_Da_Hora: store.getters.StatePrestador.Valor_Da_Hora,
                Valor_diaria: store.getters.StatePrestador.Valor_diaria,

                Profissao: store.getters.StatePrestador.Profissao,
                idtb_profissoes: store.getters.StatePrestador.idtb_profissoes,
                Experiencia: store.getters.StatePrestador.Experiencia,
                Categoria: store.getters.StatePrestador.Categoria,
                tb_categoria_idtb_categoria: store.getters.StatePrestador.tb_categoria_idtb_categoria,

                Habilidade: store.getters.StatePrestador.Habilidade,
                idtb_habilidades: store.getters.StatePrestador.idtb_habilidades,
                prestadorGrettings: { Apresentacao: store.getters.StatePrestador.prestadorGrettings },

            },
            avatar: []
        };
    },
    created() {
        this.getAllPrestador();
        this.GetAvatar();

    },
    computed: {
        store() {
            return store
        },

        // prestadores() {
        //     return this.$store.getters.StatePrestador;
        // }
    },

    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getAllPrestadores", "getInfoPrestador", "getAvatarNoToken"]),
        ...mapGetters([]),

        // mapPrestadores(prestadorId) {
        //     const prestador = this.prestadores.find((cat) => cat.idtb_prestador === prestadorId);

        //     return prestador ? prestador.Prestador : 'Prestador Desconhecido';
        // },

        getAllPrestador() {
            this.valor = store.getters.StatePrestador
        },

        VerPerfilUser(id, idPrestador) {
            this.$router.push({ name: `UserPerfilSobreView`, params: { id: id, idPrestador: idPrestador } });
        },

        async GetAvatar() {
            this.avatar = []

            try {
                this.avatar = []
                await this.getAllPrestadores()
                const valor = store.getters.StatePrestador
                for (let index = 0; index < valor.length; index++) {
                    try {
                        await this.getAvatarNoToken(valor[index].prestadorInfo.tb_user_idtb_user)

                        this.avatar.push(store.getters.StateAvatarId)
                    } catch (error) {
                        console.log(error)

                        this.avatar.push(null)
                    }
                }
            } catch (error) {
                console.log(error)
            }

        }


    }

}


</script>
    
<style scoped></style>