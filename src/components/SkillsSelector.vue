<template>
    <div>
        <div class="border" style="width: auto;">
            <div class="dropdown d-grid">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Escolhar A Habilidade
                </button>
                <div class="dropdown-menu p-2 border border-black" style="width: 100%;">

                    <input class="form-control mb-2 border border-black" v-model="search"
                        placeholder="Pesquisar habilidade" />
                    <select class="form-select border border-black" multiple v-model="selectedToAdd"
                        @change="addSkill(selectedToAdd)" style="height: 150px;">
                        <option class="m-2" :value="null" disabled>Selecionar habilidade para adicionar</option>
                        <option class="p-2 m-1 color" v-for="item in filteredOptions" :value="item.idtb_habilidades"
                            :key="item.idtb_habilidades">
                            {{ item.Habilidade }}
                        </option>
                    </select>
                </div>
            </div>

        </div>

        <ul class="form-select mt-4 border border-black" aria-label="Small select example" v-if="ifskill">
            <div class="p-2 m-1" v-for="(skill, index) in selectedSkills" :key="index">Habilidade: {{ skill.Habilidade }}
                <button @click="removeSkill(index)" class="btn btn-outline-danger ms-3">Remover</button>
            </div>
        </ul>
    </div>
</template>
  
<script>
import store from "@/store";
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        skills: Array, // Lista de habilidades (idtb_habilidades, Habilidade, FlgStatus, created_at, updated_at)
        selectedSkillIds: Array, // IDs das habilidades selecionadas pelo usuário (vindos do backend)
    },
    data() {
        return {
            search: '',
            selectedSkills: [],
            ifskill: false
        };
    },
    computed: {
        store() {
            return store
        },
        filteredOptions() {
            const filterText = this.search.toLowerCase();
            return this.skills
                .filter((skill) => skill.Habilidade.toLowerCase().includes(filterText))
                .map((skill) => ({
                    Habilidade: skill.Habilidade,
                    idtb_habilidades: skill.idtb_habilidades,
                }));
        },
    },
    watch: {
        selectedSkillIds: {
            immediate: true,
            handler(newVal) {
                console.log('Valor de newVal:', newVal);
                if (Array.isArray(newVal)) {
                    this.selectedSkills = newVal.map((selectedId) => {
                        const skill = this.skills.find((s) => s.idtb_habilidades === selectedId);
                        console.log(this.selectedSkills)
                        console.log(skill)
                        if (skill) {
                            return {
                                Habilidade: skill.Habilidade,
                                idtb_habilidades: skill.idtb_habilidades,
                            };
                        }
                        return null;
                    }).filter((skill) => skill !== null);

                    this.ifskill = this.selectedSkills.length > 0;
                }
            }
        }
    },
    created() {
        this.skillsBackend()
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions([""]),
        ...mapGetters(["GetToken"]),
        ...mapMutations(["setServicoEditSkill"]),
        skillsBackend() {
            // this.setServicoEditSkill(null)
            if (this.selectedSkillIds != null || this.selectedSkillIds != undefined || this.selectedSkillIds.length > 0) {
                this.selectedSkills = this.selectedSkillIds
                this.ifskill = true
                this.setServicoEditSkill()
            }
            // console.log(this.selectedSkills)
        },
        removeSkill(index) {
            // const index = this.selectedSkills.findIndex((skill) => skill.idtb_habilidades === skillId);
            this.selectedSkills.splice(index, 1);
            this.setServicoEditSkill(this.selectedSkills)
            if (this.selectedSkills.length === 0) {
                this.ifskill = false;
            }
        },
        addSkill(skillIds) {
            if (Array.isArray(skillIds)) {
                for (const id of skillIds) {
                    if (!this.selectedSkills.some((skill) => skill.idtb_habilidades === id)) {
                        const skillToAdd = this.skills.find((skill) => skill.idtb_habilidades === id);

                        if (skillToAdd) {
                            this.selectedSkills.push({
                                Habilidade: skillToAdd.Habilidade,
                                idtb_habilidades: skillToAdd.idtb_habilidades,
                            });
                            this.ifskill = true
                            this.setServicoEditSkill(this.selectedSkills)
                        }
                    }
                }
            }
        },
    },
};
</script>
  
<style scoped>
.color:hover {
    background-color: rgb(153, 153, 153);
}
</style>>
