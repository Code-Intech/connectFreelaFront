<template>
    <div class="col-10 h-100 d-inline-block">
        <form action="">
            <div>
                <div>
                    <h2>Informações Pessoas</h2>
                </div>

                <div class="">
                    <label class="form-label " for="">Nome do Perfil</label>
                    <input class="form-control" type="text" name="" id=""
                        style="max-width: 800px;border-color: var(--purple-primary);">
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">CPF:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);" disabled readonly
                            value="48685877873">
                    </div>
                    <div class="col">
                        <label class="form-label" for="">Data de Nascimento:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                </div>



                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Gênero</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Telefone:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">CEP:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Estado:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Cidade:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Bairro:</label>
                        <input class="form-control" type="text" name="" id=""
                            style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Endereço:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">Número:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>
                </div>



            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>

        </form>


        <form action="" class="mt-3">

            <h2>Área do Prestador</h2>

            <div>

                <div class="row">
                    <div class="col-3">
                        <label class="form-label" for="">Valor da Sua Diária:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">CNPJ:</label>
                        <input class="form-control" type="number" name="" id=""
                            style="border-color: var(--purple-primary);">
                    </div>
                    <div class="col">
                        <label class="form-label" for="">Nome da Sua Empresa:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>
                </div>



            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>
        </form>


        <form action="" class="mt-3">

            <h2>Profissões</h2>

            <div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Profissão:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">Tempo de experiência:</label>
                        <input class="form-control" type="number" name="" id=""
                            style="border-color: var(--purple-primary);">
                    </div>
                </div>




            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>

        </form>


        <form action="" class="mt-3">

            <h2>Informações de conta</h2>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">E-mail::</label>
                    <input class="form-control" type="text" name="" id=""
                        style="max-width: 800px;border-color: var(--purple-primary);">
                </div>

                <div class="col">
                    <label class="form-label" for="">Senha:</label>
                    <input class="form-control" type="number" name="" id=""
                        style="max-width: 800px;border-color: var(--purple-primary);">


                    <ul>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Deve conter:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Letras maiúsculas:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Letras minúsculas:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Caracter especial:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Números: 8 dígitos.</li>
                    </ul>


                </div>


            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>

        </form>








        <form action="" class="">


            <h2>
                Habilidades
            </h2>


            <div class="d-flex">




                <div class="" style="max-width: 40rem; ">


                    <input class="form-control mb-2" type="text" v-model="searchQuery" placeholder="Pesquisar Habilidades"
                        style="width: 20rem; border-color: var(--purple-primary);" />
                    <select style="height: 15rem;border-color: var(--purple-primary);" class="form-select " multiple
                        v-model="selectedSkillIds" @change="updateSelectedSkills">
                        <option v-for="skill in filteredSkills" :key="skill" :value="skill">{{ skill }}</option>
                    </select>



                </div>



                <div class="ms-4" style="max-width: 30rem; min-width: 20rem;">



                    <ul class="form-select " style="min-height: 25px;border-color: var(--purple-primary);">
                        <h6>
                            Habilidades Selecionadas
                        </h6>
                        <li class="m-2  " v-for="(selectedSkill, index) in selectedSkills" :key="index"
                            style="border-bottom: 2px solid; border-color: var(--purple-primary);">
                            {{ selectedSkill }}
                            <button class="m-3 btn" @click="removeSkill(index)"
                                style="border-color: var(--purple-primary);">Remover</button>
                        </li>
                    </ul>

                </div>


                <div class="border ms-4" style="border-color: var(--purple-primary);width: 100%;">


                    <h4 class="m-3">
                        Suas Habilidades
                    </h4>

                    <div>
                        <ul>
                            <li>
                                <font-awesome-icon icon="check" class="me-2" />PHP
                            </li>
                            <li>
                                <font-awesome-icon icon="check" class="me-2" />PHP
                            </li>
                            <li>
                                <font-awesome-icon icon="check" class="me-2" />PHP
                            </li>
                            <li>
                                <font-awesome-icon icon="check" class="me-2" />PHP
                            </li>
                            <li>
                                <font-awesome-icon icon="check" class="me-2" />PHP
                            </li>
                            <li>
                                <font-awesome-icon icon="check" class="me-2" />PHP
                            </li>

                        </ul>
                    </div>

                </div>

            </div>













        </form>








        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>





        <div>
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
        </div>


    </div>
</template>

<script>




export default {
    name: "EditarPerfilComponent",
    data() {
        return {
            skills: [
                'PHP',
                'Java',
                'CSS',
                'JavaScript',
                'Python',
                'HTML',
                'React',
                'Vue.js',
                'Angular',
                'Node.js',
            ],
            selectedSkillIds: [],
            selectedSkills: [],
            searchQuery: '',
        };
    },
    computed: {
        filteredSkills() {
            return this.skills.filter(skill =>
                skill.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        updateSelectedSkills() {
            this.selectedSkillIds.forEach(skillId => {
                if (!this.selectedSkills.includes(skillId)) {
                    this.selectedSkills.push(skillId);
                }
            });
        },
        removeSkill(index) {
            this.selectedSkills.splice(index, 1);
        },
    },
}
</script>

<style scoped></style>