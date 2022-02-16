<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="helloMessage" />
    <HelloWorld :msg="userName" />
    <HelloWorld :msg="cats" />
    <div v-for="(cat, index) in cats" :key="index">
      {{ cat }}
    </div>
    {{ cats }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { UserMutations } from "@/store/user/mutations";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    this.$store.dispatch("loadAPIResult")
    setTimeout(() => {
      this.userName = 'Changed to Espira'
    }, 3000)
  },
  computed: {
    helloMessage: {
      get(): string {
        return this.$store.state.helloMessage
      },
    },
    userName: {
      get(): string {
        return this.$store.getters.getUserName
      },
      set(value: string): void {
        console.log("value", value)
        this.$store.commit(UserMutations.SET_USERNAME, value)
      }
    },
    cats: {
      get(): Array<string> {
        return this.$store.state.getCats
      }
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
