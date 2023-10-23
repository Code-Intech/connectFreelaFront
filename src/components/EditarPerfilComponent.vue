<template>
    <div class="col-10 h-100 d-inline-block">


        <!--        <div class="mb-3 mt-3">-->

        <!--            <h5>-->
        <!--                Carregue sua Foto de Perfil-->
        <!--            </h5>-->
        <!--            <input :value="fotoData.FTAvatar" class="form-control" type="file" id="formFile"-->
        <!--                style="border-color: var(&#45;&#45;purple-primary)">-->

        <!--            <button @click="getFoto()" type="">Enviar</button>-->


        <!--        </div>-->

        <div>
            <div>
                <h2>Informações Pessoais</h2>
            </div>

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
                    <!-- <input class="form-control" type="text" name="" id=""
                        style="max-width: 800px; border-color: var(--purple-primary)" /> -->

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
                        @input="infoUser.CEP = $event.target.value"
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
                    <input class="form-control" type="text" name="" id="" :value="store.getters.StateEditUser.Numero"
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
                        <font-awesome-icon icon="circle" style="max-width: 8px" /> Deve
                        conter:
                    </li>
                    <li>
                        <font-awesome-icon icon="circle" style="max-width: 8px" /> Letras
                        maiúsculas:
                    </li>
                    <li>
                        <font-awesome-icon icon="circle" style="max-width: 8px" /> Letras
                        minúsculas:
                    </li>
                    <li>
                        <font-awesome-icon icon="circle" style="max-width: 8px" />
                        Caracter especial:
                    </li>
                    <li>
                        <font-awesome-icon icon="circle" style="max-width: 8px" />
                        Números: 8 dígitos.
                    </li>
                </ul>
            </div>
            <div>
                <p>{{ nomeGenero }}</p>
            </div>

            <div class="d-flex justify-content-end">

                <button class="btn btn-primary mt-3" type="submit" @click="upUser()">Salvar</button>
                <button class="btn btn-primary mt-3" type="submit" @click="test()">Test</button>
            </div>
        </div>




    </div>
</template>

<script>

import store from "@/store";
import { mapActions, mapGetters } from 'vuex'


export default {
    name: "EditarPerfilComponent",
    components: {

    },
    data() {
        return {
            skills: [
                "PHP",
                "Java",
                "CSS",
                "JavaScript",
                "Python",
                "HTML",
                "React",
                "Vue.js",
                "Angular",
                "Node.js",
            ],
            selectedSkillIds: [],
            selectedSkills: [],
            searchQuery: "",
            professions: [
                { id: 1, name: "Engenheiro Civil", category: "Engenharia" },
                { id: 2, name: "Médico", category: "Saúde" },
                { id: 3, name: "Professor", category: "Educação" },
                { id: 4, name: "Advogado", category: "Jurídico" },
                { id: 5, name: "Programador", category: "Tecnologia" },
                { id: 6, name: "Chef de Cozinha", category: "Gastronomia" },
            ],
            Genero: "",
            selectedProfessionIds: [],
            selectedProfessions: [],
            searchQuery1: "",
            searchQuery2: "",
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
                Genero: store.getters.StateEditUser.Genero,
                Telefone: store.getters.StateEditUser.Telefone,
                CEP1: store.getters.city.cep,
                Estado: store.getters.city.estado,
                Cidade: store.getters.city.cidade,
                Bairro: store.getters.city.bairro,
                endereco: store.getters.city.endereco,
                Numero: store.getters.StateEditUser.Numero,
                Email: store.getters.StateEditUser.Email,
                Senha: "",
            }
        };
    },
    created() {
        const generoNovo = this.store.getters.StateGenders.find((Genero) => Genero.idtb_genero === this.store.getters.StateEditUser.Genero);
        return generoNovo ? generoNovo.Genero : "Genero não encontrado"
    },
    computed: {
        store() {
            return store
        },
        filteredSkills() {
            return this.skills.filter((skill) =>
                skill.toLowerCase().includes(this.searchQuery2.toLowerCase())
            );
        },

        nomeGenero() {
            const generoNovo = this.store.getters.StateGenders.find((Genero) => Genero.idtb_genero === this.store.getters.StateEditUser.Genero);
            return generoNovo ? generoNovo.Genero : "Genero não encontrado"
        },


        filteredProfessions() {
            let filtered = this.professions;

            if (this.searchQuery1) {
                const query = this.searchQuery1.toLowerCase();
                filtered = filtered.filter((profession) =>
                    profession.name.toLowerCase().includes(query)
                );
            }

            if (this.searchQuery2) {
                const query2 = this.searchQuery2.toLowerCase();
                filtered = filtered.filter((profession) =>
                    profession.category.toLowerCase().includes(query2)
                );
            }

            return filtered;
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

        //Get Info User
        // async getinfouser() {
        //     try {
        //         return await this.const();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },

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


        updateSelectedSkills() {
            this.selectedSkillIds.forEach((skillId) => {
                if (!this.selectedSkills.includes(skillId)) {
                    this.selectedSkills.push(skillId);
                }
            });
        },
        removeSkill(index) {
            this.selectedSkills.splice(index, 1);
        },

        updateSelectedProfessions() {
            this.selectedProfessionIds.forEach((professionId) => {
                const profession = this.professions.find((p) => p.id === professionId);
                if (
                    profession &&
                    !this.selectedProfessions.some((p) => p.id === profession.id)
                ) {
                    this.selectedProfessions.push(profession);
                }
            });
        },
        removeProfession(index) {
            this.selectedProfessions.splice(index, 1);
        },

        async upUser() {

            console.log(this.infoUser)
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

            // console.log(InfoUser, "Testeeeee");

            const infoPayLoad = {
                token: this.GetToken(),
                info: InfoUse
            }
            try {
                console.log(infoPayLoad, 'payloaddddddddddddddddddddddddddddd');
                await this.upInfoUser(infoPayLoad)
            } catch (error) {
                console.log(error);
            }
        },


        getGenero() {
            this.infoUser.Genero = this.Genero.map((genderId) => genderId.id

            );
        },

        test() {
            console.log(this.infoUser.Genero)
        },



    },
};
</script>

<style scoped></style>
