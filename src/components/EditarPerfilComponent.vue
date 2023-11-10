<template>
    <div class="col-10 h-100 d-inline-block">
        <div class="mb-4 mt-2">
            <div>
                <h2>Informações Pessoais</h2>
            </div>
            <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
            <div class="">
                <label class="form-label" for="">Nome do Perfil</label>
                <input class="form-control" type="text" name="" id="" :value="store.getters.StateEditUser.Nome_completo"
                    @input="infoUser.Nome_completo = $event.target.value"
                    style="max-width: 800px; border-color: var(--purple-primary)" />
            </div>


            <div class="row">
                <div class="col">
                    <label class="form-label" for="">CPF:</label>
                    <input class="form-control" type="text" name="" id="" :value="store.getters.StateEditUser.CPF"
                        @input="infoUser.CPF = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" disabled readonly />
                </div>
                <div class="col">
                    <label class="form-label" for="">Data de Nascimento:</label>
                    <input class="form-control" type="text" name="" id=""
                        :value="store.getters.StateEditUser.Data_Nacimento"
                        @input="infoUser.Data_Nacimento = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">Gênero</label>
                    <select style="max-width: 800px; border-color: var(--purple-primary)" class="form-select" name="Genero"
                        id="" aria-placeholder="Genero:" required v-model="infoUser.Genero">
                        <option value="">Selecione:</option>
                        <option v-for="genero in this.store.getters.StateGenders" :key="genero.idtb_genero"
                            :value="genero.idtb_genero">{{ genero.Genero }}
                        </option>
                    </select>

                </div>

                <div class="col">
                    <label class="form-label" for="">Telefone:</label>
                    <input class="form-control" type="text" name="" id="" :value="store.getters.StateEditUser.Telefone"
                        @input="infoUser.Telefone = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">CEP:</label>
                    <input v-model="cep" class="form-control" type="text" name="" id=""
                        @input="infoUser.CEP1 = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                    <small v-if="store.getters.isMessageError" class="text-danger" id="error">CEP não encontrado</small>

                </div>

                <div class="col">
                    <label class="form-label" for="">Estado:</label>
                    <input :value="store.getters.city.estado" class="form-control" type="text" name="" id=""
                        @input="infoUser.Estado = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">Cidade:</label>
                    <input :value="store.getters.city.cidade" class="form-control" type="text" name="" id=""
                        @input="infoUser.Cidade = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>

                <div class="col">
                    <label class="form-label" for="">Bairro:</label>
                    <input :value="store.getters.city.bairro" class="form-control" type="text" name="" id=""
                        @input="infoUser.Bairro = $event.target.value"
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">Endereço:</label>
                    <input :value="store.getters.city.endereco" class="form-control" type="text" name="" id=""
                        @input="infoUser.endereco = $event.target.value" style="border-color: var(--purple-primary)" />
                </div>

                <div class="col-3">
                    <label class="form-label" for="">Número:</label>
                    <input class="form-control" type="text" name="" id="" :value="infoUser.Numero"
                        @input="infoUser.Numero = $event.target.value" style="border-color: var(--purple-primary)" />
                </div>
            </div>
        </div>


        <h2>Informações de conta</h2>

        <div class="row">
            <div class="col">
                <label class="form-label" for="">E-mail::</label>
                <input class="form-control" type="text" name="" id="" :value="store.getters.StateEditUser.Email"
                    @input="infoUser.Email = $event.target.value"
                    style="max-width: 800px; border-color: var(--purple-primary)" />
            </div>

            <div class="col">
                <label class="form-label" for="">Senha:</label>
                <input class="form-control" type="text" name="" id="" v-model="infoUser.Senha"
                    style="max-width: 800px; border-color: var(--purple-primary)" />

                <ul>
                    <li>
                        Deve conter:
                    </li>
                    <li>
                        Letras maiúsculas;
                    </li>
                    <li>
                        Letras minúsculas;
                    </li>
                    <li>
                        Caracter especial;
                    </li>
                    <li>
                        8 dígitos.
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-end">

                <button class="btn btn-primary mt-3" type="submit" @click="upUser()">Salvar</button>
            </div>
        </div>




    </div>
