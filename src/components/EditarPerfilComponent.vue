<template>
    <div class="col-10 h-100 d-inline-block">



        <form class="mt-2" action="">

            <h2>
                Foto de Perfil
            </h2>


            <Avatar height="30rem" width="30rem" :rounded="false"/>



            <div class="mb-3 mt-3">
                <h5>
                    Carregue sua Foto de Perfil
                </h5>
                <input class="form-control" type="file" id="formFile">
            </div>


            <div class=" d-flex justify-content-md-end mt-3">
                <input class="btn btn-primary" type="submit" value="Salvar" />
            </div>

        </form>


        <form action="">
            <div>
                <div>
                    <h2>Informações Pessoas</h2>
                </div>

                <div class="">
                    <label class="form-label" for="">Nome do Perfil</label>
                    <input class="form-control" type="text" name="" id=""
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">CPF:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" disabled readonly
                            value="48685877873" />
                    </div>
                    <div class="col">
                        <label class="form-label" for="">Data de Nascimento:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Gênero</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Telefone:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">CEP:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Estado:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Cidade:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Bairro:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px; border-color: var(--purple-primary)" />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Endereço:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)" />
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">Número:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary)" />
                    </div>
                </div>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar" />
            </div>
        </form>

        <form action="" class="mt-3">
            <h2>Área do Prestador</h2>

            <div>
                <div class="row">
                    <div class="col-3">
                        <label class="form-label" for="">Valor da Sua Diária:</label>
                        <input class="form-control" type="number" name="" id=""
                            style="border-color: var(--purple-primary)" />
                    </div>
                    <div class="col-3">
                        <label class="form-label" for="">Valor da Sua Hora de Trabalho:</label>
                        <input class="form-control" type="number" name="" id=""
                            style="border-color: var(--purple-primary)" />
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
        </form>

        <form action="" class="mt-3">
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
                            @change="updateSelectedProfessions"
                            style="border: 1px solid; border-color: var(--purple-primary)">
                            <option v-for="profession in filteredProfessions" :key="profession.id" :value="profession.id">
                                {{ profession.name }} ({{ profession.category }})
                            </option>
                        </select>
                    </div>

                    <div class="col me-4 rounded" style="border: 1px solid; border-color: var(--purple-primary)">
                        <!-- <label class="form-label" for="">Profissão:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);"> -->
                        <ul class="form-control mt-3">
                            <li class="" v-for="(selectedProfession, index) in selectedProfessions" :key="index" style="
                  border-bottom: 1px solid;
                  border-color: var(--purple-primary);
                ">
                                {{ selectedProfession.name }} ({{
                                    selectedProfession.category
                                }})
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
        </form>

        <form action="" class="mt-3">
            <h2>Informações de conta</h2>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">E-mail::</label>
                    <input class="form-control" type="text" name="" id=""
                        style="max-width: 800px; border-color: var(--purple-primary)" />
                </div>

                <div class="col">
                    <label class="form-label" for="">Senha:</label>
                    <input class="form-control" type="number" name="" id=""
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
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                <input class="btn btn-primary" type="submit" value="Salvar" />
            </div>
        </form>

        <form action="" class="">
            <h2>Habilidades</h2>

            <div class="d-flex">
                <div class="" style="max-width: 40rem">
                    <input class="form-control mb-2" type="text" v-model="searchQuery" placeholder="Pesquisar Habilidades"
                        style="width: 20rem; border-color: var(--purple-primary)" />
                    <select style="height: 15rem; border-color: var(--purple-primary)" class="form-select" multiple
                        v-model="selectedSkillIds" @change="updateSelectedSkills">
                        <option v-for="skill in filteredSkills" :key="skill" :value="skill">
                            {{ skill }}
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
                            {{ selectedSkill }}
                            <button class="m-3 btn" @click="removeSkill(index)" style="border-color: var(--purple-primary)">
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
        </form>

        <form class="mt-5" action="">
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
        </form>


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <!-- <div>
            <h2>Habilidades Selecionadas:</h2>
            <ul>
                <li v-for="(selectedSkill, index) in selectedSkills" :key="index">
                    {{ selectedSkill }}
                    <button @click="removeSkill(index)">Remover</button>
                </li>
            </ul>

            <h2>Escolher Habilidades:</h2>
            <input type="text" v-model="searchQuery" placeholder="Pesquisar Habilidades" />
            <select multiple v-model="selectedSkillIds" @change="updateSelectedSkills">
                <option v-for="skill in filteredSkills" :key="skill" :value="skill">{{ skill }}</option>
            </select>
        </div> -->

        <!-- 
        <div>
            <h2>Profissões Selecionadas:</h2>
            <ul>
                <li v-for="(selectedProfession, index) in selectedProfessions" :key="index">
                    {{ selectedProfession.name }} ({{ selectedProfession.category }})
                    <button @click="removeProfession(index)">Remover</button>
                </li>
            </ul>

            <h2>Escolher Profissões:</h2>
            <input type="text" v-model="searchQuery2" placeholder="Pesquisar Profissões" />
            <select multiple v-model="selectedProfessionIds" @change="updateSelectedProfessions">
                <option v-for="profession in filteredProfessions" :key="profession.id" :value="profession.id">
                    {{ profession.name }} ({{ profession.category }})
                </option>
            </select>
        </div>


 -->

        <!-- 


        <div>
            <h2>Profissões Selecionadas:</h2>
            <ul>
                <li v-for="(selectedProfession, index) in selectedProfessions" :key="index">
                    {{ selectedProfession.name }} ({{ selectedProfession.category }})
                    <button @click="removeProfession(index)">Remover</button>
                </li>
            </ul>

            <h2>Escolher Profissões:</h2>
            <div>
                <input type="text" v-model="searchQuery1" placeholder="Pesquisar Profissões" />
                <input type="text" v-model="searchQuery2" placeholder="Pesquisar por Categoria" />
            </div>

            <select multiple v-model="selectedProfessionIds" @change="updateSelectedProfessions">
                <option v-for="profession in filteredProfessions" :key="profession.id" :value="profession.id">
                    {{ profession.name }} ({{ profession.category }})
                </option>
            </select>
        </div> -->
    </div>
</template>

<script>

import Avatar from "@/components/AvatarComponent.vue"



export default {
    name: "EditarPerfilComponent",
    components:{
        Avatar,
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
            selectedProfessionIds: [],
            selectedProfessions: [],
            searchQuery1: "",
            searchQuery2: "",
        };
    },
    computed: {
        filteredSkills() {
            return this.skills.filter((skill) =>
                skill.toLowerCase().includes(this.searchQuery2.toLowerCase())
            );
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
    methods: {
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
    },
};
</script>

<style scoped>


</style>
