<template>
    <div class="col-10 h-100 d-inline-block">

        <div class="alert alert-success" role="alert" v-if="ifcreatepreador">
            Prestador Criado com sucesso!.
        </div>
        <div class="alert alert-success" role="alert" v-if="ifattpreador">
            Prestador Alterado com sucesso!.
        </div>

        <h2 class="mt-3">Área do Prestador</h2>
        <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
        <div>
            <div class="row">
                <div class="col-3">

                    <label class="form-label" for="">Valor da Sua Diária:</label>
                    <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)"
                        v-model="infoPrestador.Valor_Diarial" @input="infoPrestador.Valor_Diarial = $event.target.value" />
                </div>
                <div class="col-3">
                    <label class="form-label" for="">Valor da Sua Hora de Trabalho:</label>
                    <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)"
                        v-model="infoPrestador.Valor_Hora" @input="infoPrestador.Valor_Hora = $event.target.value" />
                </div>

                <div class="col-3">
                    <label class="form-label" for="">CNPJ:</label>
                    <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)"
                        v-model="infoPrestador.CNPJ" @input="infoPrestador.CNPJ = $event.target.value" />
                </div>
                <div class="col">
                    <label class="form-label" for="">Nome da Sua Empresa:</label>
                    <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)"
                        v-model="infoPrestador.Nome_Empresa" @input="infoPrestador.Nome_Empresa = $event.target.value" />
                </div>
            </div>
        </div>



        <h2 class="mt-3">Profissões</h2>

        <div>
            <div class="row">
                <div class="col-4">
                    <!-- <label class="form-label" for="">Tempo de experiência:</label>
                        <input class="form-control" type="number" name="" id=""
                            style="border-color: var(--purple-primary);"> -->

                    <div class="d-flex">
                        <input class="form-control me-2 mb-2" type="text" v-model="searchQuery1"
                            placeholder="Pesquisar Profissões"
                            style="border: 1px solid; border-color: var(--purple-primary)" />
                        <input class="form-control mb-2" type="text" v-model="searchQuery2"
                            placeholder="Pesquisar por Categoria"
                            style="border: 1px solid; border-color: var(--purple-primary)" />
                    </div>


                    <select class="form-control" multiple v-model="selectedProfessionIds"
                        @change="updateSelectedProfessions" style="border: 1px solid; border-color: var(--purple-primary)">
                        <option v-for="profession in filteredProfessions" :key="profession.idtb_profissoes"
                            :value="profession.idtb_profissoes">
                            {{ profession.Profissao }} ({{
                                mapCategoryName(profession.tb_categoria_idtb_categoria) }})
                        </option>
                    </select>


                </div>

                <div class="col me-4 rounded" style="border: 1px solid; border-color: var(--purple-primary)">
                    <!-- <label class="form-label" for="">Profissão:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);"> -->
                    <ul class="form-control mt-3 ">

                        <li class="d-flex flex-wrap align-items-center pb-2"
                            v-for="(selectedProfession, index) in selectedProfessions" :key="index"
                            style=" border-bottom: 1px solid;border-color: var(--purple-primary);">
                            {{ selectedProfession.Profissao }} ({{
                                mapCategoryName(selectedProfession.tb_categoria_idtb_categoria) }})
                            <input class="rounded form-control ms-2 me-2" type="number" name="" id=""
                                placeholder="Tempo de experiência em (Anos)" style="width: 270px;"
                                v-model="infoPrestador.Profissao[index].experiencia">
                            <button class=" btn btn-outline-danger " @click="removeProfession(index)">
                                Remover
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <h2 class="mt-3">Habilidades</h2>
        <!-- <button @click="tttt()">tettttt</button> -->
        <div class="d-flex">
            <div class="" style="max-width: 40rem">
                <input class="form-control mb-2" type="text" v-model="searchQuery" placeholder="Pesquisar Habilidades"
                    style="width: ; border-color: var(--purple-primary)" />
                <select style="height: 15rem; border-color: var(--purple-primary)" class="form-select b-3" multiple
                    v-model="selectedSkillIds" @change="updateSelectedSkills">
                    <option v-for="skill in filteredSkills" :key="skill.idtb_habilidades" :value="skill">
                        {{ skill.Habilidade }}
                    </option>
                </select>
            </div>


            <div>
                <div class="ms-4" style="max-width: 30rem; min-width: 20rem">
                    <ul class="form-select"
                        style="min-height: 25px; border-color: var(--purple-primary); max-height: 290px; overflow-y: auto;">
                        <h6>Habilidades Selecionadas</h6>
                        <li class="m-2" v-for="(selectedSkill, index) in selectedSkills" :key="index"
                            style="border-bottom: 2px solid; border-color: var(--purple-primary);">
                            {{ selectedSkill.habilidade || selectedSkill.Habilidade }}
                            <button class="m-2 btn btn-outline-danger" @click="removeSkill(index)">
                                Remover
                            </button>
                        </li>
                    </ul>
                </div>
            </div>



            <div class="rounded ms-4" style="border: 1px solid; border-color: var(--purple-primary); width: 45vh">
                <h4 class="m-3">Suas Habilidades</h4>

                <div>
                    <ul v-for="skill in selectedSkills " :key="skill[index]">
                        <li><font-awesome-icon icon="check" class="me-2" />{{ skill.Habilidade }}</li>
                    </ul>
                </div>
            </div>
        </div>


        <!-- <button @click="teste()">
            teste
        </button> -->



        <h2 class="mt-3">
            Sobre Você:
        </h2>
        <div class="mt-3">

            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 100px;border-color: var(--purple-primary);" v-model="infoPrestador.Sobre"
                    @change="getsobre"></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
        </div>

        <div>

            <div v-if="store.getters.StatePrestador == undefined" class="d-flex justify-content-end">

                <button class="btn btn-primary mt-3" type="submit" @click="createPrestador()">Criar</button>
            </div>
            <div v-else class="d-flex justify-content-end">
                <button class="btn btn-primary mt-3" type="submit" @click="upPrestador()">Salvar</button>

            </div>

            <!-- <div class="d-flex justify-content-end">

                <button class="btn btn-primary mt-3" type="submit" @click="createPrestador()">Criar</button>
                <button class="btn btn-primary mt-3" type="submit" @click="upPrestador()">Salvar</button>
            </div> -->

        </div>


    </div>
