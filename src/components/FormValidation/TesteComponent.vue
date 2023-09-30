
<template>
  <div class="card flex justify-content-center">
    <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
      :maxSelectedLabels="3" class="w-full md:w-20rem" />
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