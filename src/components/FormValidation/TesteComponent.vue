
<template>
  <div class="card flex justify-content-center">
    <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9"
      containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
      </template>
    </Galleria>

    <!-- <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /> -->
    <button label="Show" icon="pi pi-external-link" @click="displayBasic = true">Fotos</button>
  </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';
export default {
  data() {
    return {
      images: null,
      responsiveOptions: [
        {
          breakpoint: '1500px',
          numVisible: 5
        },
        {
          breakpoint: '1024px',
          numVisible: 3
        },
        {
          breakpoint: '768px',
          numVisible: 2
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ],
      displayBasic: false
    };
  },
  mounted() {
    PhotoService.getImages().then((data) => (this.images = data));
  },

};
</script>