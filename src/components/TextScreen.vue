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
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": "ms5806166@gmail.com",
        "password": "Teste1236@"
      });

      // eslint-disable-next-line no-unused-vars
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8000/auth/login", {method: 'POST', body: raw})
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
