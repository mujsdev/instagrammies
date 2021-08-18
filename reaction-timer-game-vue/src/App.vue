<template>
  <h1>Reaction Timer 🍿</h1>
  <p>Hit play and click on the box as soon as you can :)</p>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results :score="score" v-if="showResults" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
body {
  background-color: #f8f8f8;
}

#app {
  font-family: "Architects Daughter", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #27272b;
  margin-top: 60px;
}

button {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 800;
  background-color: #7afad4;
  color: #27272b;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
