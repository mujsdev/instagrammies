<template>
  <p class="time">Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "The Ultimate Popcorn Fingers 🔥";
    } else if (this.score < 400) {
      this.rank = "Fast but not Furious 🏎";
    } else {
      this.rank = "Buttery Fingers smh...";
    }
  },
};
</script>

<style>
.time {
  font-weight: 600;
  letter-spacing: 1px;
}
.rank {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: #f8f8f8;
  background-color: #e03132;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
