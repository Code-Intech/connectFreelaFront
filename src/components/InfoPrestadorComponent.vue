<template>
    <div class="col-10 h-100 d-inline-block">


        <h2>Área do Prestador</h2>

        <div>
            <div class="row">
                <div class="col-3">
                    <label class="form-label" for="">Valor da Sua Diária:</label>
                    <input class="form-control" type="number" name="" id="" style="border-color: var(--purple-primary)" />
                </div>
                <div class="col-3">
                    <label class="form-label" for="">Valor da Sua Hora de Trabalho:</label>
                    <input class="form-control" type="number" name="" id="" style="border-color: var(--purple-primary)" />
                </div>

                <div class="col-3">
                    <label class="form-label" for="">CNPJ:</label>
                    <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)" />
                </div>
                <div class="col">
                    <label class="form-label" for="">Nome da Sua Empresa:</label>
                    <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)" />
                </div>
            </div>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
            <input class="btn btn-primary" type="submit" value="Salvar" />
        </div>



        <h2>Profissões</h2>

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
                            {{ profession.Profissao }} ({{ mapCategoryName(profession.tb_categoria_idtb_categoria) }})
                        </option>
                    </select>


                </div>

                <div class="col me-4 rounded" style="border: 1px solid; border-color: var(--purple-primary)">
                    <!-- <label class="form-label" for="">Profissão:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);"> -->
                    <ul class="form-control mt-3">

                        <li class="" v-for="(selectedProfession, index) in selectedProfessions" :key="index"
                            style=" border-bottom: 1px solid;border-color: var(--purple-primary);">
                            {{ selectedProfession.Profissao }} ({{
                                mapCategoryName(selectedProfession.tb_categoria_idtb_categoria) }})
                            <input type="number" name="" id="" placeholder="testttttttttttttttttttt">
                            <button class="mb-2 btn btn-outline-danger" @click="removeProfession(index)">
                                Remover
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
            <input class="btn btn-primary" type="submit" value="Salvar" />
        </div>



        <h2>Habilidades</h2>
        <!-- <button @click="tttt()">tettttt</button> -->
        <div class="d-flex">
            <div class="" style="max-width: 40rem">
                <input class="form-control mb-2" type="text" v-model="searchQuery" placeholder="Pesquisar Habilidades"
                    style="width: 20rem; border-color: var(--purple-primary)" />
                <select style="height: 15rem; border-color: var(--purple-primary)" class="form-select" multiple
                    v-model="selectedSkillIds" @change="updateSelectedSkills">
                    <option v-for="skill in filteredSkills" :key="skill.idtb_habilidades" :value="skill">
                        {{ skill.Habilidade }}
                    </option>
                </select>
            </div>


            <div class="ms-4" style="max-width: 30rem; min-width: 20rem">
                <ul class="form-select" style="min-height: 25px; border-color: var(--purple-primary)">
                    <h6>Habilidades Selecionadas</h6>
                    <li class="m-2" v-for="(selectedSkill, index) in selectedSkills" :key="index" style="
                border-bottom: 2px solid;
                border-color: var(--purple-primary);
            ">
                        {{ selectedSkill.Habilidade }}
                        <button class="m-3 btn btn-outline-danger" @click="removeSkill(index)">
                            Remover
                        </button>
                    </li>
                </ul>
            </div>

            <div class="rounded ms-4" style="border: 1px solid; border-color: var(--purple-primary); width: 100%">
                <h4 class="m-3">Suas Habilidades</h4>

                <div>
                    <ul>
                        <li><font-awesome-icon icon="check" class="me-2" />PHP</li>
                        <li><font-awesome-icon icon="check" class="me-2" />PHP</li>
                        <li><font-awesome-icon icon="check" class="me-2" />PHP</li>
                        <li><font-awesome-icon icon="check" class="me-2" />PHP</li>
                        <li><font-awesome-icon icon="check" class="me-2" />PHP</li>
                        <li><font-awesome-icon icon="check" class="me-2" />PHP</li>
                    </ul>
                </div>
            </div>
        </div>


        <h2>
            Sobre Você:
        </h2>
        <div class="mt-3">

            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 100px;border-color: var(--purple-primary);"></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
        </div>

        <div class="d-flex justify-content-end">

            <button class="btn btn-primary mt-3" type="submit">Salvar</button>
        </div>

    </div>
</template>

<script>



import store from "@/store";
import { mapActions, mapGetters } from 'vuex'



export default {
    name: "InfoPrestadorComponent",
    components: {

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
            console.log(this.$store.getters.Getcategorys, "catttttttttttttttttttttttttttttttt");
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
    methods: {

        validateOnBack: Boolean,
        ...mapActions([""]),
        ...mapGetters(["GetToken", "GetSkills", "GetSkills", "GetProfessions", "Getcategorys"]),

        mapCategoryName(categoryId) {
            const category = this.categories.find((cat) => cat.idtb_categoria === categoryId);
            return category ? category.Categoria : 'Categoria Desconhecida';
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
                const profession = this.professions.find((p) => p.idtb_profissoes === professionId);
                if (
                    profession &&
                    !this.selectedProfessions.some((p) => p.idtb_profissoes === profession.idtb_profissoes)
                ) {
                    this.selectedProfessions.push(profession);
                }
            });
        },



        removeProfession(index) {
            this.selectedProfessions.splice(index, 1);
        },
    },
};
</script>

<style scoped></style>
