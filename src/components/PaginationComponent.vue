<template>
  <div class="card">
    <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
      <template #start="slotProps">
        Page: {{ slotProps.state.page }}
        First: {{ slotProps.state.first }}
        Rows: {{ slotProps.state.rows }}
      </template>
      <template #end>
        <!-- <Button type="button" icon="pi pi-search" /> -->
        <font-awesome-icon icon="magnifying-glass" />
      </template>
    </Paginator>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