</template>

<script>



import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import CardErroMessage from "@/components/CardErroMessage.vue"


export default {
    name: "InfoPrestadorComponent",
    components: {
        CardErroMessage
    },
    data() {
        return {
            selectedSkillIds: [],
            selectedSkills: [],
            searchQuery: "",
            selectedProfessionIds: [],
            selectedProfessions: [],
            searchQuery1: "",
            searchQuery2: "",
            profissaobackend: [],
            skillbackend: [],
            infoPrestador: {
                Valor_Diarial: "",
                Valor_Hora: "",
                CNPJ: "",
                Nome_Empresa: "",
                Profissao: [],
                Habilidade: [],
                Sobre: null,


            },
            getinfoback: {
                Valor_Diarial: "",
                Valor_Hora: "",
                CNPJ: "",
                Nome_Empresa: "",
                Profissao: [],
                Habilidade: [],
                Sobre: "",


            },
            errorMessage: null,
            erroIf: null,
            ifattpreador: false,
            ifcreatepreador: false,
        };
    },
    computed: {

        store() {

            return store
        },

        skills() {
            return this.$store.getters.GetSkills; // Acesse diretamente as habilidades
        },
        filteredSkills() {
            return this.skills.filter((skill) =>
                skill.Habilidade.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        // selectedSkills() {
        //     return this.skills.filter((skill) =>
        //         this.selectedSkillIds.includes(skill.idtb_habilidades)
        //     );
        // },


        professions() {


            return this.$store.getters.GetProfessions;

        },
        categories() {


            return this.$store.getters.Getcategorys;
        },

        filteredProfessions() {
            let filtered = this.professions;

            if (this.searchQuery1) {
                const query = this.searchQuery1.toLowerCase();
                filtered = filtered.filter((profession) =>
                    profession.Profissao.toLowerCase().includes(query)
                );
            }




            if (this.searchQuery2) {
                const query2 = this.searchQuery2.toLowerCase();
                filtered = filtered.filter((profession) =>
                    this.mapCategoryName(profession.tb_categoria_idtb_categoria).toLowerCase().includes(query2)
                );
            }


            return filtered;
        },
    },

    created() {
        this.getprofrissoesbackend();
        this.removeProfession(0);
        this.removeSkill(0);
        this.GetSkills();
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreatePrestador", "UpPrestador", "getInfoPrestador", "getSkills", "getProfessions", "getcategory"]),
        ...mapGetters(["GetToken", "GetSkills", "GetSkills", "GetProfessions", "Getcategorys", "StatePrestador"]),

        mapCategoryName(categoryId) {
            const category = this.categories.find((cat) => cat.idtb_categoria === categoryId);

            return category ? category.Categoria : 'Categoria Desconhecida';
        },


        updateSelectedSkills() {
            this.selectedSkillIds.forEach((skillId) => {
                if (!this.selectedSkills.includes(skillId)) {
                    this.selectedSkills.push(skillId);



                }
                this.infoPrestador.Habilidade = [];
                this.selectedSkills.map((skillId) => {
                    this.infoPrestador.Habilidade.push(skillId.idtb_habilidades || JSON.parse(skillId.id))
                });
            });

        },
        removeSkill(index) {
            this.selectedSkills.splice(index, 1);
            this.infoPrestador.Habilidade.splice(index, 1);
        },

        updateSelectedProfessions() {
            this.selectedProfessionIds.forEach((professionId) => {
                const profession = this.professions.find((p) => p.idtb_profissoes === professionId);
                if (
                    profession &&
                    !this.selectedProfessions.some((p) => p.idtb_profissoes === profession.idtb_profissoes)
                ) {

                    this.selectedProfessions.push(profession);
                    this.infoPrestador.Profissao.push({ id: profession.idtb_profissoes, experiencia: "" });
                }

            });
            // const profissao1 = this.selectedProfessions.map((profession) => profession.idtb_profissoes);
            // this.infoPrestador.Profissao = this.selectedProfessions.map((profession) => profession.idtb_profissoes);
            // this.infoPrestador.Profissao.id = this.selectedProfessions.map((profession) => profession.idtb_profissoes);
        },



        removeProfession(index) {
            this.selectedProfessions.splice(index, 1);
            this.infoPrestador.Profissao.splice(index, 1);
        },

        updateInfoPrestador() {
            this.infoPrestador.Profissao = this.selectedProfessionIds;
        },

        async GetSkills() {

            const payload = {
                token: await this.GetToken()
            }

            try {

                await this.getInfoPrestador(payload);
                await this.getSkills(await this.GetToken());
                await this.getProfessions(await this.GetToken());
                await this.getcategory(await this.GetToken());
            } catch (error) {
                console.log(error)
            }
        },

        getsobre(event) {
            this.infoPrestador.Sobre = event.target.value;
        },




        getprofrissoesbackend() {


            // this.skillbackend = []
            // this.selectedProfessions = []


            if (store.getters.StatePrestador != undefined || store.getters.StatePrestador != null) {

                this.skillbackend = store.getters.StatePrestador.prestadorSkills

                this.profissaobackend2 = store.getters.StatePrestador.prestadorProfessions





                this.infoPrestador.Valor_Diarial = store.getters.StatePrestador.prestadorInfo.Valor_diaria
                this.infoPrestador.Valor_Hora = store.getters.StatePrestador.prestadorInfo.Valor_Da_Hora
                this.infoPrestador.CNPJ = store.getters.StatePrestador.prestadorInfo.CNPJ
                this.infoPrestador.Nome_Empresa = store.getters.StatePrestador.prestadorInfo.Nome_Empresa
                this.infoPrestador.Sobre = store.getters.StatePrestador.apresentacao
                // this.infoPrestador.Sobre = store.getters.StatePrestador.prestadorInfo.prestadorGrettings.Apresentacao







                // this.infoPrestador.Profissao.push({ id: this.selectedProfessions, experiencia: "" });



                const novoArray = this.profissaobackend2.map(objeto => {
                    // Use a função parseInt para converter a string em um número
                    return { id: parseInt(objeto.idtb_profissoes), Profissao: objeto.Profissao, tb_categoria_idtb_categoria: parseInt(objeto.tb_categoria_idtb_categoria), experiencia: parseInt(objeto.Experiencia) };
                });

                const novoArray2 = this.skillbackend.map(objeto => {
                    // Use a função parseInt para converter a string em um número
                    return { idtb_habilidades: parseInt(objeto.idtb_habilidades), Habilidade: objeto.Habilidade };
                });
                // const novoArray3 = this.skillbackend.map(objeto => {
                //     // Use a função parseInt para converter a string em um número
                //     return { ee: parseInt(objeto.id) };
                // });

                this.selectedSkills = novoArray2

                // this.infoPrestador.Habilidade = novoArray3


                for (let index = 0; index < novoArray2.length; index++) {

                    this.infoPrestador.Habilidade.push(novoArray2[index].idtb_habilidades);
                }



                // }




                // this.infoPrestador.Habilidade = novoArray2.idtb_habilidades


                // this.infoPrestador.Profissao = novoArray;
                this.selectedProfessions = novoArray;

                for (let index = 0; index < novoArray.length; index++) {
                    // const element = novoArray[index];

                    // const id = novoArray[index].id;
                    // const experiencia = novoArray[index].experiencia;
                    this.infoPrestador.Profissao.push({ id: novoArray[index].id, experiencia: novoArray[index].experiencia });
                }







            }




        },









        async createPrestador() {
            this.scrollToElement()
            const InfoPresta = new FormData();
            InfoPresta.append("valor_diaria", this.infoPrestador.Valor_Diarial);
            InfoPresta.append("valor_hora", this.infoPrestador.Valor_Hora);
            InfoPresta.append("cnpj", this.infoPrestador.CNPJ);
            InfoPresta.append("nome_empresa", this.infoPrestador.Nome_Empresa);

            // Garanta que habilidades e profissões sejam tratadas como arrays
            const habilidades = Array.isArray(this.infoPrestador.Habilidade)
                ? this.infoPrestador.Habilidade
                : [this.infoPrestador.Habilidade];

            const profissoes = Array.isArray(this.infoPrestador.Profissao)
                ? this.infoPrestador.Profissao
                : [this.infoPrestador.Profissao];

            InfoPresta.append("habilidades", JSON.stringify(habilidades));
            InfoPresta.append("profissoes", JSON.stringify(profissoes));

            InfoPresta.append("apresentacao", this.infoPrestador.Sobre);


            const infoPayLoad = {
                token: await this.GetToken(),
                info: InfoPresta
            }
            try {
                await this.CreatePrestador(infoPayLoad)
                await this.GetSkills()
                this.getprofrissoesbackend()
                this.ifcreatepreador = true
                setTimeout(() => {
                    this.ifcreatepreador = false
                }, 4000);
            } catch (error) {
                console.log(error)
                const message = error.request.response
                const message2 = JSON.parse(message)
                console.log(message2.error)
                this.errorMessage = message2
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
            }

        },




        async upPrestador() {

            this.scrollToElement()

            const InfoPresta = new FormData();
            InfoPresta.append("valor_diaria", this.infoPrestador.Valor_Diarial);
            InfoPresta.append("valor_hora", this.infoPrestador.Valor_Hora);
            InfoPresta.append("cnpj", this.infoPrestador.CNPJ);
            InfoPresta.append("nome_empresa", this.infoPrestador.Nome_Empresa);

            // // Garanta que habilidades e profissões sejam tratadas como arrays
            // const habilidades = Array.isArray(this.infoPrestador.Habilidade)
            //     ? this.infoPrestador.Habilidade
            //     : [this.infoPrestador.Habilidade];

            // const profissoes = Array.isArray(this.infoPrestador.Profissao)
            //     ? this.infoPrestador.Profissao
            //     : [this.infoPrestador.Profissao];

            InfoPresta.append("habilidades", JSON.stringify(this.infoPrestador.Habilidade));
            InfoPresta.append("profissoes", JSON.stringify(this.infoPrestador.Profissao));

            InfoPresta.append("apresentacao", this.infoPrestador.Sobre);


            const infoPayLoad = {
                token: await this.GetToken(),
                info: InfoPresta
            }
            try {
                await this.UpPrestador(infoPayLoad)


                await this.GetSkills()
                this.getprofrissoesbackend()
                this.ifattpreador = true
                setTimeout(() => {
                    this.ifattpreador = false
                }, 4000);
            } catch (error) {
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
            }

        },

        scrollToElement() {
            // Scroll até o elemento referenciado
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Adiciona um efeito suave de rolagem (opcional)
            });
        },
    },
};
</script>

<style scoped></style>
