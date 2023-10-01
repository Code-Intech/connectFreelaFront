
<template>
  <div>

    <select class="form-select" aria-label="Default select example">
      <option selected>Presencial/Remoto</option>
      <option value="1">Remoto</option>
      <option value="2">Hibrido</option>
      <option value="3">Presencial</option>
    </select>



  </div>

  <div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedCities" :options="cities" display="chip" filter optionLabel="name"
        placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>






    <input type="text" name="" id="">

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCities: null,
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ]
    };
  }
};
</script>