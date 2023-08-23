<template>
  <HelloWorld text="2312313" v-on:click="login()">
  </HelloWorld>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'TextScreen',
  components: {HelloWorld},
  props: {
    text: {
      required: true,
      type: String
    }
  },
  methods: {
    login: () => {
      const axios = require('axios');
      let data = JSON.stringify({
        "email": "ms5806166@gmail.com",
        "password": "Teste1236@"
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8000/auth/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