</template>

<script>

import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import CardErroMessage from "@/components/CardErroMessage.vue"

export default {
    name: "EditarPerfilComponent",
    components: {
        CardErroMessage
    },
    data() {
        return {
            Genero: "",
            cep: "",
            addressData: {
                cidade: store.getters.city.cidade,
                estado: store.getters.city.estado,
                bairro: store.getters.city.bairro,
                endereco: store.getters.city.endereco,
                numero: "",
            },
            infoUser: {
                Nome_completo: store.getters.StateEditUser.Nome_completo,
                CPF: store.getters.StateEditUser.CPF,
                Data_Nacimento: store.getters.StateEditUser.Data_Nacimento,
                Genero: store.getters.StateEditUser.idgenero,
                Telefone: store.getters.StateEditUser.Telefone,
                CEP1: store.getters.city.cep,
                Estado: store.getters.city.estado,
                Cidade: store.getters.city.cidade,
                Bairro: store.getters.city.bairro,
                endereco: store.getters.city.endereco,
                Numero: store.getters.StateEditUser.Numero,
                Email: store.getters.StateEditUser.Email,
                Senha: "",
            },
            errorMessage: null,
            erroIf: null,
        };
    },
    created() {
        this.getEnd()
        const generoNovo = this.store.getters.StateGenders.find((Genero) => Genero.idtb_genero === this.store.getters.StateEditUser.Genero);
        return generoNovo ? generoNovo.Genero : "Genero não encontrado"
    },
    computed: {
        store() {
            return store
        },

        nomeGenero() {
            const generoNovo = this.store.getters.StateGenders.find((Genero) => Genero.idtb_genero === this.store.getters.StateEditUser.Genero);
            return generoNovo ? generoNovo.Genero : "Genero não encontrado"
        },

    },
    watch: {
        cep() {
            console.log(this.cep)
            this.handleCep()
        }
    },
    async mounted() {
        this.store.commit("setError", { error: false })
        await this.genders()
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getUser ", "getGenders", "GetAddress", "clearAddressData", "upInfoUser"]),
        ...mapGetters(["GetToken"]),

        getEnd() {

            const end = store.getters.StateEditUser.address

            this.cep = end.CEP
            this.infoUser.Numero = end.Numero
        },
        async genders() {
            try {
                return await this.getGenders();
            } catch (error) {
                console.log(error)
            }
        },
        async handleCep() {
            try {
                await this.GetAddress(this.cep)
            } catch (error) {
                console.log(error)
                await this.showError(error)
            }
        },


        async upUser() {

            const InfoUse = new FormData();
            InfoUse.append("Nome_completo", this.infoUser.Nome_completo);
            InfoUse.append("CPF", this.infoUser.CPF);
            InfoUse.append("Data_Nacimento", this.infoUser.Data_Nacimento);
            InfoUse.append("Genero", JSON.stringify(this.infoUser.Genero));
            InfoUse.append("Telefone", this.infoUser.Telefone);
            InfoUse.append("CEP", this.infoUser.CEP1);
            InfoUse.append("Estado", this.infoUser.Estado);
            InfoUse.append("Cidade", this.infoUser.Cidade);
            InfoUse.append("Bairro", this.infoUser.Bairro);
            InfoUse.append("endereco", this.infoUser.endereco);
            InfoUse.append("Numero", this.infoUser.Numero);
            InfoUse.append("Email", this.infoUser.Email);
            InfoUse.append("Senha", this.infoUser.Senha);


            const infoPayLoad = {
                token: await this.GetToken(),
                info: InfoUse
            }
            try {
                await this.upInfoUser(infoPayLoad)
            } catch (error) {
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
            }
        },

        getGenero() {
            this.infoUser.Genero = this.Genero.map((genderId) => genderId.id

            );
        },

    },
};
</script>

<style scoped></style>
