<template>
  <div>
    <h2>Profissões Selecionadas:</h2>
    <ul>
      <li v-for="(selectedProfession, index) in selectedProfessions" :key="index">
        {{ selectedProfession.name }} ({{ selectedProfession.category }})
        <br>
        Experiência: <input type="text" v-model="experience[selectedProfession.id]" placeholder="Experiência (em anos)">
        <button @click="removeProfession(selectedProfession.id)">Remover</button>
      </li>
    </ul>

    <h2>Escolher Profissões:</h2>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Pesquisar Profissões" />
      <input type="text" v-model="searchQuery2" placeholder="Pesquisar por Categoria" />
    </div>

    <select multiple v-model="selectedProfessionIds" @change="updateSelectedProfessions">
      <option v-for="profession in filteredProfessions" :key="profession.id" :value="profession.id">
        {{ profession.name }} ({{ profession.category }})
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      professions: [
        { id: 1, name: 'Engenheiro Civil', category: 'Engenharia' },
        { id: 2, name: 'Médico', category: 'Saúde' },
        { id: 3, name: 'Professor', category: 'Educação' },
        { id: 4, name: 'Advogado', category: 'Jurídico' },
        { id: 5, name: 'Programador', category: 'Tecnologia' },
        { id: 6, name: 'Chef de Cozinha', category: 'Gastronomia' },
      ],
      selectedProfessionIds: [],
      selectedProfessions: [],
      searchQuery: '',
      searchQuery2: '',
      experience: {}, // Objeto para armazenar o tempo de experiência por ID da profissão
    };
  },
  computed: {
    filteredProfessions() {
      let filtered = this.professions;

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(profession =>
          profession.name.toLowerCase().includes(query)
        );
      }

      if (this.searchQuery2) {
        const query2 = this.searchQuery2.toLowerCase();
        filtered = filtered.filter(profession =>
          profession.category.toLowerCase().includes(query2)
        );
      }

      return filtered;
    },
  },
  methods: {
    updateSelectedProfessions() {
      this.selectedProfessions = this.selectedProfessionIds.map(professionId => {
        const profession = this.professions.find(p => p.id === professionId);
        if (profession) {
          return { ...profession };
        }
      });
    },
    removeProfession(professionId) {
      const indexToRemove = this.selectedProfessions.findIndex(p => p.id === professionId);
      if (indexToRemove !== -1) {
        this.selectedProfessions.splice(indexToRemove, 1);
        delete this.experience[professionId]; // Remove o tempo de experiência associado
      }
    },
  },
};
</script>

