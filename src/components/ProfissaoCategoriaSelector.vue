<template>
    <div>
        <div class="border" style="width: auto;">


            <div class="dropdown d-grid">


                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Escolhar A Profissão
                </button>

                <div class="dropdown-menu p-2 border border-black" style="width: 100%;">

                    <input class="form-control mb-2 border border-black" v-model="search"
                        placeholder="Pesquisar profissão ou categoria" />
                    <select class="form-select border border-black" multiple v-model="selectedToAdd"
                        @change="addProfession(selectedToAdd)">
                        <option class="m-2" :value="null" disabled>Selecionar profissão para adicionar</option>
                        <option class="p-2 m-1 color" v-for="item in filteredOptions" :value="item.idtb_profissoes"
                            :key="item.idtb_profissoes">
                            {{ item.label }}
                        </option>
                    </select>
                </div>

            </div>


        </div>

        <!-- Mostrar profissões selecionadas -->
        <!-- <div>
            <div v-for="(profession, index) in selectedProfissoes" :key="index">
                {{ profession.label }}
                <button @click="removeProfession(index)">Remover</button>
            </div>
        </div> -->

        <ul class="form-select mt-4 border border-black" aria-label="Small select example" v-if="ifprofissao">
            <div class="p-2 m-1" v-for="(profession, index) in selectedProfissoes" :key="index">{{ profession.label }}
                <button class="btn btn-outline-danger ms-3" @click="removeProfession(index)">Remover</button>
            </div>

        </ul>
    </div>
</template>
  
<script>
import store from "@/store";
export default {
    props: {
        professions: Array, // Lista de profissões (idtb_profissoes, Profissao, tb_categoria_idtb_categoria)
        categories: Array, // Lista de categorias (idtb_categoria, Categoria)
    },
    data() {
        return {
            search: '',
            selectedProfissoes: [],
            ifprofissao: false
        };
    },
    computed: {
        store() {
            return store
        },
        filteredOptions() {
            const filterText = this.search.toLowerCase();
            return this.professions
                .filter((profissao) => {
                    const nomeProfissao = profissao.Profissao || '';
                    const categoria = this.getCategoryName(profissao.tb_categoria_idtb_categoria) || '';
                    return (
                        nomeProfissao.toLowerCase().includes(filterText) ||
                        categoria.toLowerCase().includes(filterText)
                    );
                })
                .map((profissao) => ({
                    label: `${profissao.Profissao} (Categoria: ${this.getCategoryName(profissao.tb_categoria_idtb_categoria)})`,
                    idtb_profissoes: profissao.idtb_profissoes,
                }));
        },
    },
    methods: {
        getCategoryName(categoryId) {
            if (this.categories) {
                const category = this.categories.find((cat) => cat.idtb_categoria === categoryId);
                return category ? category.Categoria : 'Desconhecida';
            }
            return 'Desconhecida';
        },
        removeProfession(professionId) {
            // Encontre o índice da profissão com base no id
            const index = this.selectedProfissoes.findIndex((profession) => profession.idtb_profissoes === professionId);
            this.selectedProfissoes.splice(index, 1);
            if (this.selectedProfissoes == undefined || this.selectedProfissoes == null || this.selectedProfissoes == 0 || this.selectedProfissoes.length == 0) {
                this.ifprofissao = false
            }
        },
        addProfession(professionIds) {
            if (Array.isArray(professionIds)) {
                // Percorra a matriz de IDs das profissões selecionadas
                for (const id of professionIds) {
                    // Verifique se a profissão já está na lista de profissões selecionadas
                    if (!this.selectedProfissoes.some((profession) => profession.idtb_profissoes === id)) {
                        // Encontre a profissão com base no ID
                        const professionToAdd = this.professions.find((profissao) => profissao.idtb_profissoes === id);

                        if (professionToAdd) {
                            // Adicione a profissão à lista de profissões selecionadas
                            this.selectedProfissoes.push({
                                label: `${professionToAdd.Profissao} (Categoria: ${this.getCategoryName(professionToAdd.tb_categoria_idtb_categoria)})`,
                                idtb_profissoes: professionToAdd.idtb_profissoes,
                            });

                            store.getters.StateEditarServico.push(this.selectedProfissoes)

                            this.ifprofissao = true
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
</style>